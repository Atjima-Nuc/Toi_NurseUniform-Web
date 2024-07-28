import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useState } from "react";
import validateLogin from "../validators/validate-login";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const initialInput = {
  username: "",
  password: "",
};

const initialInputError = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(input);
      if (error) {
        return setInputError(error);
      }
      setInputError(initialInputError);

      await login(input);
      navigate("/");
      toast.success("login successfully");
    } catch (err) {
      console.log(err);

      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? "invalid username"
            : "internal server error";
        return toast.error(message);
      }
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmitForm}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <Input
                name="username"
                value={input.username}
                onChange={handleChangeInput}
                error={inputError.username}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-sky-900 hover:text-sky-700"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <Input
                name="password"
                type="password"
                value={input.password}
                onChange={handleChangeInput}
                error={inputError.password}
                autoComplete="current-password"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

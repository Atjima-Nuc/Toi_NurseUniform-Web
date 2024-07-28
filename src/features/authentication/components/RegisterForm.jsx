import { useState } from "react";
import validateRegister from "../validators/validate-register";
import authApi from "../../../apis/auth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const initialInput = {
  firstName: "",
  lastName: "",
  username: "",
  phoneNo: "",
  password: "",
  confirmPassword: "",
  sex: "Female",
  email: "",
};

const initialInputError = {
  firstName: "",
  lastName: "",
  username: "",
  phoneNo: "",
  password: "",
  confirmPassword: "",
  sex: "",
  email: "",
};

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateRegister(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInput });

      await authApi.register(input);
      onSuccess();
      toast.success("Register successfully. please continue to log in.");
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        if (
          err.response.data.field === "phoneNo" ||
          err.response.data.field === "username"
        )
          setInputError((prev) => ({
            ...prev,
            phoneNo: "Your phone number is already in use",
            username: "username is already in use.",
          }));
      }
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmitForm}>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          USERNAME
        </label>
        <div>
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
            PASSWORD
          </label>
        </div>
        <div>
          <Input
            name="password"
            type="password"
            value={input.password}
            onChange={handleChangeInput}
            error={inputError.password}
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            CONFIRM PASSWORD
          </label>
        </div>
        <div>
          <Input
            name="confirmPassword"
            type="password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            error={inputError.confirmPassword}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          FIRST NAME
        </label>
        <div>
          <Input
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
            error={inputError.firstName}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          LAST NAME
        </label>
        <div>
          <Input
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
            error={inputError.lastName}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          PHONE NO.
        </label>
        <div>
          <Input
            name="phoneNo"
            value={input.phoneNo}
            onChange={handleChangeInput}
            error={inputError.phoneNo}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          E-MAIL
        </label>
        <div>
          <Input
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            error={inputError.email}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          SEX
        </label>
        <div className="flex justify-center gap-4" onChange={handleChangeInput}>
          <div className="flex justify-center gap-2">
            <Input
              name="sex"
              type="radio"
              id="Male"
              value="Male"
              width="w-5"
              ring="ring-0"
            />
            <label htmlFor="Male">Male</label>
          </div>
          <div className="flex justify-center gap-2">
            <Input
              name="sex"
              type="radio"
              id="Female"
              value="Female"
              width="w-5"
              ring="ring-0"
              check={true}
              // defaultChecked={value === "Female"}
            />
            <label htmlFor="Female">Female</label>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <Button type="submit">Sign up</Button>
        </div>
      </div>
    </form>
  );
}

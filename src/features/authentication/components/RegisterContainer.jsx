import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex gap-5 justify-center">
        <p className="text-center text-sm text-gray-500 content-center">
          Not a member?
        </p>
        <Button bg="lightBlue" width="regisB" onClick={() => setOpen(true)}>
          Create new account
        </Button>
      </div>
      <Modal
        title="CREATE NEW ACCOUNT"
        open={open}
        onClose={() => setOpen(false)}
        width="register"
      >
        <RegisterForm onSuccess={() => setOpen(false)} />
      </Modal>
    </>
  );
}

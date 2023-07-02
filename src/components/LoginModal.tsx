import { FC } from "react";
import { signIn } from "next-auth/react";
import Modal from "@/components/ui/Modal";
import Discord from "next-auth/providers/discord";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const handleLogin = () => {
    signIn("discord", { callbackUrl: "/dashboard" });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-bold">Login with Discord</h2>
        <p className="mb-4">
          Please log in with your Discord account to continue.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login with Discord
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;

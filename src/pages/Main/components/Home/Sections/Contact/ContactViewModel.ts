import { useState } from "react";
import { ContactEmail, CustomError } from "core";

import { intercatorUseCase } from "App";

export type ViewInterface = {
  sendContactEmailHandler: (
    name: string,
    email: string,
    message: string
  ) => void;
  resetFormStatus: () => void;
  error: CustomError | null;
  isLoading: boolean;
  isSuccess: true | null;
};

export default function ContactViewModel(): ViewInterface {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<CustomError | null>(null);
  const [isSuccess, setIsSuccess] = useState<true | null>(null);

  const sendContactEmailHandler = async (name: string, email: string, message: string) => {
    setIsSuccess(null);
    setIsLoading(true);
    const newEmail = new ContactEmail(name, email, message);
    try {
      await intercatorUseCase.sendContactEmail(newEmail);
      setIsSuccess(true);
    } catch (error) {
      setError(error as CustomError);
    } finally {
        setIsLoading(false)
    }
  };

  const resetFormStatus = () => {
    setError(null);
    setIsSuccess(null);
  }

  return {
    sendContactEmailHandler,
    resetFormStatus,
    error,
    isLoading,
    isSuccess,
  };
}

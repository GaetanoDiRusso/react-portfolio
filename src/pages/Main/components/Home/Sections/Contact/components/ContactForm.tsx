import { useState } from "react";
import { CustomError } from "core";
import classes from "./ContactForm.module.scss";
import InputForm from "./InputForm";

type Props = {
  onSubmit: (name: string, email: string, message: string) => void;
  onReset: () => void;
  onLoading: boolean;
  onSuccess: true | null;
  error: CustomError | null
};

export default function ContactForm({ onSubmit, onReset, onLoading, onSuccess, error }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const diableFrom = form.name === '' || form.email === '' || form.message === '' || Boolean(onSuccess) || Boolean(error)

  const changeFormHandler = (field: string, value: string) => {
    if(!onSuccess) {
      setForm(prev => ({...prev, [field]: value}))
    }
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(form.name, form.email, form.message)
  }

  return (
    <div className={classes.mainContainer}>
      <form onSubmit={handlerSubmit} className={classes.formContainer}>
        <InputForm
          type="input"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={changeFormHandler}
          success={onSuccess}
          onFocus={onReset}
        />
        <InputForm
          type="input"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={changeFormHandler}
          success={onSuccess}
          onFocus={onReset}
        />
        <InputForm
          type="textarea"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={changeFormHandler}
          success={onSuccess}
          onFocus={onReset}
        />

        <button disabled={diableFrom} className={`${classes.submitButton} ${onSuccess ? classes.success : ''} ${error ? classes.error : ''}`} type="submit">
          {onLoading ? 'Loading...' : error ? error.description : onSuccess ? 'done' : 'send'}
        </button>
      </form>
    </div>
  );
}
import classes from "./InputForm.module.scss";

type Props = {
  type: "input" | "textarea";
  placeholder: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: (field: string, value: string) => void;
  onFocus: () => void;
  success: true | null
};

export default function InputForm({
  type,
  placeholder,
  name,
  value,
  required,
  onChange,
  onFocus,
  success
}: Props) {
  required = required || false;

  switch (type) {
    case "input": {
      return (
        <input
          value={value}
          className={classes.input}
          onChange={(e) => onChange(e.target.name, e.target.value)}
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          disabled={Boolean(success)}
          onFocus={onFocus}
        />
      );
    }
    case "textarea": {
      return (
        <textarea
          value={value}
          className={classes.textarea}
          onChange={(e) => onChange(e.target.name, e.target.value)}
          id={name}
          name={name}
          placeholder={placeholder}
          rows={4}
          required={required}
          disabled={Boolean(success)}
          onFocus={onFocus}
        />
      );
    }
  }
}

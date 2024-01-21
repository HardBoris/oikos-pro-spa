import { SelectHTMLAttributes } from "react";
import "./select.style.css";

interface SelectProps extends SelectHTMLAttributes<HTMLInputElement> {
  register: any;
  name: string;
  error?: any;
  label?: string;
}

export const BGSelect = ({
  label,
  error,
  name,
  register,
  ...rest
}: SelectProps) => {
  return (
    <div className="select-wrapper">
      {label && (
        <div className="select-label">
          {label} {!!error && <span>: {error}</span>}
        </div>
      )}
      <select {...register(name)} {...rest} className="select-field"></select>
    </div>
  );
};

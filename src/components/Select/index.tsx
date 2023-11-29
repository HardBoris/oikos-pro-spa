import { SelectHTMLAttributes } from "react";
import "./select.style.css";
import { MyElement } from "../../context/ElementContext";

interface SelectProps extends SelectHTMLAttributes<HTMLInputElement> {
  register: any;
  name: string;
  error?: any;
  label?: string;
  options: MyElement[];
}

export const Select = ({
  label,
  error,
  name,
  register,
  options,
  ...rest
}: SelectProps) => {
  return (
    <div className="select-wrapper">
      {label && (
        <div className="select-label">
          {label} {!!error && <span>: {error}</span>}
        </div>
      )}
      <select {...register(name)} {...rest} className="select-field">
        {options.map((item, index) => (
          <option key={index} value={item.elementId}>
            {item.element}
          </option>
        ))}
      </select>
    </div>
  );
};

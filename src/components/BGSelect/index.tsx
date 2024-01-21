import { SelectHTMLAttributes } from "react";
import "./select.style.css";
import { Link } from "react-router-dom";

interface SelectProps extends SelectHTMLAttributes<HTMLInputElement> {
  register: any;
  name: string;
  error?: any;
  label?: string;
  enlace?: string;
  ruta?: string;
}

export const BGSelect = ({
  label,
  error,
  name,
  register,
  enlace,
  ruta,
  ...rest
}: SelectProps) => {
  return (
    <div className="select-wrapper">
      {label && (
        <div className="select-label">
          <div className="rotulo">
            {label} {!!error && <span>: {error}</span>}
          </div>
          {enlace && (
            <Link className="enlace" to={`${ruta}`}>
              {enlace}
            </Link>
          )}
        </div>
      )}
      <select {...register(name)} {...rest} className="select-field"></select>
    </div>
  );
};

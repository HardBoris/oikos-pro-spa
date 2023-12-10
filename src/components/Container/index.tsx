import { ReactNode } from "react";
import "./container.style.css";

interface ContainerProps {
  children: ReactNode;
  anchura?: string;
}

export const Container = ({ children, anchura }: ContainerProps) => (
  <div className="contenedor" style={{ width: `${anchura}` }}>
    {children}
  </div>
);

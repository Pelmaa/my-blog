
import "../App.css";

const Button = ({ children, outline, className = "" }) => (
  <button className={`btn ${outline ? "btn-outline" : ""} ${className}`}>{children}</button>
);

export default Button;

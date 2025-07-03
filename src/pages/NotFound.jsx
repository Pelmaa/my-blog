import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => (
  <div className="page text-center">
    <h1>404</h1>
    <p>Page Not Found</p>
    <Link to="/"><Button>Go Home</Button></Link>
  </div>
);

export default NotFound;

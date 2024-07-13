import logo from "../../assets/Logo/logo.png";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link className="w-[100px] py-2">
      <img className="w-full" src={logo} />
    </Link>
  );
}

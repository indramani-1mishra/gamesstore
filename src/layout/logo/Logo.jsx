import LogoLight2x from "@/images/logo.png";
// import LogoDark2x from "@/images/logo.png";
// import LogoSmall from "@/images/logo.png";
import {Link} from "react-router-dom";

import './logo.css';
const Logo = () => {
  return (
    <Link to={`/dashboard`} className="logo-link">
      <img className="logo-light logo-img " src={LogoLight2x} alt="logo" />
      {/* <img className="logo-dark logo-img" src={LogoDark2x} alt="logo" />
      <img className="logo-small logo-img logo-img-small" src={LogoSmall} alt="logo" /> */}
    </Link>
  );
};

export default Logo;

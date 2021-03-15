import { FunctionComponent } from "react";
import "./Header.scss";

interface HeaderProps {
  logo: string;
}

const Header: FunctionComponent<HeaderProps> = ({ logo }) => {
  function handleClick() {
    document.body.classList.toggle("dark");
  }

  return (
    <div className="header">
      <div className="navigation">
        <img src={logo} alt="aic logo" />
      </div>
      <div className="darkMode">
        <div onClick={handleClick} className="dot"></div>
      </div>
    </div>
  );
};

export default Header;

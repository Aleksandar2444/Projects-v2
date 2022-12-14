import Navbar from "../../Components/Navbar/Navbar";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <h2 style={{ fontSize: props.fontSize }}>{props.title}</h2>
      <Navbar navbarLinkData={props.navbarLinkData} />
    </header>
  );
};

export default Header;

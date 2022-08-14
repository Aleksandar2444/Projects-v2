import "./Navbar.css";

const Navbar = ({ navbarLinkData }) => {
  return (
    <nav className="Navbar">
      <ul>
        {navbarLinkData.map((linkText, i) => (
          <li key={linkText + i}>
            <a href="#">{linkText}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

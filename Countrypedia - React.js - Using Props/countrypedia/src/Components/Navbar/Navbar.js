import "./Navbar.css";

const Navbar = ({ navbarLinkData }) => {
  return (
    <div className="Navbar">
      <ul>
        {navbarLinkData.map((linkText, i) => (
          <li key={linkText + i}>
            <a href="#">{linkText}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

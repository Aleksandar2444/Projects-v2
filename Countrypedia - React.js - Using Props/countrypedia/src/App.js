import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import CountriesPage from "./Pages/CountriesPage/CountriesPage";

function App() {
  return (
    <div className="App">
      <Header
        title="COUNTRIES APP 🌍"
        navbarLinkData={["Home", "Countries", "About", "Contact"]}
      />
      <CountriesPage />
      <Footer>
        <p>
          Link to free countries api{" "}
          <a href="https://restcountries.com/" target="_blank" rel="noreferrer">
            Rest Countries
          </a>
        </p>
      </Footer>
    </div>
  );
}

export default App;

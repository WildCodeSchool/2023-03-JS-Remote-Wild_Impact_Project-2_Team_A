import "../sass/header.scss";
import Explore from "./Explore";
import Apropos from "./Apropos";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className="navigation-container">
      <Explore />
      <SearchBar />
      <Apropos />
    </div>

    /* <div>Menu déroulant, barre de recherche, à propos</div> */
  );
}

export default NavBar;

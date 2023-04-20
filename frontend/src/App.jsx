// US 1 import
import Header from "./components/Header";
import "./sass/header.scss";
// US 2 Import

// US 3 import

// US 4 import

import "./App.css";
import "./sass/style.scss";

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="carrousel">Carrousel</div>
        <div className="all-ctg">Catégories principales DC Comics & Marvel</div>
        <div className="btn-ctg">Boutons Catégories</div>
      </main>
      <footer>
        {/** US 3 Page */}
        <p>Les héros de la vente en ligne</p>
        <p>Contact</p>
        {/* Copyright et formulaire */}
      </footer>
      {/** US 4 Page */}
    </div>
  );
}

export default App;

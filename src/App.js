import logo from "./logo.svg";
import "./App.css";
import ProductsPage from "./components/productpage/ProductsPage";
import Header from "./components/header/Header";
// import ProductsPage from "../src/components/productpage/ProductsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsPage />
    </div>
  );
}

export default App;

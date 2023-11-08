// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { fetchProducts } from "./services/api/ProductService";
import { ProductGrid } from "./components/layout/ProductGrid";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(userSearch);
        console.log("EFFECT", data);
        setResults(data.results);
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar
        userSearch={userSearch}
        setUserSearch={setUserSearch}
        setResults={setResults}
      />
      <ProductGrid results={results} />
    </div>
  );
}

export default App;

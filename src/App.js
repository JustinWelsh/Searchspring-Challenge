// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { fetchProducts } from "./services/api/ProductService";
import { ProductGrid } from "./components/layout/ProductGrid";
import { Button } from "@nextui-org/react";
import PaginationBtns from "./components/ui/PaginationBtns";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(userSearch, 1);
        console.log("EFFECT", data);
        setResults(data.results);
        setPagination(data.pagination);
        console.log("pagination", pagination);
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
        setPagination={setPagination}
      />
      <PaginationBtns
        userSearch={userSearch}
        setResults={setResults}
        pagination={pagination}
        setPagination={setPagination}
      />
      <ProductGrid results={results} />
      <PaginationBtns
        userSearch={userSearch}
        setResults={setResults}
        pagination={pagination}
        setPagination={setPagination}
      />
    </div>
  );
}

export default App;

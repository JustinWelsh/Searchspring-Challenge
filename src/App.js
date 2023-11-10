// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { fetchProducts } from "./services/api/ProductService";
import { ProductGrid } from "./components/layout/ProductGrid";
import PaginationBtns from "./components/ui/PaginationBtns";
import { useUserContext } from "./services/context/UserContext";

function App() {
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState({});
  // const [cart, setCart] = useState(0);

  const { userSearch } = useUserContext();

  useEffect(() => {
    console.log(userSearch);
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
    <div className="bg-wallpaper min-h-screen">
      <NavBar setResults={setResults} setPagination={setPagination} />
      <PaginationBtns
        setResults={setResults}
        pagination={pagination}
        setPagination={setPagination}
      />
      <ProductGrid results={results} />
      <PaginationBtns
        setResults={setResults}
        pagination={pagination}
        setPagination={setPagination}
      />
    </div>
  );
}

export default App;

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
  const [pagination, setPagination] = useState({});

  const { userSearch, setProducts } = useUserContext();

  useEffect(() => {
    console.log(userSearch);
    const fetchData = async () => {
      try {
        const data = await fetchProducts(userSearch, 1);
        console.log("EFFECT", data);
        setProducts(data.results);
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
      <NavBar setResults={setProducts} setPagination={setPagination} />
      <PaginationBtns pagination={pagination} setPagination={setPagination} />
      <ProductGrid />
      <PaginationBtns pagination={pagination} setPagination={setPagination} />
    </div>
  );
}

export default App;

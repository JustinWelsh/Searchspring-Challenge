// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { fetchProducts } from "./services/api/ProductService";
import { ProductGrid } from "./components/layout/ProductGrid";
import PaginationBtns from "./components/ui/PaginationBtns";
import { useUserContext } from "./services/context/UserContext";
import SearchComponent from "./components/ui/SearchComponent";

function App() {
  const { userSearch, setProducts, setPagination } = useUserContext();

  useEffect(() => {
    console.log(userSearch);
    const fetchData = async () => {
      try {
        const data = await fetchProducts(userSearch, 1);
        console.log("EFFECT", data);
        setProducts(data.results);
        setPagination(data.pagination);
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-wallpaper min-h-screen">
      <NavBar />
      <SearchComponent classes="py-4 px-10 block sm:hidden bg-black/80" />
      <PaginationBtns />
      <ProductGrid />
      <PaginationBtns />
    </div>
  );
}

export default App;

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
    const fetchData = async () => {
      try {
        const data = await fetchProducts(userSearch, 1);
        setProducts(data.results);
        setPagination(data.pagination);
      } catch (error) {
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
      <div className="flex justify-center">
        <ProductGrid />
      </div>
      <PaginationBtns />
    </div>
  );
}

export default App;

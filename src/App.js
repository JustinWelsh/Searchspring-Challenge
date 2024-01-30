import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { fetchProducts } from "./services/api/ProductService";
import { ProductGrid } from "./components/layout/ProductGrid";
import PaginationBtns from "./components/ui/PaginationBtns";
import { useUserContext } from "./services/context/UserContext";
import SearchComponent from "./components/ui/SearchComponent";
import BtnSearchGroup from "./components/ui/BtnSearchGroup";
import MsgCarousel from "./components/ui/MsgCarousel";

function App() {
  const { userSearch, setUserSearch, setProducts, setPagination } =
    useUserContext();

  useEffect(() => {
    fetchData(userSearch);
  }, []);
  const fetchData = async (product) => {
    try {
      const data = await fetchProducts(product, 1);
      setProducts(data.results);
      setPagination(data.pagination);
      setUserSearch(product);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="bg-wallpaper min-h-screen">
      <NavBar fetchData={fetchData} />
      <BtnSearchGroup fetchData={fetchData} classes={"lg:hidden"} />
      <MsgCarousel
        texts={[
          "Free standard shipping over $75",
          "20% student discount!",
          "Free 30-day return policy",
        ]}
      />
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

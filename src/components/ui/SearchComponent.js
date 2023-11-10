import { Button } from "@nextui-org/react";
import React from "react";
import SearchInput from "../common/SearchInput";
import { useUserContext } from "../../services/context/UserContext";
import { fetchProducts } from "../../services/api/ProductService";

const SearchComponent = ({ classes }) => {
  const { userSearch, setUserSearch, setProducts, setPagination } =
    useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchProducts(userSearch, 1)
      .then((data) => {
        // Handle successful response here
        setProducts(data.results);
        setPagination(data.pagination);
      })
      .catch((error) => {
        // Handle error here
        console.error("Error fetching products:", error);
      });
  };
  return (
    <form onSubmit={handleSubmit} className={`${classes}`}>
      <div className={`flex justify-center`}>
        <SearchInput setUserSearch={setUserSearch} />
        <Button type="submit" color="default" className="">
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchComponent;

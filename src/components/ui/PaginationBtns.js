import { Button } from "@nextui-org/react";
import React from "react";
import { fetchProducts } from "../../services/api/ProductService";
import { useUserContext } from "../../services/context/UserContext";

const PaginationBtns = () => {
  const { userSearch, setProducts, pagination, setPagination } =
    useUserContext();

  const handlePrev = async () => {
    console.log("prev");
    try {
      const data = await fetchProducts(userSearch, pagination.previousPage);
      console.log("EFFECT", data);
      setProducts(data.results);
      setPagination(data.pagination);
      console.log("pagination", pagination);
    } catch (error) {
      // Handle any errors here
      console.error("Error fetching products:", error);
    }
  };
  const handleNext = async () => {
    console.log("next");
    try {
      const data = await fetchProducts(userSearch, pagination.nextPage);
      console.log("EFFECT", data);
      setProducts(data.results);
      setPagination(data.pagination);
      console.log("pagination", pagination);
    } catch (error) {
      // Handle any errors here
      console.error("Error fetching products:", error);
    }
  };
  return (
    <div className="flex justify-center gap-8 p-10">
      <Button
        // className="bg-gradient-to-r from-cyan-300 to-blue-300 text-white textShadow shadow-lg shadow-cyan-500/50"
        className="bg-gradient-to-r from-amber-500 to-amber-700 text-white textShadow shadow-lg shadow-amber-200/50"
        onClick={handlePrev}
        isDisabled={pagination.currentPage === 1}
      >
        Prev
      </Button>

      <Button
        className="bg-gradient-to-r from-teal-500 to-teal-700 text-white textShadow shadow-lg shadow-teal-500/50"
        onClick={handleNext}
        isDisabled={pagination.currentPage === pagination.totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationBtns;

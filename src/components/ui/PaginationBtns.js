import { Button } from "@nextui-org/react";
import React from "react";
import { fetchProducts } from "../../services/api/ProductService";
import { useUserContext } from "../../services/context/UserContext";

const PaginationBtns = () => {
  const { userSearch, setProducts, pagination, setPagination } =
    useUserContext();

  const handlePrev = async () => {
    try {
      const data = await fetchProducts(userSearch, pagination.previousPage);
      setProducts(data.results);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleNext = async () => {
    try {
      const data = await fetchProducts(userSearch, pagination.nextPage);
      setProducts(data.results);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  return (
    <div className="flex justify-center gap-8 p-10">
      <Button
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

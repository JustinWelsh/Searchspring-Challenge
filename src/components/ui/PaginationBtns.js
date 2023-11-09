import { Button } from "@nextui-org/react";
import React from "react";
import { fetchProducts } from "../../services/api/ProductService";

const PaginationBtns = ({
  userSearch,
  setResults,
  pagination,
  setPagination,
}) => {
  const handlePrev = async () => {
    console.log("prev");
    try {
      const data = await fetchProducts(userSearch, pagination.previousPage);
      console.log("EFFECT", data);
      setResults(data.results);
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
      setResults(data.results);
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
        // color="primary"
        className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white"
        onClick={handlePrev}
        isDisabled={pagination.currentPage === 1}
      >
        Prev
      </Button>

      <Button
        // color="primary"
        className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white"
        onClick={handleNext}
        isDisabled={pagination.currentPage === pagination.totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationBtns;

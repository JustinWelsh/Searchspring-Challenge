import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import React from "react";
import { useUserContext } from "../../services/context/UserContext";

const AddToCartBtn = () => {
  const { setCart } = useUserContext();

  const handleAddToCart = () => {
    setCart((prev) => prev + 1);
  };
  return (
    <Button
      className="bg-amber-200"
      size="sm"
      onClick={handleAddToCart}
      type="button"
      aria-label="Add to Cart"
    >
      <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
    </Button>
  );
};

export default AddToCartBtn;

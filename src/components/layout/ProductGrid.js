import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import React from "react";
import { useUserContext } from "../../services/context/UserContext";

export const ProductGrid = () => {
  const { setCart, products } = useUserContext();

  const getDiscount = (msrp, price) => {
    const difference = msrp - price;
    const result = (difference / price) * 100;
    return Math.floor(result);
  };

  const handleAddToCart = () => {
    setCart((prev) => prev + 1);
  };
  return (
    <div className="py-5 px-10 gap-10 justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
      {products.map((product) => (
        <Card
          key={product.id}
          className=""
          shadow="sm"
          isPressable
          onPress={() => console.log("product pressed")}
        >
          <CardBody className="overflow-visible p-0">
            {product.on_sale[0] === "Yes" && (
              <>
                <div className="py-5 px-20 absolute z-30 top-5 -left-[55px] -rotate-45 bg-red-500 opacity-80"></div>

                <span className="p-2 px-12 text-white absolute z-30 top-3 -left-12 -rotate-45 font-bold">
                  {/* {getDiscount(product.msrp, product.price)}% Off */}
                  On Sale!
                </span>
              </>
            )}
            <Image
              isZoomed
              shadow="sm"
              radius="lg"
              width="100"
              alt={product.title}
              className="w-full object-cover max-h-[500px]"
              src={product.thumbnailImageUrl}
              fallbackSrc={`${process.env.PUBLIC_URL}/images/test3.jpg`}
            />
          </CardBody>
          <CardFooter className="block text-small justify-between">
            <b>{product.title}</b>
            <div className="flex justify-between mt-4">
              <div className="flex">
                <p className="text-green-500 text-2xl font-semibold">
                  ${product.price}
                </p>
                {product.msrp > product.price && (
                  <p className="text-slate-500 line-through">${product.msrp}</p>
                )}
              </div>
              <Button
                className="bg-gradient-to-r from-amber-200 to-amber-300"
                size="sm"
                onClick={handleAddToCart}
                type="button"
                aria-label="Add to Cart"
              >
                <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

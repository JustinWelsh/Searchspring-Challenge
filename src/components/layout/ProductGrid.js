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

export const ProductGrid = ({ results, setCart }) => {
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
      {results.map((product, index) => (
        <>
          <Card
            className=""
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("product pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <div className="py-5 px-20 absolute z-30 top-5 -left-[55px] -rotate-45 bg-red-500 opacity-80"></div>

              <span className="p-2 px-12 text-white absolute z-30 top-3 -left-12 -rotate-45 font-bold">
                {getDiscount(product.msrp, product.price)}% Off
              </span>
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
                  <p className="text-green-500 text-2xl textShadow font-semibold">
                    ${product.price}
                  </p>
                  {product.msrp > product.price && (
                    <p className="text-slate-300 line-through">
                      ${product.msrp}
                    </p>
                  )}
                </div>
                <Button
                  className="bg-gradient-to-r from-amber-200 to-amber-300"
                  size="sm"
                  onClick={handleAddToCart}
                >
                  <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col products-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                isZoomed
                alt={product.title}
                className="object-cover rounded-xl"
                src={product.thumbnailImageUrl}
                width={270}
              />
            </CardBody>
          </Card> */}
        </>
      ))}
    </div>
  );
};

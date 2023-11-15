import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import AddToCartBtn from "../common/AddToCartBtn";

const ProductCard = ({ product }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imageSrc, setImageSrc] = useState(product.thumbnailImageUrl);

  const handleImgError = () => {
    setImageSrc(`${process.env.PUBLIC_URL}/images/oops!.jpg`);
  };
  return (
    <Card className="py-4 w-[290]">
      <CardBody className="overflow-visible py-2">
        {product.on_sale[0] === "Yes" && (
          <>
            <div className="py-5 px-20 absolute z-30 top-2 -left-[65px] -rotate-45 bg-red-500 opacity-80"></div>

            <span className="p-2 px-12 text-white absolute z-30 -top-1 -left-12 -rotate-45 font-bold">
              On Sale!
            </span>
          </>
        )}
        <Image
          onClick={onOpen}
          isZoomed
          shadow="sm"
          alt={product.title}
          className="object-cover rounded-xl"
          src={imageSrc}
          width={267}
          height={400}
          onError={handleImgError}
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
          <AddToCartBtn />
        </div>
      </CardFooter>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ProductDetails product={product} />
      </Modal>
    </Card>
  );
};

export default ProductCard;

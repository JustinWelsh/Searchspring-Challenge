import {
  Button,
  Chip,
  Image,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import AddToCartBtn from "../common/AddToCartBtn";

const ProductDetails = ({ product }) => {
  return (
    <ModalContent className="overflow-x-hidden">
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            {product.title}
          </ModalHeader>
          <ModalBody>
            <Image
              isZoomed
              shadow="sm"
              alt={product.title}
              className="object-cover rounded-xl"
              src={product.thumbnailImageUrl}
              fallbackSrc={`${process.env.PUBLIC_URL}/images/oops!.jpg`}
              width={267}
              height={400}
            />
            {product.on_sale[0] === "Yes" && (
              <>
                <div className="py-6 px-28 absolute z-30 top-9 -right-[55px] rotate-45 bg-red-500 opacity-80"></div>

                <span className="p-2 px-12 text-3xl text-white absolute z-30 top-8 -right-12 rotate-45 font-bold">
                  On Sale!
                </span>
              </>
            )}

            <div className="flex gap-2">
              <Chip variant="flat">{product.ss_product_type}</Chip>
              <Chip variant="flat">{product.season}</Chip>
              {product.material && (
                <Chip variant="flat">{product.material[0]}</Chip>
              )}
            </div>
            <p className="text-3xl text-green-600 font-semibold">
              ${product.price}
            </p>

            <p className="text-sm">
              MSRP price: $<span className="line-through">{product.msrp}</span>
            </p>
            <p className="text-blue-300">FREE Returns</p>
            <p>
              <span className="text-green-600 px-2">
                {product.stockMessage}
              </span>
              ({product.quantity_available[0]})
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="default" variant="light" onPress={onClose}>
              Close
            </Button>
            <AddToCartBtn />
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
};

export default ProductDetails;

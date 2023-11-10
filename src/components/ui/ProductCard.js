import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { useUserContext } from "../../services/context/UserContext";
import ProductDetails from "./ProductDetails";

const ProductCard = ({ product }) => {
  const { setCart } = useUserContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleAddToCart = () => {
    setCart((prev) => prev + 1);
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
          src={product.thumbnailImageUrl}
          fallbackSrc={`${process.env.PUBLIC_URL}/images/oops!.jpg`}
          width={267}
          height={400}
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
            className="bg-amber-200"
            size="sm"
            onClick={handleAddToCart}
            type="button"
            aria-label="Add to Cart"
          >
            <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
          </Button>
        </div>
      </CardFooter>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ProductDetails product={product} />
      </Modal>
    </Card>
  );
};

export default ProductCard;

// <Card
//   key={product.id}
//   className=""
//   shadow="sm"
//   isPressable
//   onPress={() => console.log("product pressed")}
// >
//   <CardBody className="overflow-visible p-0">
//     {product.on_sale[0] === "Yes" && (
//       <>
//         <div className="py-5 px-20 absolute z-30 top-5 -left-[55px] -rotate-45 bg-red-500 opacity-80"></div>

//         <span className="p-2 px-12 text-white absolute z-30 top-3 -left-12 -rotate-45 font-bold">
//           On Sale!
//         </span>
//       </>
//     )}
//     <Image
//       isZoomed
//       shadow="sm"
//       radius="lg"
//       width="100"
//       alt={product.title}
//       className="w-full object-cover max-h-[500px]"
//       src={product.thumbnailImageUrl}
//       fallbackSrc={`${process.env.PUBLIC_URL}/images/circle-no-img.jpg`}
//     />
//   </CardBody>
//   <CardFooter className="block text-small justify-between">
//     <b>{product.title}</b>
//     <div className="flex justify-between mt-4">
//       <div className="flex">
//         <p className="text-green-500 text-2xl font-semibold">
//           ${product.price}
//         </p>
//         {product.msrp > product.price && (
//           <p className="text-slate-500 line-through">
//             ${product.msrp}
//           </p>
//         )}
//       </div>
//       <Button
//         className="bg-gradient-to-r from-amber-200 to-amber-300"
//         size="sm"
//         onClick={handleAddToCart}
//         type="button"
//         aria-label="Add to Cart"
//       >
//         <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
//       </Button>
//     </div>
//   </CardFooter>
// </Card>

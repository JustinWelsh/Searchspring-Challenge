import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

export const ProductGrid = ({ results }) => {
  return (
    <div className="p-10 gap-3 grid grid-cols-2 sm:grid-cols-4">
      {results.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[500px]"
              src={item.thumbnailImageUrl}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">${item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

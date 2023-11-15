import { Button } from "@nextui-org/react";
import React from "react";

const BtnSearchGroup = ({ fetchData }) => {
  return (
    <div className="flex justify-center bg-[#F1EBDF] opacity-95 py-1">
      <Button
        className="rounded uppercase focus:border-b-4 border-black focus:font-bold"
        variant="light"
        onClick={() => {
          fetchData("shirts");
        }}
      >
        Shirts
      </Button>
      <Button
        className="rounded uppercase focus:border-b-4 border-black focus:font-bold"
        variant="light"
        onClick={() => {
          fetchData("pants");
        }}
      >
        Pants
      </Button>
      <Button
        className="rounded uppercase focus:border-b-4 border-black focus:font-bold"
        variant="light"
        onClick={() => {
          fetchData("shorts");
        }}
      >
        Shorts
      </Button>
      <Button
        className="rounded uppercase focus:border-b-4 border-black focus:font-bold"
        variant="light"
        onClick={() => {
          fetchData("shoes");
        }}
      >
        Shoes
      </Button>
    </div>
  );
};

export default BtnSearchGroup;

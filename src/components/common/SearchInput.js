import { Input } from "@nextui-org/react";
import React from "react";
import { SearchIcon } from "./SearchIcon";

function SearchInput({ setUserSearch }) {
  return (
    <Input
      onChange={(e) => {
        const userInput = e.target.value;
        setUserSearch(userInput);
      }}
      classNames={{
        base: "max-w-full sm:max-w-[15rem] h-10",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Search..."
      size="sm"
      startContent={<SearchIcon size={18} />}
      type="search"
    />
  );
}

export default SearchInput;

import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => {
  return (
    <Input
      backgroundColor="white"
      mb={{ base: "30px", md: "40px" }}
      ml="5px"
      width={{ base: "300px", md: "400px" }}
      type="text"
      placeholder="Search here for recipe"
      onChange={onChange}
      {...props}
    />
  );
};

//DONE!!

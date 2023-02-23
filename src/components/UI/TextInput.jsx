import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => {
  return (
    <Input
      className="input"
      backgroundColor={"white"}
      mb={"30px"}
      ml={"15px"}
      width={"330px"}
      type="text"
      placeholder="Search here for recipe"
      onChange={onChange}
      {...props}
    />
  );
};

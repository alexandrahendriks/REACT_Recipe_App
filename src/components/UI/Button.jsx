import { Button as CButton } from "@chakra-ui/react";
export const Button = ({ onClick, ...props }) => {
  return (
    <CButton className="button" colorScheme="teal" onClick={onClick} {...props}>
      {"<"}
    </CButton>
  );
};

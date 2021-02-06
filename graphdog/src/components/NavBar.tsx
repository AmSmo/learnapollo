import React from "react";
import { Flex, Button, Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";
interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = (props) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="login">
          <Link m={8} color="white" fontWeight="700">
            Login
          </Link>
        </NextLink>
        <NextLink href="register">
          <Link m={8} color="white" fontWeight="700">
            Register
          </Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex width="20vw" justifyContent="space-around" align="center">
        <Button variant="link">Logout</Button>
        <Box>{data.me.username}</Box>
      </Flex>
    );
  }
  return (
    <Box p={4} marginBottom="5px" bg="lightgrey">
      {body}
    </Box>
  );
};

export default NavBar;

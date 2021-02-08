import React from "react";
import { Flex, Button, Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  let body = null;
  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login" as="div">
          <Link m={8} color="white" fontWeight="700">
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link m={8} color="white" fontWeight="700">
            Register
          </Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex width="20vw" justifyContent="space-around" align="center">
        <Button onClick={() => logout()} isLoading={logoutFetching}>
          Logout
        </Button>
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

export default withUrqlClient(createUrqlClient)(NavBar);

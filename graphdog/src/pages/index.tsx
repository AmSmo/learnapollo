import NavBar from "../components/NavBar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useDoggosQuery } from "../generated/graphql";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Wrapper from "../components/Wrapper";
const Index = () => {
  const [{ data }] = useDoggosQuery({
    variables: { limit: 10 },
  });
  return (
    <div>
      <NavBar />
      YO!!!
      <br></br>
      <Wrapper variant="regular">
        <Stack spacing={8}>
          {data ? (
            data.dogs.map((dog) => (
              <Box key={dog.id} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{dog.name}</Heading>
                <Text mt={4}>{dog.textSnippet}</Text>
              </Box>
            ))
          ) : (
            <div>Loading..</div>
          )}
        </Stack>
      </Wrapper>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

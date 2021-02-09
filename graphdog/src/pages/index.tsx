import NavBar from "../components/NavBar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { Doggo, useDoggosQuery } from "../generated/graphql";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import NextLink from "next/link";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import Treat from "../components/Treat";
import Treats from "../components/Treat";
const Index = () => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as null | string,
  });
  const [{ data, fetching }] = useDoggosQuery({
    variables,
  });

  return (
    <div>
      <NavBar pageProps />
      <NextLink href="/adopt-dog">
        <Link ml="auto">Adopt a Dog</Link>
      </NextLink>
      <br></br>
      <Wrapper variant="regular">
        <Stack spacing={8}>
          {data ? (
            data.doggos.doggos.map((dog) => (
              <Box key={dog.id} p={5} shadow="md" borderWidth="1px">
                <Flex>
                  <Heading fontSize="xl">{dog.name}</Heading>
                  <Treats dog={dog} />
                </Flex>
                <Text pl={7} fontSize="sm" mt={2}>
                  <strong>Lucky Dog Owner</strong>: {dog.owner.username}
                </Text>
                <Text mt={4}>{dog.textSnippet}</Text>
              </Box>
            ))
          ) : (
            <div>Loading..</div>
          )}

          {data && data.doggos.hasMore ? (
            <Button
              isLoading={fetching}
              onClick={() =>
                setVariables({
                  limit: variables.limit,
                  cursor:
                    data.doggos.doggos[data.doggos.doggos.length - 1]
                      .createdDate,
                })
              }
            >
              {" "}
              Load More
            </Button>
          ) : null}
        </Stack>
        {!fetching && !data ? <p>Well That didn't work</p> : null}
      </Wrapper>
    </div>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

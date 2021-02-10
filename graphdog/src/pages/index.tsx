import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import React, { useState } from "react";
import EditDeleteDoggoButtons from "../components/EditDeleteDoggoButtons";
import NavBar from "../components/NavBar";
import Treats from "../components/Treat";
import Wrapper from "../components/Wrapper";
import {
  useDeleteDogMutation,
  useDoggosQuery,
  useMeQuery,
} from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
const Index = () => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as null | string,
  });
  const [{ data, fetching }] = useDoggosQuery({
    variables,
  });
  const [{ data: meData }] = useMeQuery();
  const [, deleteDog] = useDeleteDogMutation();
  return (
    <div>
      <NavBar pageProps />

      <br></br>
      <Wrapper variant="regular">
        <Stack spacing={8}>
          {data ? (
            data.doggos.doggos.map((dog) =>
              !dog ? null : (
                <Box key={dog.id} p={5} shadow="md" borderWidth="1px">
                  <Flex>
                    <NextLink href="/doggo/[id]" as={`/doggo/${dog.id}`}>
                      <Link>
                        <Heading fontSize="xl">{dog.name}</Heading>
                      </Link>
                    </NextLink>
                  </Flex>
                  <Flex>
                    <Box width="80%">
                      <Text pl={7} fontSize="sm" mt={2}>
                        <strong>Lucky Dog Owner</strong>: {dog.owner.username}
                      </Text>
                      <Text mt={4}>{dog.textSnippet}</Text>
                    </Box>
                    <Box width="20%" ml="auto" textAlign="right">
                      <Treats dog={dog} />
                      {meData?.me?.id === dog.ownerId ? (
                        <EditDeleteDoggoButtons id={dog.id} />
                      ) : null}
                    </Box>
                  </Flex>
                </Box>
              )
            )
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

export default Index;

// URQL WAY BELOW

// export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

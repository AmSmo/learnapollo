import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import NextLink from "next/link";
import React, { useState } from "react";
import EditDeleteDoggoButtons from "../components/EditDeleteDoggoButtons";
import NavBar from "../components/NavBar";
import Treats from "../components/Treat";
import Wrapper from "../components/Wrapper";
import { DoggosQuery, useDoggosQuery, useMeQuery } from "../generated/graphql";
import { withApollo } from "../utils/createWithApollo";
const Index = () => {
  // OLD URQL PAGINATION
  // const [variables, setVariables] = useState({
  //   limit: 10,
  //   cursor: null as null | string,
  // });
  const { data, loading, fetchMore, variables } = useDoggosQuery({
    variables: { limit: 10, cursor: null as null | string },
    notifyOnNetworkStatusChange: true,
  });
  const { data: meData } = useMeQuery();

  return (
    <div>
      <NavBar />

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
              isLoading={loading}
              onClick={
                () => {
                  fetchMore({
                    variables: {
                      limit: variables?.limit,
                      cursor:
                        data.doggos.doggos[data.doggos.doggos.length - 1]
                          .createdDate,
                    },
                    updateQuery: (
                      previousResult,
                      { fetchMoreResult }: { fetchMoreResult: DoggosQuery }
                    ) => {
                      if (!fetchMoreResult) {
                        return previousResult as DoggosQuery;
                      } else {
                        return {
                          __typename: "Query",
                          doggos: {
                            __typename: "PaginatedDoggos",
                            hasMore: fetchMoreResult.doggos.hasMore,
                            doggos: [
                              ...previousResult.doggos.doggos,
                              ...fetchMoreResult.doggos.doggos,
                            ],
                          },
                        };
                      }
                    },
                  });
                }
                // OLD URQL WAY
                // setVariables({
                //   limit: variables.limit,
                //   cursor:
                //     data.doggos.doggos[data.doggos.doggos.length - 1]
                //       .createdDate,
                // })
              }
            >
              {" "}
              Load More
            </Button>
          ) : null}
        </Stack>
        {!loading && !data ? <p>Well That didn't work</p> : null}
      </Wrapper>
    </div>
  );
};

export default withApollo({ ssr: true })(Index);

// URQL WAY BELOW

// export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

import { Box, Heading } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import LayOut from "../../components/LayOut";
import { useDoggoQuery } from "../../generated/graphql";

import { createUrqlClient } from "../../utils/createUrqlClient";

interface DoggoProps {}

export const DoggoInfo: React.FC<DoggoProps> = ({}) => {
  const router = useRouter();
  const id =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  console.log(id);
  const [{ data, fetching }] = useDoggoQuery({
    pause: id === -1,
    variables: { id },
  });
  console.log(data);

  if (!data?.dog) {
    return (
      <LayOut>
        <Box>No such pup!</Box>
      </LayOut>
    );
  }
  return (
    <LayOut>
      <Heading>{data.dog.name}</Heading>
      {data.dog.story}
    </LayOut>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(DoggoInfo);

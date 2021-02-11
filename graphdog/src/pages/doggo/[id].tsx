import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import EditDeleteDoggoButtons from "../../components/EditDeleteDoggoButtons";
import LayOut from "../../components/LayOut";
import { useMeQuery } from "../../generated/graphql";
import { withApollo } from "../../utils/createWithApollo";
import { useGetDoggo } from "../../utils/getDoggo";

interface DoggoProps {}

export const DoggoInfo: React.FC<DoggoProps> = ({}) => {
  const { data: meData } = useMeQuery();
  const { data, loading } = useGetDoggo();

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
      <br></br>
      {meData?.me?.id === data.dog.ownerId ? (
        <EditDeleteDoggoButtons id={data.dog.id} />
      ) : null}
    </LayOut>
  );
};

export default withApollo({ ssr: true })(DoggoInfo);

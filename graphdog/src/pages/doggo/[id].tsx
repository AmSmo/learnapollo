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
  const { data, loading, error } = useGetDoggo();
  console.log(error);
  if (!data?.doggo) {
    return (
      <LayOut>
        <Box>No such pup!</Box>
      </LayOut>
    );
  }
  return (
    <LayOut>
      <Heading>{data.doggo.name}</Heading>
      {data.doggo.story}
      <br></br>
      {meData?.me?.id === data.doggo.ownerId ? (
        <EditDeleteDoggoButtons id={data.doggo.id} />
      ) : null}
    </LayOut>
  );
};

export default withApollo({ ssr: true })(DoggoInfo);

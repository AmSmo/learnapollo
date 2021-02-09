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
  return <LayOut>{data?.dog?.name}</LayOut>;
};

export default withUrqlClient(createUrqlClient, { ssr: true })(DoggoInfo);

import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import gql from "graphql-tag";
import {
  Doggo,
  DoggoSnippetFragment,
  useFeedMutation,
  useMeQuery,
} from "../generated/graphql";

interface TreatProps {
  dog: DoggoSnippetFragment;
}

const updateAfterFeeding = (value: number, cache: any, dogId: number) => {
  const data = cache.readFragment({
    id: "Doggo:" + dogId,
    fragment: gql`
      fragment _ on Doggo {
        id
        treats
        treatStatus
      }
    `,
  });

  if (data) {
    const newPoints =
      (data.treats as number) + (!data.treatStatus ? 1 : 2) * value;
    if (data.treatStatus === value) {
      return;
    }
    cache.writeFragment({
      id: "Doggo:" + dogId,
      fragment: gql`
        fragment __ on Doggo {
          treats
          treatStatus
        }
      `,
      data: {
        treats: newPoints,
        treatStatus: value,
      },
    });
  }
};

const Treats: React.FC<TreatProps> = ({ dog }) => {
  const { data } = useMeQuery();
  const [loadingState, setLoadingState] = useState<
    "up-loading" | "down-loading" | "not-loading"
  >("not-loading");
  const [feed] = useFeedMutation();
  console.log(dog);
  if (data?.me) {
    return (
      <Text ml="auto">
        <IconButton
          aria-label="Give Treat"
          size="md"
          icon={<TriangleUpIcon />}
          mr={2}
          bg={dog.treatStatus === 1 ? "green" : "lightgrey"}
          onClick={async () => {
            if (dog.treatStatus === 1) {
              return;
            }
            setLoadingState("up-loading");
            await feed({
              variables: { value: 1, doggoId: dog.id },
              update: (cache) => updateAfterFeeding(1, cache, dog.id),
            });
            setLoadingState("not-loading");
          }}
          isLoading={loadingState === "up-loading"}
        />
        {dog.treats}

        <IconButton
          aria-label="Take away Treat"
          size="md"
          icon={<TriangleDownIcon />}
          bg={dog.treatStatus === -1 ? "red" : "lightgrey"}
          ml={2}
          isLoading={loadingState === "down-loading"}
          onClick={async () => {
            if (dog.treatStatus === -1) {
              return;
            }
            setLoadingState("down-loading");
            await feed({
              variables: { value: -1, doggoId: dog.id },
              update: (cache) => updateAfterFeeding(-1, cache, dog.id),
            });
            setLoadingState("not-loading");
          }}
        />
      </Text>
    );
  } else {
    return <></>;
  }
};

export default Treats;

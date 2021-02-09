import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  DoggoSnippetFragment,
  useFeedMutation,
  useMeQuery,
} from "../generated/graphql";

interface TreatProps {
  dog: DoggoSnippetFragment;
}

const Treats: React.FC<TreatProps> = ({ dog }) => {
  const [{ data }] = useMeQuery();
  const [loadingState, setLoadingState] = useState<
    "up-loading" | "down-loading" | "not-loading"
  >("not-loading");
  const [, feed] = useFeedMutation();
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
            await feed({ value: 1, doggoId: dog.id });
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
            await feed({ value: -1, doggoId: dog.id });
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

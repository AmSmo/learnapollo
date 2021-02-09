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
  const [{ fetching, operation }, feed] = useFeedMutation();
  if (data?.me) {
    return (
      <Text ml="auto">
        <IconButton
          colorScheme="teal"
          aria-label="Give Treat"
          size="xs"
          icon={<TriangleUpIcon />}
          mr={2}
          onClick={async () => {
            setLoadingState("up-loading");
            await feed({ value: 1, doggoId: dog.id });
            setLoadingState("not-loading");
          }}
          isLoading={loadingState === "up-loading"}
        />
        {dog.treats}

        <IconButton
          colorScheme="teal"
          aria-label="Take away Treat"
          size="xs"
          icon={<TriangleDownIcon />}
          ml={2}
          isLoading={loadingState === "down-loading"}
          onClick={async () => {
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

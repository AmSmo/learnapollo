import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { IconButton, Link } from "@chakra-ui/react";
import React from "react";
import { useDeleteDogMutation } from "../generated/graphql";
import NextLink from "next/link";
interface EditDeleteDoggoProps {
  id: number;
}

const EditDeleteDoggoButtons: React.FC<EditDeleteDoggoProps> = ({ id }) => {
  const [deleteDog] = useDeleteDogMutation();
  return (
    <>
      <IconButton
        icon={<DeleteIcon />}
        aria-label="Delete Dog"
        mt={10}
        mr={2}
        size="md"
        position="relative"
        ml="auto"
        onClick={() => {
          deleteDog({
            variables: { id },
            update: (cache) => {
              cache.evict({ id: "Doggo:" + id });
            },
          });
        }}
      />
      <NextLink href="doggo/edit/[id]" as={`/doggo/edit/${id}`}>
        <IconButton
          icon={<EditIcon />}
          as={Link}
          aria-label="Update Dog"
          mt={10}
          mr={2}
          size="md"
          position="relative"
          ml="auto"
        />
      </NextLink>
    </>
  );
};

export default EditDeleteDoggoButtons;

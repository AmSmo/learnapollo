import { useRouter } from "next/router";
import { useDoggoQuery } from "../generated/graphql";

export const useGetDoggo = () => {
  const router = useRouter();
  const id =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  return useDoggoQuery({
    pause: id === -1,
    variables: { id },
  });
};

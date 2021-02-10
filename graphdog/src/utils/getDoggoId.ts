import { useRouter } from "next/router";

export const useGetDoggo = () => {
  const router = useRouter();
  return typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
};

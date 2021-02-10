import { Box, Button, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../../components/InputField";
import LayOut from "../../../components/LayOut";
import {
  UpdateDogMutationVariables,
  useUpdateDogMutation,
} from "../../../generated/graphql";

import { createUrqlClient } from "../../../utils/createUrqlClient";
import { useGetDoggo } from "../../../utils/getDoggo";

interface DoggoProps {}

export const DogUpdate: React.FC<DoggoProps> = ({}) => {
  const [{ data, fetching }] = useGetDoggo();
  const [, updateDog] = useUpdateDogMutation();
  const router = useRouter();
  if (fetching) {
    return <LayOut>Loading...</LayOut>;
  }
  if (!data?.dog) {
    return (
      <LayOut>
        <Box>No such pup!</Box>
      </LayOut>
    );
  }

  return (
    <LayOut variant="small">
      <Formik
        initialValues={{
          id: data?.dog?.id,
          name: data.dog.name,
          story: data.dog.story,
        }}
        onSubmit={async (values: UpdateDogMutationVariables, { setErrors }) => {
          const resp = await updateDog({ id: data.dog.id, ...values });
          if (!resp.error) {
            router.push(`/doggo/${data?.dog?.id}`);
          }
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <InputField name="name" placeholder="name" label="name" />
            <InputField
              name="story"
              placeholder="story"
              label="Origin Story"
              type="textarea"
            />
            <Button
              type="submit"
              bgColor="orange.200"
              isLoading={isSubmitting}
              margin="10px 0"
            >
              Adopt Dog
            </Button>
          </Form>
        )}
      </Formik>
    </LayOut>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(DogUpdate);
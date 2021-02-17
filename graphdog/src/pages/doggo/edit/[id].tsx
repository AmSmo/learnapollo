import { Box, Button, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";

import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../../components/InputField";
import LayOut from "../../../components/LayOut";
import {
  UpdateDogMutationVariables,
  useUpdateDogMutation,
} from "../../../generated/graphql";
import { withApollo } from "../../../utils/createWithApollo";

import { useGetDoggo } from "../../../utils/getDoggo";

interface DoggoProps {}

export const DogUpdate: React.FC<DoggoProps> = ({}) => {
  const { data, loading } = useGetDoggo();
  const [updateDog] = useUpdateDogMutation();
  const router = useRouter();
  if (loading) {
    return <LayOut>Loading...</LayOut>;
  }
  if (!data?.doggo) {
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
          id: data?.doggo?.id,
          name: data.doggo.name,
          story: data.doggo.story,
        }}
        onSubmit={async (values: UpdateDogMutationVariables, { setErrors }) => {
          const resp = await updateDog({
            variables: { ...values },
          });
          if (!resp.errors) {
            router.push(`/doggo/${data?.doggo?.id}`);
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

export default withApollo({ ssr: false })(DogUpdate);

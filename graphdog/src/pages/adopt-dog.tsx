import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { useCreateDogMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useIsAuth } from "../utils/useIsAuth";

interface adoptDogProps {}

export const AdoptDog: React.FC<adoptDogProps> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [, createDog] = useCreateDogMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ name: "", story: "" }}
        onSubmit={async (values, { setErrors }) => {
          const resp = await createDog({ options: { ...values } });
          if (!error) {
            router.push("/");
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
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(AdoptDog);

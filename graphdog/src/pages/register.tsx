import React from "react";
import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";
import { toErrorMap } from "../utils/toErrorMap";
import { MeDocument, MeQuery, useRegisterMutation } from "../generated/graphql";
import { useRouter } from "next/router";
import LayOut from "../components/LayOut";
import { withApollo } from "../utils/createWithApollo";
interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [register] = useRegisterMutation();

  return (
    <LayOut variant="small">
      <Formik
        initialValues={{ username: "", password: "", email: "" }}
        onSubmit={async (values, { setErrors }) => {
          const resp = await register({
            variables: { options: values },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: "Query",
                  me: data?.register.user,
                },
              });
            },
          });

          if (resp.data?.register.errors) {
            setErrors(toErrorMap(resp.data.register.errors));
          } else if (resp.data?.register.user) {
            router.push("/");
          }
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <InputField name="email" placeholder="email" label="Email" />
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              bgColor="orange.200"
              isLoading={isSubmitting}
              margin="10px 0"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </LayOut>
  );
};

export default withApollo({ ssr: false })(Register);

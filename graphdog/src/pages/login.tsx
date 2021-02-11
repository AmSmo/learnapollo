import React from "react";
import { Button, Flex, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";
import { toErrorMap } from "../utils/toErrorMap";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import { useRouter } from "next/router";

import NextLink from "next/link";
import LayOut from "../components/LayOut";
import { withApollo } from "../utils/createWithApollo";
interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  const [login] = useLoginMutation();

  return (
    <LayOut variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const resp = await login({
            variables: values,
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: "Query",
                  me: data?.login.user,
                },
              });
              cache.evict({ fieldName: "doggos" });
            },
          });
          if (resp.data?.login.errors) {
            setErrors(toErrorMap(resp.data.login.errors));
          } else if (resp.data?.login.user) {
            if (typeof router.query?.next === "string") {
              router.push(router.query?.next);
            } else {
              router.push("/");
            }
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
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
            <Flex>
              <NextLink href="/forgot-password">
                <Link ml="auto">Forgot Password?</Link>
              </NextLink>
            </Flex>
            <Button
              type="submit"
              bgColor="orange.200"
              isLoading={isSubmitting}
              margin="10px 0"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </LayOut>
  );
};

export default withApollo({ ssr: false })(Login);

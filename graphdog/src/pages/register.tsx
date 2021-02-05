import React from "react";
import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import Wrapper from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useMutation } from "urql";
interface registerProps {}

const REGISTER_MUTATION = `
    mutation Register($username:String!, $password:String!) {
        register(options:{username:$username, password:$password}){
            errors{
                field
                message
            }
            user{
                id
                createdAt
                updatedAt
                username
            }
        }
    }
`;

const Register: React.FC<registerProps> = ({}) => {
  const [{}, register] = useMutation(REGISTER_MUTATION);

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => {
          console.log(values, "llama");
          const resp = await register(values);
          return resp;
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
    </Wrapper>
  );
};

export default Register;

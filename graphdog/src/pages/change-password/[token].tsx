import { NextPage } from "next";

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  return <div>Token is {token}</div>;
};
ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};
export default ChangePassword;

import { Field, InputType } from "type-graphql";

@InputType()
export class UsernamePasswordInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@InputType()
export class SignUpInput extends UsernamePasswordInput {
  @Field()
  email: string;
}

@InputType()
export class ForgotPasswordInput {
  @Field()
  token: string;

  @Field()
  newPassword: string;
}

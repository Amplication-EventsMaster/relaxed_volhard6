import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const LikesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="likedAt" source="likedAt" />
        <TextInput label="userId" source="userId" />
        <TextInput label="postId" source="postId" />
      </SimpleForm>
    </Create>
  );
};

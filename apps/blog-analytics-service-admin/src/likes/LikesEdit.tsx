import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const LikesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="likedAt" source="likedAt" />
        <TextInput label="userId" source="userId" />
        <TextInput label="postId" source="postId" />
      </SimpleForm>
    </Edit>
  );
};

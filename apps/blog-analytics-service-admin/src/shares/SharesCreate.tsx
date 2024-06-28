import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SharesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="sharedAt" source="sharedAt" />
        <TextInput label="userId" source="userId" />
        <TextInput label="postId" source="postId" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SharesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="sharedAt" source="sharedAt" />
        <TextInput label="userId" source="userId" />
        <TextInput label="postId" source="postId" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BLOGPOST_TITLE_FIELD } from "../blogPost/BlogPostTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="blogPost"
          source="blogpost.id"
          reference="BlogPost"
        >
          <TextField source={BLOGPOST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="author" source="author" />
        <TextField label="content" source="content" />
      </Datagrid>
    </List>
  );
};

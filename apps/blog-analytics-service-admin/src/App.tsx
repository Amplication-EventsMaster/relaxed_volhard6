import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PostViewCountList } from "./postViewCount/PostViewCountList";
import { PostViewCountCreate } from "./postViewCount/PostViewCountCreate";
import { PostViewCountEdit } from "./postViewCount/PostViewCountEdit";
import { PostViewCountShow } from "./postViewCount/PostViewCountShow";
import { LikesList } from "./likes/LikesList";
import { LikesCreate } from "./likes/LikesCreate";
import { LikesEdit } from "./likes/LikesEdit";
import { LikesShow } from "./likes/LikesShow";
import { SharesList } from "./shares/SharesList";
import { SharesCreate } from "./shares/SharesCreate";
import { SharesEdit } from "./shares/SharesEdit";
import { SharesShow } from "./shares/SharesShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"blog-analytics-service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PostViewCount"
          list={PostViewCountList}
          edit={PostViewCountEdit}
          create={PostViewCountCreate}
          show={PostViewCountShow}
        />
        <Resource
          name="Likes"
          list={LikesList}
          edit={LikesEdit}
          create={LikesCreate}
          show={LikesShow}
        />
        <Resource
          name="Shares"
          list={SharesList}
          edit={SharesEdit}
          create={SharesCreate}
          show={SharesShow}
        />
      </Admin>
    </div>
  );
};

export default App;

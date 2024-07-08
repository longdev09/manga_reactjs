import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { publicRoutes } from "./routes";

import { Fragment } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((item, index) => {
          let Layout = item.layout === null ? Fragment : MainLayout;
          const Page = item.component;
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

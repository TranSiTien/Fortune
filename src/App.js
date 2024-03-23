import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "components/layout/DefaultLayout";
import routes from "routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  console.log(routes);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.page;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

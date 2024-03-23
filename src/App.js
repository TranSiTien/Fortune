import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "routes";

function App() {
  console.log(routes);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.page />}
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

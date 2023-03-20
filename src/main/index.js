import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Header from "../components/Header";
import publicRoute from "../constants/public_route.constant";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {publicRoute.map(({ path, element }) => {
          const Element = element;
          return (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={null}>
                  <Element />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;

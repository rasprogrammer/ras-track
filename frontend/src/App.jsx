import "./style/app.css";

import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PageLoader from "@/components/PageLoader";
import store from "./redux/store.js";

function App() {
  const RastrackOS = lazy(() => import("./apps/RastrackOS"));

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <h2>RAS-Track</h2>
          <Suspense fallback={<PageLoader></PageLoader>}>
            <RastrackOS />
          </Suspense>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

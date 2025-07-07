import "./style/app.css";

import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import PageLoader from "@/components/PageLoader";

function App() {
  const RastrackOS = lazy(() => import("./apps/RastrackOS"));

  return (
    <>
      <BrowserRouter>
        <h2>RAS-Track</h2>
        <Suspense fallback={<PageLoader></PageLoader>}>
          <RastrackOS />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useEffect, Suspense } from "react";
import { useAppDispatch } from "./store/hooks/hooks";
import { Outlet } from "react-router-dom";

import GlobalStyle from "./general.styles";
import Spinner from "./components/spinner/spinner.component";

import { checkUserSessionAsync } from "./store/user/user-slice";
import { getSeriesDataAsync } from "./store/gallery/gallery.slice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserSessionAsync());
    dispatch(getSeriesDataAsync());
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <GlobalStyle />
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;

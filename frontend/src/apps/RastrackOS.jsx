import { useSelector } from "react-redux";
import { selectAuth } from "@/redux/auth/selectors";
import Localization from "@/locale/Localization";
import AuthRouter from "@/router/authRouter";

function RastrackOS() {
  const { isLoggedIn } = useSelector(selectAuth);

  if (!isLoggedIn) {
    return (
      <>
        <Localization>
          <AuthRouter></AuthRouter>
        </Localization>
      </>
    );
  } else {
    return <>Dashboard</>;
  }
}

export default RastrackOS;

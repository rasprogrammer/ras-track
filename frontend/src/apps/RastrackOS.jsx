import { useSelector } from "react-redux";
import { selectAuth } from "@/redux/auth/selectors";

function RastrackOS() {
  const { isLoggedIn } = useSelector(selectAuth);

  if (!isLoggedIn) {
    return <>LoginPage</>;
  } else {
    return <>Dashboard</>;
  }
}

export default RastrackOS;

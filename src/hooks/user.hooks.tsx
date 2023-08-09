import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../store/user/user.slice";
import { UserData } from "../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../store/user/user.selector";
const { setCurrentUserAction } = userSlice.actions;

export const useUserHooks = () => {
  const dispatch = useDispatch();

  const setCurrentUser = (input: UserData | undefined) => {
    dispatch(setCurrentUserAction(input));
  };

  const currentUser = useSelector(selectCurrentUser);

  return { setCurrentUser, currentUser };
};

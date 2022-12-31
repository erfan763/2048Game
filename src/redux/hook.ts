// import { useAppSelector } from "../../store";
// import { selectUser } from "./userSlice";

// export function useUser() {
//   return useAppSelector(selectUser);
// }
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

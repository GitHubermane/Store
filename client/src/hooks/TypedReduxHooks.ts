import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { StateType, DispatchType } from "../Redux/Store";

export const useTypedSelector: TypedUseSelectorHook<StateType> = useSelector
export const useTypedDispatch: () => DispatchType = useDispatch
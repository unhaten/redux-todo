import {TypedUseSelectorHook, useDispatch, useSelector, useStore} from "react-redux";
import {AppDispatch, AppStore, RootState} from "../store/store.ts";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = useStore.withTypes<AppStore>()
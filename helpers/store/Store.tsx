import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState: any = {
  pageIndex: 0,
  fullpageApi: null,
};

const Store = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;

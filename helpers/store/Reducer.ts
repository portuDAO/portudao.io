import { UPDATE_PAGE_INDEX, STORE_FULLPAGE_API } from "./actions";

const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.payload,
      };

    case STORE_FULLPAGE_API:
      return {
        ...state,
        fullpageApi: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;

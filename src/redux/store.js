import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { accountReducer } from "./accountSlice";
import { localeReducer } from "./localeSlice";

const rootReducer = combineReducers({
    account: accountReducer,
    locale: localeReducer
})
const enchancer = devToolsEnhancer();
export const store = createStore(rootReducer, enchancer);

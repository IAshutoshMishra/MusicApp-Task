import {createStore, combineReducers} from "redux";
import musicData from "../reducer/musicData";
import musicDetails from "../reducer/musicDetails";

const rootReducer = combineReducers({
  musicData: musicData,
  musicDetails: musicDetails
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;

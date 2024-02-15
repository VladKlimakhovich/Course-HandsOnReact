import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { ProjectState } from './states/projectTypes';
import { initialProjectState } from './states/projectReducer';
import { projectReducer } from "./states/projectReducer";
//import { projectReducer } from './projects/states/projectReducer';

const reducer = combineReducers({
  projectState: projectReducer
});

export default function configureStore(preloadedState: any) {
  const middlewares:any = [ReduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  //Thunk is middleware
  //DevTools is an enhancer (actually changes Redux)
  //applyMiddleware wraps middleware and returns an enhancer

  // to use only thunk middleware
  // const enhancer = compose(middlewareEnhancer);

  //to use thunk & devTools
  const enhancer = composeWithDevTools(middlewareEnhancer);

  const store = createStore(reducer, preloadedState, enhancer);
  return store;
}

export interface AppState {
  projectState: ProjectState;
}

export const initialAppState: AppState = {
  projectState: initialProjectState
};

export const store = configureStore(initialAppState);
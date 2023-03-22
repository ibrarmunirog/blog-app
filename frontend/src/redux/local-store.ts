import { RootState } from "redux/store";

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem(
      process.env.REACT_APP_REDUX_STATE_FIELD
    );

    if (serializedState) {
      return JSON.parse(serializedState);
    }

    return undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: RootState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(
      process.env.REACT_APP_REDUX_STATE_FIELD,
      serializedState
    );
  } catch (err) {
    console.error(err);
  }
};

import { RootState } from "redux/store";

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem("state");

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
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error(err);
  }
};

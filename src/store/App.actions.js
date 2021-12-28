export function LOADING(state) {
  return {
    type: "LOADING",
    payload: state,
  };
}
export function SET_STATE(name, value) {
  return {
    type: "SET_STATE",
    payload: { name, value },
  };
}

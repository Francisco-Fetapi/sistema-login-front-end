const initialState = {
  loading: false,
  alert: false,
  alertInfo: {
    msg: "",
    severity: "warning",
    time: 4000,
  },
};
export default function App(state = initialState, { type, payload }) {
  switch (type) {
    case "LOADING":
      return { ...state, loading: payload };
    case "SET_STATE":
      return { ...state, [payload.name]: payload.value };
    default:
      return state;
  }
}

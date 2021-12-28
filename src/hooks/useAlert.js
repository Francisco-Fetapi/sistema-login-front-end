import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../store/App.actions";
import { selectAllState } from "../store/App.selectors";

export default function useAlert() {
  const Disparar = useDispatch();
  const { alert, alertInfo } = useSelector(selectAllState);

  function open() {
    Disparar(SET_STATE("alert", true));
  }
  function setInfo({ msg, severity, time }) {
    Disparar(SET_STATE("alertInfo", { msg, severity, time }));
  }
  function close(e, reason) {
    if (reason === "clickaway") {
      return;
    }
    Disparar(SET_STATE("alert", false));
  }

  return { alert, setInfo, alertInfo, open, close };
}

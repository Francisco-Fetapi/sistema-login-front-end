import { useDispatch, useSelector } from "react-redux";
import { LOADING } from "../store/App.actions";
import { selectAllState } from "../store/App.selectors";

export default function useLoading() {
  const Disparar = useDispatch();
  const { loading } = useSelector(selectAllState);

  function open() {
    Disparar(LOADING(true));
  }
  function close() {
    Disparar(LOADING(false));
  }

  return { loading, open, close };
}

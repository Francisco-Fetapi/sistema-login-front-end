import useLoading from "../hooks/useLoading";
// import Request_ from "../helpers/RequisicaoSimular";
import { useNavigate } from "react-router-dom";
import API from "../services/API";
import useAlert from "./useAlert";

export default function useUsuario() {
  const { open, close } = useLoading();
  const { setInfo, open: openAlert } = useAlert();
  const navigate = useNavigate();

  const allFunctions = {
    async iniciarSessao(credenciais, actions) {
      open();
      let res = await API.login(credenciais);
      if (res.status === "error") {
        setInfo({
          msg: res.msg,
          time: 3000,
          severity: "error",
        });
        openAlert();
      } else {
        setInfo({ msg: res.msg, time: 3000, severity: "success" });
        openAlert();
        allFunctions.loginLocal(res.token);
        navigate("/");
      }
      close();
      // navigate("/");
    },
    async criarConta(dados, actions) {
      open();
      let res = await API.criarConta(dados);
      close();
      if (res.status === "error") {
        actions.setErrors(res.erros);
      } else {
        allFunctions.loginLocal(res.token);
        navigate("/");
      }
    },
    logado() {
      let token = localStorage.getItem("token");
      let logado = token ? true : false;
      if (logado) API.configurarToken(token);
      return logado;
    },
    async obterDadosUsuario(setUsuario, setImg) {
      open();
      let res = await API.obterDadosUsuario();
      if (res.msg) {
        // se tiver uma msg eh pq ha problema
        allFunctions.logoutLocal();
        navigate("/login");
      } else {
        setUsuario(res);
        setImg(res.foto_ || "");
      }
      close();
    },
    logoutLocal() {
      localStorage.removeItem("token");
    },
    loginLocal(token) {
      localStorage.setItem("token", token);
    },
    async logout() {
      open();
      allFunctions.logoutLocal();
      await API.logout();
      close();
      navigate("/login");
    },
    escolherFoto(fileInput, setImg) {
      fileInput.current.click();
      fileInput.current.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const fr = new FileReader();
          fr.readAsDataURL(file);
          fr.onload = (e) => {
            setImg(e.target.result);
          };
        }
      };
    },
    async alterarFoto(foto, setImg) {
      open();
      await API.mudarFoto(foto);
      const dados = await API.obterDadosUsuario();
      setImg(dados.foto_);
      close();
    },
  };

  return allFunctions;
}

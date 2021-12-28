import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

console.log(process.env.REACT_APP_URL);

api.interceptors.response.use(function (response) {
  if (response.data.token) {
    //se existir um token na resposta
    console.log("Token recebido");
    API.configurarToken(response.data.token);
    localStorage.setItem("token", response.data.token);
  }
  return response;
});

const API = {
  configurarToken(token) {
    api.defaults.params = { token };
  },
  async criarConta(dados) {
    const { data } = await api.post("/registrar", dados);
    return data;
  },
  async logout() {
    const { data } = await api.get("/logout");
    API.configurarToken(null);
    return data;
  },
  async login(credenciais) {
    const { data } = await api.post("/login", credenciais);
    return data;
  },
  async obterDadosUsuario() {
    const { data } = await api.get("/usuario/dados");
    return data;
  },
  async mudarFoto(foto) {
    const formData = new FormData();
    formData.append("foto", foto);
    let res = await api.post("usuario/foto", formData);
    return res;
  },
};
export default API;

async function RequisicaoSimular(segundos = 2) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, segundos * 1000);
  });
}
export default RequisicaoSimular;

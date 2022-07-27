# Sistema de Login (com JWT) - Front-end

<p align="center">
<a href="https://github.com/Francisco-Fetapi/sistema-login-front-end/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Francisco-Fetapi/sistema-login-front-end?style=plastic"></a>
<a href="https://github.com/Francisco-Fetapi/sistema-login-front-end"><img alt="GitHub license" src="https://img.shields.io/badge/Exercise-For%20trainning-orange"></a>
<a href="https://github.com/Francisco-Fetapi/sistema-login-front-end/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Francisco-Fetapi/sistema-login-front-end?style=plastic"></a>
<a href="https://github.com/Francisco-Fetapi/sistema-login-front-end/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Francisco-Fetapi/sistema-login-front-end?style=plastic"></a>
<a href="https://github.com/Francisco-Fetapi/sistema-login-front-end"><img alt="GitHub license" src="https://img.shields.io/github/license/Francisco-Fetapi/sistema-login-front-end?style=plastic"></a>
</p>


Projeto criado para consolidar os conhecimentos em React na questão da _autenticação via JWT (JSON Web Token)_. No começo da minha jornada no mundo das SPA's eu fazia um monte de gambiarra para autenticar um usuário, uma delas era guardar o _"id"_ do usuario no _localStorage_ e enviar esse _"id"_ a cada requisição, mas isso não era nada seguro, depois de alguns meses aprendi sobre **JWT** e esse foi o primeiro sisteminha que criei para entendê-lo na prática.

![sis-login](https://user-images.githubusercontent.com/74926014/181216211-6660cee6-bf97-40cb-8a30-d5bfc49c54aa.gif)


Este projeto consome uma _API_ criada com `Laravel`. Siga os passos para rodar o _back-end localmente_ [clicando aqui](https://github.com/Francisco-Fetapi/sistema-login-jwt-back-end)

## Como rodar localmente

O Projeto (apenas o front-end) está hospedado em [Sistema de Login](https://sistema-login-fetapi.vercel.app/) - Mesmo na núvem, o projeto consome um back-end local, portanto ele deve ser configurado, siga os passos em [Sitema de Login - Back-end](https://github.com/Francisco-Fetapi/sistema-login-jwt-back-end) para o configurar.<br />
Para acessar localmente em **ambiente de desenvolvimento** basta realizar as instruções que se seguem:

### Pré-Requisitos

Algumas ferramentas são necessárias para rodar o projeto localmente, tais como:

1. NodeJS
2. Chrome (ou qualquer outro navegador)

### Clonar o repositório

Com o terminal aberto, basta digitar/copiar a linha de código abaixo e clicar _ENTER_.

```
git clone https://github.com/Francisco-Fetapi/sistema-login-front-end.git
```

### Instalar as dependencias

O projeto necessita de certas dependencias para ser executado, para instalá-las, abra o _terminal_, navegue até a pasta do projeto clonado no passo anterior e digite/copie a linha de código abaixo e clique **ENTER**, em seguida, aguarde o processo de instalação das ferramentas ser concluido.

```
npm install
```

### Iniciar o projeto
```
npm start
```
Rode a aplicação no modo de desenvolvimento com o comando `npm start`(executar o comando na raiz do projeto).
Abra [http://localhost:3000](http://localhost:3000) para visualizar o projeto no navegador.

##

`NOTA1:` Este projeto necessita de um back-end configurado localmente para funcionar devidamente, siga os passos para configurar o back-end [clicando aqui](https://github.com/Francisco-Fetapi/sistema-login-jwt-back-end)

`NOTA2`: O back-end não está hospedado pelas seguintes razões:

1. O `heroku`, no modo gratuito tem um limite de projetos, eu já atingi o limite.😅
2. As outras plataformas similares têm politicas que me impossibilitam aderir ao  plano gratuito.(falo sobre ter que colocar os dados bancários ao criar a conta mesmo no plano gratuito, o Microsoft Azure é uma delas🙁)
3. Plataformas para _hospedagem de banco de dados_ também são outro problema, o próprio `heroku` e o `Microsoft Azure` são muito bons para hospedagem de _bancos de dados_, mas por causa da politica do ponto anterior, não consigo aderir a seus planos. (por enquanto😄)

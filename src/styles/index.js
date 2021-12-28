import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const Login = {
  Container: styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    opacity: 0;
    transform: translateY(-120px);
    animation: entra 0.9s ease-in-out forwards;

    @keyframes entra {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .form-login {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
    }
  `,
};
export const Home = {
  Container: styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        filter: brightness(1.2);
      }
    }
    .buttons {
      button {
        margin: 0 5px;
        padding: 10px 35px;
      }
    }
  `,
  LogoUser: styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid #1a1a1a;
    border-radius: 50%;
    position: relative;
    transition: all 0.1s linear;
    cursor: pointer;

    &:active {
      opacity: 0.7;
      user-select: none;
    }

    &:hover {
      background-color: #1a1a1a;
      border-color: #ccc;

      svg:not(.edit) {
        color: #ccc;
      }
      .edit {
        color: #1a1a1a;
      }
    }

    .edit {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 25%;
      height: 25%;
      z-index: 2;
      display: block;
      color: rgba(0, 0, 0, 0.7);
    }
    svg:not(.edit) {
      width: 50%;
      height: 50%;
    }
  `,
};

export const Text = styled(Typography)``;

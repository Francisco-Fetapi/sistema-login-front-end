import React, { useEffect, useState } from "react";
import { Home, Text } from "../styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CloseIcon from "@material-ui/icons/Close";

import { FaUser, FaEdit, FaPhotoVideo } from "react-icons/fa";
import { useRef } from "react";
import useUsuario from "../hooks/useUsuario";
import { useNavigate } from "react-router-dom";

export default function Home_() {
  const fileInput = useRef();
  const [img, setImg] = useState("");
  const { escolherFoto, alterarFoto, logado, obterDadosUsuario, logout } =
    useUsuario();
  const navigate = useNavigate();
  const [changeImg, setChangeImg] = useState(false);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    if (!logado()) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    obterDadosUsuario(setUsuario, setImg);
  }, []);

  useEffect(() => {
    if (img.includes("base64")) setChangeImg(true);
    else {
      if (fileInput.current) {
        fileInput.current.value = "";
      }
      setChangeImg(false);
    }
  }, [img]);

  return (
    <Home.Container>
      {usuario.nome && (
        <React.Fragment>
          <Box flexGrow={1} />
          <Box>
            {img && (
              <img
                src={img}
                alt="imagem do usuario"
                onClick={() => escolherFoto(fileInput, setImg)}
              />
            )}
            <input ref={fileInput} type="file" hidden id="add_ponto" />
            {!img && (
              <Home.LogoUser
                p={1}
                onClick={() => escolherFoto(fileInput, setImg)}
              >
                <FaUser style={{ fontSize: 21 }} />
                <FaEdit className="edit" />
              </Home.LogoUser>
            )}
            <Box mt={2}>
              <Text align="center" style={{ fontSize: 21 }}>
                {usuario.nome}
              </Text>
            </Box>
            <Box mt={2}>
              <Text
                align="center"
                style={{ fontSize: 15 }}
                color="textSecondary"
              >
                {usuario.email}
              </Text>
            </Box>
          </Box>
          <Box flexGrow={1} />
          <Box my={2} className="buttons">
            {!changeImg && (
              <Button
                color="primary"
                variant="contained"
                startIcon={<ExitToAppIcon />}
                onClick={logout}
              >
                Logout
              </Button>
            )}
            {changeImg && (
              <>
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<FaPhotoVideo />}
                  onClick={() =>
                    alterarFoto(fileInput.current.files[0], setImg)
                  }
                >
                  Alterar Foto
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<CloseIcon />}
                  onClick={() => setImg(usuario.foto_ || "")}
                >
                  Cancelar
                </Button>
              </>
            )}
          </Box>
        </React.Fragment>
      )}
    </Home.Container>
  );
}

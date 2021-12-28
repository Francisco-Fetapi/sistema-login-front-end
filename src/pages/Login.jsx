import React from "react";
import { Login, Text } from "../styles";
import { Form, Formik } from "formik";
import Field from "../components/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { Link } from "react-router-dom";
import useUsuario from "../hooks/useUsuario";

export default function Login_() {
  const { iniciarSessao } = useUsuario();
  return (
    <Login.Container>
      <Text variant="h3" align="center">
        LOGIN
      </Text>
      <br />
      <br />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={iniciarSessao}
      >
        <Form className="form-login" autoComplete="off">
          <Field name="email" label="Seu email" type="email" />
          <br />
          <Field name="password" label="Sua senha" type="password" />
          <Box
            mt={3}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 35px" }}
              type="submit"
            >
              Iniciar sessão
            </Button>
            <br />
            <Button
              to="/signup"
              component={Link}
              style={{ padding: "10px 35px" }}
            >
              Criar conta
            </Button>
          </Box>
        </Form>
      </Formik>
    </Login.Container>
  );
}

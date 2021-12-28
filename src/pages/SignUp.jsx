import React from "react";
import { Login as SignUp, Text } from "../styles";
import { Form, Formik } from "formik";
import Field from "../components/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { Link } from "react-router-dom";
import useUsuario from "../hooks/useUsuario";

export default function SignUp_() {
  const { criarConta } = useUsuario();

  return (
    <SignUp.Container>
      <Text variant="h3" align="center">
        CRIAR CONTA
      </Text>
      <br />
      <br />
      <Formik
        initialValues={{
          nome: "",
          email: "",
          password: "",
          "conf-senha": "",
        }}
        onSubmit={criarConta}
      >
        <Form className="form-login" autoComplete="off">
          <Field name="nome" label="Seu nome" type="text" />
          <br />
          <Field name="email" label="Seu email" type="email" />
          <br />
          <Field name="password" label="Sua senha" type="password" />
          <br />
          <Field name="conf-senha" label="Confirmar senha" type="password" />
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
              Criar conta
            </Button>
            <br />
            <Button
              to="/login"
              component={Link}
              style={{ padding: "10px 35px" }}
            >
              Iniciar sessão
            </Button>
          </Box>
        </Form>
      </Formik>
    </SignUp.Container>
  );
}

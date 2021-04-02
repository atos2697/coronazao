import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { MainContainer } from "./MainContainer";
import { Form } from "./Form";
import { Input } from "./Input";
import { PrimaryButton } from "./PrimaryButton";
import Typography from "@material-ui/core/Typography";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { useData } from "./DataContext";

const schema = yup.object().shape({
  ID: yup.string().required("Este campo es obligatorio"),
  description: yup.string().required("Este campo es obligatorio"),
});

export const StepID = () => {
  const { setValues, data } = useData();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      ID: data.ID,
      description: data.description,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("/form/step1");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Determina el ID de la propedad
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          name="ID"
          type="text"
          label="Escribe el nuevo ID de la propiedad "
          helperText={errors?.ID?.message}
        />
        <Typography component="h2" variant="h5">
          Describe la propiedad
        </Typography>
        <Input
          ref={register}
          name="description"
          type="text"
          label="Escribe la descripción de la propiedad "
          helperText={errors?.description?.message}
        />

        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

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
  tipoDePropiedad: yup.string().required("Este campo es obligatorio"),
  ubicacionDeLaPropiedad: yup.string().required("Este campo es obligatorio"),
  tipoDeOferta: yup.string().required("Este campo es obligatorio"),
  PrecioDeLaPropiedad: yup.string().required("Este campo es obligatorio"),
});

export const Step1 = () => {
  const { setValues, data } = useData();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      tipoDePropiedad: data.tipoDePropiedad,
      tipoDeOferta: data.tipoDeOferta,
      ubicacionDeLaPropiedad: data.ubicacionDeLaPropiedad,
      PrecioDeLaPropiedad: data.PrecioDeLaPropiedad,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("/form/step2");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Caracteristcas Generales
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          name="tipoDePropiedad"
          type="text"
          label="Tipo de propiedad"
          helperText={errors?.tipoDePropiedad?.message}
        />
        <Input
          ref={register}
          name="ubicacionDeLaPropiedad"
          type="text"
          label="Ubicacion de la propiedad"
          helperText={errors?.ubicacionDeLaPropiedad?.message}
        />
        <Input
          ref={register}
          name="tipoDeOferta"
          type="text"
          label="Tipo de oferta"
          helperText={errors?.tipoDeOferta?.message}
        />

        <Input
          ref={register}
          name="PrecioDeLaPropiedad"
          type="number"
          label="Precio de la propiedad"
          helperText={errors?.PrecioDeLaPropiedad?.message}
        />
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

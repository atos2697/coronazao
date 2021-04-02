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
import { parsePhoneNumberFromString } from "libphonenumber-js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const schema = yup.object().shape({
  TotalDeBaños: yup.string().required("Este campo es obligatorio"),
  cajonesDeEstacionamiento: yup.string().required("Este campo es obligatorio"),
  bañosCompletos: yup.string().required("Este campo es obligatorio"),
  recamaras: yup.string().required("Este campo es obligatorio"),
  m2: yup.string().required("Este campo es obligatorio"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

export const Step2 = () => {
  const { setValues, data } = useData();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      TotalDeBaños: data.TotalDeBaños,
      cajonesDeEstacionamiento: data.cajonesDeEstacionamiento,
      bañosCompletos: data.bañosCompletos,
      recamaras: data.recamaras,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
      m2: data.m2,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("/form/step21");
    setValues(data);
  };

  const hasPhone = watch("hasPhone");

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Descripción de la propiedad
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          name="TotalDeBaños"
          type="number"
          label="Total de baños"
          helperText={errors?.TotalDeBaños?.message}
        />
        <Input
          ref={register}
          name="cajonesDeEstacionamiento"
          type="number"
          label="Número de cajones de estacionamiento "
          helperText={errors?.cajonesDeEstacionamiento?.message}
        />
        <Input
          ref={register}
          name="bañosCompletos"
          type="number"
          label="Número de baños completos"
          helperText={errors?.bañosCompletos?.message}
        />

        <Input
          ref={register}
          name="recamaras"
          type="number"
          label="Número de recamaras"
          helperText={errors?.recamaras?.message}
        />
        <Input
          ref={register}
          name="m2"
          type="number"
          label="metros cuadrados"
          helperText={errors?.m2?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              color="primary"
              inputRef={register}
              name="hasPhone"
            />
          }
          label="Quieres agregar un telefono de contacto?"
        />
        {hasPhone && (
          <Input
            ref={register}
            id="phoneNumber"
            type="tel"
            label="Telefono de contacto"
            name="phoneNumber"
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

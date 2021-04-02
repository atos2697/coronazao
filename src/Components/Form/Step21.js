import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useData } from "./DataContext";
import { MainContainer } from "./MainContainer";
import { FileInput } from "./FileInput";
import { PrimaryButton } from "./PrimaryButton";
import Typography from "@material-ui/core/Typography";
import { Form } from "./Form";

export const Step21 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      mainfile: data.mainfile,
    },
  });

  const onSubmit = (data) => {
    history.push("/form/step3");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Imagenes de la propiedad
      </Typography>
      <h6>Agrega la imagen principal de la propiedad</h6>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="mainfile" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

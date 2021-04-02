import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(7, 0, 2),
    fontFamily: "Lato",
    textAlign: "center",
    fontSize: "40px",
    color: "#f53b57",
    textShadow: "1px 1px darkmagenta",
  },
}));

export const Header = () => {
  const styles = useStyles();
  return (
    <Typography className={styles.root} component="h1">
      Agregar Propiedad
    </Typography>
  );
};

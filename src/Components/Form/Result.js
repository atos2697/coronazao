import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useData } from "./DataContext";
import { MainContainer } from "./MainContainer";
import { PrimaryButton } from "./PrimaryButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import { useHistory } from "react-router";
import firebase from "../../firebase";
import { storage } from "../../firebase";

const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
  },
  table: {
    marginBottom: "30px",
  },
});

export const Result = () => {
  const styles = useStyles();
  const { data } = useData();
  const [render, setRender] = useState([]);
  const [mainfile, setMainfile] = useState([]);
  var imagesObj = {};
  var mainfileObj = {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  const entries2 = Object.entries(data).filter(
    (entry) => entry[0] !== "mainfile"
  );

  const { files } = data;
  const history = useHistory();

  const onSubmit = () => {
    const formData = new FormData();
    if (data.files) {
      data.files.forEach((file) => {
        formData.append("files", file, file.name);
      });
    }

    const formData2 = new FormData();
    if (data.mainfile) {
      data.mainfile.forEach((file) => {
        formData2.append("mainfile", file, file.name);
      });
    }

    data["PrecioDeLaPropiedad"] = parseInt(data["PrecioDeLaPropiedad"], 10);

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    entries2.forEach((entry) => {
      formData2.append(entry[0], entry[1]);
    });

    const globalRef = firebase.database().ref().child("Global");
    const populationRef = globalRef.child("population");

    const popo2 = storage
      .ref(`Images`)
      .child(data["mainfile"][0].name)
      .put(data["mainfile"][0]);

    popo2.on(
      "state_changed",
      (snapshot) => {
        console.log("soy un snapshot");
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("Images")
          .child(data["mainfile"][0]["path"])
          .getDownloadURL()
          .then((url) => {
            setMainfile(mainfile.push(url));
            setRender(render.unshift(url));
            console.log("just push" + url);
          });
      }
    );

    data["files"].map((obj) => {
      const popo = storage.ref(`Images`).child(obj.name).put(obj);

      console.log("se hizo el put a la base de datos");

      console.log(popo);

      return popo.on(
        "state_changed",
        (snapshot) => {
          console.log("soy un snapshot");
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("Images")
            .child(obj["path"])
            .getDownloadURL()
            .then((url) => {
              setRender(render.push(url));
              console.log("just push" + url);
            });
        }
      );
    });

    Swal.fire("Felicidades!", "Agregaste una propiedad!", "success");

    setTimeout(() => {
      imagesObj = Object.assign({}, render);
      mainfileObj = Object.assign({}, mainfile);

      console.log("just converted to object");

      console.log(render);
      console.log(render[1]);

      data["files"] = imagesObj;
      data["mainfile"] = mainfileObj;

      console.log(data);

      populationRef.push(data);

      history.push("/form/stepID");
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }, 5000);
  };

  return (
    <>
      <MainContainer>
        <Typography component="h2" variant="h5">
          📋 Form Values
        </Typography>
        <TableContainer className={styles.root} component={Paper}>
          <Table className={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry) => (
                <TableRow key={entry[0]}>
                  <TableCell component="th" scope="row">
                    {entry[0]}
                  </TableCell>
                  <TableCell align="right">{entry[1].toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {files && (
          <>
            <Typography component="h2" variant="h5">
              📦 Files
            </Typography>
            <List>
              {files.map((f, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))}
            </List>
          </>
        )}
        <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
        <Link to="/form/step1">Start over</Link>
      </MainContainer>
    </>
  );
};

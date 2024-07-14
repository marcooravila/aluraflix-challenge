import { Grid, MenuItem } from "@mui/material";
import Input from "../../../components/Shared/Input";
import { useContext, useState } from "react";
import Button from "../../../components/Shared/Button";
import { DataContext } from "../../../Context";
import Form from "../../../components/Shared/Form";
import { useSnackbar } from "notistack";
import {
  validateCategory,
  validateDescription,
  validateLink,
  validateTitle,
} from "./validacion";
import { Link } from "react-router-dom";

const RegisterVideo = () => {
  const data = useContext(DataContext);
  const { enqueueSnackbar } = useSnackbar();

  const [title, setTitle] = useState({ value: "", valid: null });
  const [link, setLink] = useState({ value: "", valid: null });
  const [category, setCategory] = useState({ value: "", valid: null });
  const [description, setDescription] = useState({ value: "", valid: null });

  const Clear = () => {
    setTitle({ value: "", valid: null });
    setDescription({ value: "", valid: null });
    setCategory({ value: "", valid: null });
    setLink({ value: "", valid: null });
  };

  const onSubmitAddVideo = () => {
    data.onCreateVideo(
      title.value,
      link.value,
      category.value,
      description.value
    );
    enqueueSnackbar("Video agregado", { variant: "success" });
  };

  return (
    <Form title={"Nuevo Video"}>
      <Input
        placeholder={"Title"}
        value={title.value}
        setValue={setTitle}
        valid={title.valid}
        validateValue={validateTitle}
        errorMessage={
          "El nombre debe tener al menos 3 caracteres y no más de 29 caracteres"
        }
        required
      />

      <Input
        placeholder={"Link del video (Youtube)"}
        value={link.value}
        setValue={setLink}
        valid={link.valid}
        validateValue={validateLink}
        errorMessage={"No es un enlace de YouTube válido"}
        required
      />

      <Input
        placeholder={"Categoria"}
        value={category.value}
        setValue={setCategory}
        valid={category.valid}
        validateValue={validateCategory}
        errorMessage={"Debe seleccionar una categoria"}
        required
        select={true}
      >
        {data.categories.map((category) => (
          <MenuItem key={category.id} value={category.name}>
            {category.name}
          </MenuItem>
        ))}
      </Input>

      <Input
        placeholder={"Descripción"}
        value={description.value}
        setValue={setDescription}
        valid={description.valid}
        validateValue={validateDescription}
        errorMessage={
          "La descripción debe tener al menos 3 caracteres y no exceder los 50 caracteres"
        }
        required
      />

      <Grid container marginTop={2} marginBottom={2}>
        <Grid item marginRight={2} marginBottom={2}>
          <Button
            text="Guardar"
            variant="contained"
            onClick={onSubmitAddVideo}
            disabled={
              !(
                !!title.valid &&
                !!link.valid &&
                category.valid &&
                description.value
              )
            }
          />
        </Grid>

        <Grid item marginRight={2} marginBottom={2}>
          <Button
            text="Limpiar"
            variant="contained"
            color="secondary"
            onClick={Clear}
          />
        </Grid>

        <Grid item marginLeft={"auto"}>
          <Link to={"/nueva-categoria"}>
            <Button
              text="Nueva Categoria"
              variant="contained"
              color="secondary"
            />
          </Link>
        </Grid>
      </Grid>
    </Form>
  );
};

export default RegisterVideo;

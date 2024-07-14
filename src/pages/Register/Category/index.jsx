import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Input from "../../../components/Shared/Input";
import Button from "../../../components/Shared/Button";
import { DataContext } from "../../../Context";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Form from "../../../components/Shared/Form";
import { useSnackbar } from 'notistack';
import { validateColor, validateDescription, validateName } from "./validacion";

const RegisterCategory = () => {
  const data = useContext(DataContext);
  const { enqueueSnackbar } = useSnackbar();

  const [id, setId] = useState(null);
  const [name, setName] = useState({value: "", valid: null});
  const [description, setDescription] = useState({value: "", valid: null});
  const [color, setColor] = useState({value: "#000000", valid: null});
  const [isEditable, setIsEditable] = useState(false);

  const Clear = () => {
    setName({value: "", valid: null});
    setDescription({value: "", valid: null});
    setColor({value: "#000000", valid: null});
    setIsEditable(false);
  };

  const onSubmitAddCategory = () => {
    data.onCreateCategory(name.value, description.value, color.value);
    enqueueSnackbar('Caregoria agregada', {variant: "success"});
  };

  const onSubmitDeleteCategory = (id) => {
    data.onDeleteCategory(id);
    enqueueSnackbar('Caregoria eliminada', {variant: "warning"});
  };

  const onEdit = (category) => {
    setName({value: category.name, valid: null});
    setDescription({value: category.description, valid: null});
    setColor({value: category.color, valid: null});
    setIsEditable(true);
    setId(category.id);
    enqueueSnackbar('Caregoria lista para editar', {variant: "info"});
  };

  const onSubmitEdit = () => {
    if (!id) return;
    data.onUpdateCategory(name.value, description.value, color.value, id);
    enqueueSnackbar('Caregoria editada', {variant: "success"});
  };

  return (
    
    <Form title={"Nueva categoría"}>
      <Input 
        placeholder={"Nombre"} 
        value={name.value} 
        setValue={setName}
        valid={name.valid}
        validateValue={validateName}
        errorMessage={"El nombre debe tener al menos 3 caracteres y no más de 29 caracteres"} 
        required 
      />

      <Input
        placeholder={"Descripción"}
        value={description.value}
        setValue={setDescription}
        valid={description.valid}
        validateValue={validateDescription}
        errorMessage={"La descripción debe tener al menos 3 caracteres y no exceder los 50 caracteres"}
        required
      />

      <Input
        placeholder={"Color"}
        value={color.value}
        setValue={setColor}
        valid={color.valid}
        validateValue={validateColor}
        errorMessage={"Se debe ingresar el color"}
        required
        type="color"
      />
      <Grid container marginTop={2} marginBottom={2}>
        {isEditable ? (
          <Grid item marginRight={2}>
            <Button
              text="Editar"
              variant="contained"
              color="success"
              onClick={onSubmitEdit}
              
            />{" "}
          </Grid>
        ) : (
          <Grid item marginRight={2}>
            <Button
              text="Guardar"
              variant="contained"
              onClick={onSubmitAddCategory}
              disabled={!(!!name.valid && !!description.valid)}
            />
          </Grid>
        )}
        <Grid item>
          <Button
            text="Limpiar"
            variant="contained"
            color="secondary"
            onClick={Clear}
          />
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ bgcolor: "black" }}>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Descripción</TableCell>
                <TableCell align="center">Color</TableCell>
                <TableCell align="center">Editar</TableCell>
                <TableCell align="center">Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.categories.map((category) => (
                <TableRow
                  key={category.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="category">
                    {category.name}
                  </TableCell>
                  <TableCell align="right">{category.description}</TableCell>
                  <TableCell align="center">
                    {" "}
                    <ColorLensIcon sx={{ color: category.color }} />{" "}
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Button text="Editar" onClick={()=> onEdit(category)} />{" "}
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Button text="Eliminar" color={"error"} onClick={()=> onSubmitDeleteCategory(category.id)}/>{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Form>
    
    
  );
};

export default RegisterCategory;

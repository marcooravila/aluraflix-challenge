import { TextField } from "@mui/material";

const Input = ({ placeholder, required, value, setValue, valid, validateValue, errorMessage, type="text", select=false, children}) => {
  
  const updateValue = (event) => {
    setValue({
      value: event.target.value, 
      valid: validateValue(event.target.value)
    });
  }


  return (
    <TextField
        fullWidth
        select={select}
        type={type}
        label={placeholder}
        required={required}
        value={value}
        onChange={updateValue}
        error={valid != null && !valid ? true : false}
        helperText={ valid != null && !valid && errorMessage}
        variant="filled"
        color="primary"
        margin="dense"
    >
      {children}
    </TextField>
  )
}

export default Input
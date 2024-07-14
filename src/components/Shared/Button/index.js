import { Button as Btn } from '@mui/material'
import React from 'react'

const Button = ({color, text, variant, fullWidth, onClick, disabled=false}) => {
  return (
    <Btn variant={variant} color={color} fullWidth={fullWidth} onClick={onClick} disabled={disabled}>{text}</Btn>
  )
}

export default Button
import { Grid, TextField } from '@material-ui/core';
import React from 'react'
import { useFormContext, Controller} from 'react-hook-form'

const FormInputField = ({name, label, required}) => {
    const {control} = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                control={control}
                fullWidth
                name={name}
                render = {({field: {onChange}})=> (
                    <TextField
                    fullWidth
                    label={label}
                    required={required}
                    onChange={onChange}
                    />
                )}
            />
        </Grid>
    )
}

export default FormInputField

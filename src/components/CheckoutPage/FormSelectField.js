import { Grid, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useFormContext, Controller} from 'react-hook-form'

import React from 'react' 


const FormSelectField = ({name, label, mapValue, mainValue, onChange}) => {
    const {control} = useFormContext()
    
    return (
        <Grid item xs={12} sm={6}>
         <Controller
        control ={control}
        name={name}
        fullwidth
        render={(field)=> (
            <>
            <InputLabel>{label}</InputLabel>
            <Select value={mainValue} onChange={onChange}>
                {mapValue.map(country => (
                <MenuItem key={country.id} value={country.id}>
                   {country.label}
                </MenuItem>
                ))}
            </Select>
            </>
        )} />
        </Grid>
    )
}

export default FormSelectField

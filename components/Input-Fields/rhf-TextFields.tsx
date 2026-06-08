import { Control, Controller, FieldValues, Path } from "react-hook-form";
import TextField, { TextFieldProps } from '@mui/material/TextField'

type ControlledTextFieldProps<T extends FieldValues> = TextFieldProps & {
    name: Path<T>,
    control: Control<T>,
}

export function ControlledTextField<T extends FieldValues>({ name, control, ...textFieldProps }: ControlledTextFieldProps<T>) {
    return <Controller name={name} control={control} render={({ field, fieldState }) => <TextField
        {...textFieldProps}
        {...field}
        error={!!fieldState.error}
        helperText={fieldState.error?.message as string}
    />
    } />
}
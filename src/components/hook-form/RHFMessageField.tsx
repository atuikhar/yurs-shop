import { useFormContext, Controller } from 'react-hook-form';
// @mui
import {
  FormControl,
  styled,
  TextFieldProps,
  TextField,
  inputLabelClasses,
  InputAdornment,
} from '@mui/material';
// icons
import ErrorIcon from '@mui/icons-material/Error';

//styles
import { ErrorSpace } from './RHFTextField';

// ----------------------------------------------------------------------

interface MProps {
  name: string;
  placeholder: string;
  minRows: number;
  visibility?: string | React.ReactElement;
}

const Input = styled(TextField)(({ theme }) => ({
  borderRadius: '8px',
  background: theme.palette.grey[600],

  '& fieldset': { border: 'none' },
  '& label': {
    '&.Mui-focused': {
      paddingTop: '25px',
      fontSize: '12px',
    },
    [`&.${inputLabelClasses.shrink}`]: {
      paddingTop: '25px',
      fontSize: '12px',
    },
  },
}));

const InfoIcon = styled(ErrorIcon)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export default function RHFMessageField({
  name,
  placeholder,
  minRows,
  ...other
}: MProps & TextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }: any) => (
        <>
          <FormControl fullWidth>
            <Input
              InputProps={{
                endAdornment: error && (
                  <InputAdornment position="end">
                    <InfoIcon fontSize="large" />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                style: { fontSize: 16, paddingTop: 10 },
              }}
              InputLabelProps={{
                style: { color: '#979797', marginTop: '1px' },
              }}
              label={placeholder}
              multiline
              autoComplete="off"
              minRows={minRows}
              {...field}
              error={!!error}
              {...other}
            />
            <ErrorSpace
              sx={{
                margin: error
                  ? (theme) => theme.spacing(0, 0, 0.2, 3)
                  : (theme) => theme.spacing(0, 0, 1.5, 3),
              }}
              error
            >
              {error?.message}
            </ErrorSpace>{' '}
          </FormControl>
        </>
      )}
    />
  );
}

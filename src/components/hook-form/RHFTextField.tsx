import { Dispatch, SetStateAction } from 'react';

import { useFormContext, Controller } from 'react-hook-form';
import {
  FormControl,
  styled,
  FormHelperText,
  TextField,
  TextFieldProps,
  InputAdornment,
} from '@mui/material';

//icons
import ErrorIcon from '@mui/icons-material/Error';
import useResponsive from 'src/hooks/useResponsive';
// ----------------------------------------------------------------------

interface IProps {
  name: string;
  placeholder: string;
  visibility?: string | React.ReactElement;
  setActive?: Dispatch<SetStateAction<boolean>>;
}

const Input = styled(TextField)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    fontFamily: theme.typography.fontFamily,
    borderRadius: '30px',
    background: theme.palette.grey[600],
  },
  [theme.breakpoints.down('sm')]: {
    background: theme.palette.grey[700],
    borderRadius: '30px',
    outline: 'none',
    boxShadow: 'none',
  },
}));

const InfoIcon = styled(ErrorIcon)(({ theme }) => ({
  color: theme.palette.error.main,
}));

export const ErrorSpace = styled(FormHelperText)(({ theme, error }) => ({
  display: 'flex',
  alignItems: 'start',
  fontSize: '12px !important',
  fontWeight: 400,
}));

export default function RHFTextField({
  name,
  placeholder,
  visibility,
  setActive,
  ...other
}: IProps & TextFieldProps) {
  const { control } = useFormContext();
  const isDesktop = useResponsive('up', 'sm');

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }: any) => (
        <>
          <FormControl
            sx={{
              ' .MuiFormControl-root': {
                margin: isDesktop ? '1px' : '3px',
              },
            }}
            onFocus={() => setActive && setActive(true)}
            onBlur={() => setActive && setActive(false)}
            fullWidth
          >
            <Input
              variant="filled"
              sx={{
                margin: error ? '10px 0px 0px 0px' : '8px 0px',
                '& label.Mui-focused': {
                  marginTop: 0.3,
                },
                '& .MuiFilledInput-input': {
                  padding: '25px 0px 8px 12px',
                },
                '& .MuiFilledInput-root': {
                  border: error ? ` 2px solid #CC5F47` : 'none',
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: 16,
                  fontFamily: 'Museo Sans Cyrl',
                  fontWeight: 400,
                  paddingLeft: '12px',
                  paddingTop: 0,
                  color: '#F5F5F5',
                },
              }}
              InputProps={{
                style: {
                  height: 56,
                  fontSize: 16,
                  fontWeight: 400,
                  paddingLeft: 10,
                  color: '#F5F5F5',
                  fontFamily: 'Museo Sans Cyrl',
                },
                disableUnderline: true,
                endAdornment: error ? (
                  <InputAdornment position="end">
                    <InfoIcon fontSize="large" />
                  </InputAdornment>
                ) : (
                  <InputAdornment sx={{ pr: 1 }} position="end">
                    {visibility}
                  </InputAdornment>
                ),
              }}
              label={placeholder}
              autoComplete="off"
              {...field}
              fullWidth
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
            </ErrorSpace>
          </FormControl>
        </>
      )}
    />
  );
}

import React from 'react';

//mui
import { styled, TextField, inputLabelClasses } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';

import { useFormContext, Controller } from 'react-hook-form';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { ErrorSpace } from './RHFTextField';

//icons
import ErrorIcon from '@mui/icons-material/Error';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type TDatePickerProps = {
  placeholder: string;
  name: string;
};

const InputWrapper = styled('div')(({ theme }) => ({
  width: '100%',
}));

const InfoIcon = styled(ErrorIcon)(({ theme }) => ({
  color: theme.palette.error.main,
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  borderRadius: '100px',
  background: theme.palette.grey[600],
  '& fieldset': { border: 'none' },

  '& .MuiInputBase-input': {
    paddingTop: 27,
    paddingBottom: 12,
  },
  '& label': {
    '&.Mui-focused': {
      paddingTop: '20px',
      fontSize: '12px',
    },

    [`&.${inputLabelClasses.shrink}`]: {
      paddingTop: '20px',
      fontSize: '12px',
    },
  },
}));

export default function RHFDatePicker({ placeholder, name }: TDatePickerProps): React.ReactElement {
  const { control } = useFormContext();
  return (
    <>
      <InputWrapper>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Controller
            name={name}
            control={control}
            defaultValue={null}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <DesktopDatePicker
                label={placeholder}
                value={value}
                onChange={onChange}
                components={{
                  OpenPickerIcon: error ? InfoIcon : KeyboardArrowDownIcon,
                }}
                renderInput={(params) => (
                  <>
                    <CustomTextField
                      {...params}
                      autoComplete="off"
                      InputLabelProps={{
                        style: { fontSize: 16, color: '#F5F5F5', marginTop: '1px' },
                      }}
                      fullWidth
                      error={!!error}
                      sx={{
                        '.MuiInputBase-input': {
                          paddingTop: error ? 2.4 : 3,
                        },
                        '& .MuiOutlinedInput-root': {
                          border: error ? ` 2px solid #CC5F47` : 'none',
                          borderRadius: '30px',
                        },
                      }}
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
                  </>
                )}
              />
            )}
          />
        </LocalizationProvider>
      </InputWrapper>
    </>
  );
}

import React from 'react';

import { useFormContext, Controller } from 'react-hook-form';
import { styled, TextField, inputLabelClasses } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ErrorSpace } from './RHFTextField';

type TimePickerProps = {
  placeholder: string;
  name: string;
};

const InputWrapper = styled('div')(({ theme }) => ({
  width: '100%',
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

export default function RHFDatePicker({ placeholder, name }: TimePickerProps): React.ReactElement {
  const { control } = useFormContext();
  return (
    <>
      <InputWrapper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
            name={name}
            control={control}
            defaultValue={null}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TimePicker
                label={placeholder}
                value={value}
                onChange={onChange}
                components={{
                  OpenPickerIcon: KeyboardArrowDownIcon,
                }}
                renderInput={(params) => (
                  <>
                    <CustomTextField
                      {...params}
                      label={placeholder}
                      autoComplete="off"
                      InputLabelProps={{
                        style: { fontSize: 16, color: '#979797', marginTop: '1px' },
                      }}
                      fullWidth
                      error={!!error}
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

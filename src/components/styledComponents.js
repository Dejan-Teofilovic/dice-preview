import { Button, TextField, Toolbar } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { COLOR_INFO, COLOR_PRIMARY } from '../utils/constants';

export const PrimaryButton = styled(Button)`
  font-family: sfProRounded;
  background-color: ${COLOR_PRIMARY};
  border-radius: 25px;
  text-transform: none;
  :hover {
    background-color: #871f4d;
  } 
`;

export const TextButton = styled(Button)`
  font-family: sfProRounded;
  color: ${COLOR_INFO};
  text-transform: none;
`;

export const DTextField = styled(TextField)({
  color: grey[700],
  fontSize: 5,
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: grey[400],
    borderRadius: 0,
    '& fieldset': {
    },
    '&:hover fieldset': {
      borderColor: COLOR_PRIMARY,
    },
    '&.Mui-focused fieldset': {
      border: `2px solid ${COLOR_PRIMARY}`,
    },
  },
  '& .MuiOutlinedInput-input': {
    fontSize: 14,
    padding: 10
  },
  '& .MuiOutlinedInput-input::placeholder': {
    fontWeight: 900
  },
  '& .MuiFormHelperText-root': {
    margin: '10px 0px'
  }
});

export const DToolbar = styled(Toolbar)({
  '&.MuiToolbar-root': {
    paddingLeft: 0,
    paddingRight: 0
  }
});

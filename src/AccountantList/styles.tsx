import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledList = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  marginTop: '48px',

  '@media (max-width: 1350px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
}));

export const FlexCenteredWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '24px',
}));

export const ContainedButton = styled(Button)(() => ({
  borderRadius: '8px',
  opacity: '1',
  backgroundColor: 'rgba(30, 136, 229, 1)',
  width: '151px',
  height: '36px',
  textTransform: 'none',
  color: 'white',
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '0px',

  '&:hover': {
    background: 'rgba(30, 136, 229, 0.8)',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },

  '&:disabled': {
    backgroundColor: 'rgba(200, 200, 200, 1)',
    color: 'rgba(100, 100, 100, 1)',
    pointerEvents: 'none',
  },
}));

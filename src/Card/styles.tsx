import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(() => ({
  borderRadius: '8px',
  opacity: '1',
  backgroundColor: 'rgba(227,242,253, 1)',
  width: '151px',
  height: '36px',
  textTransform: 'none',
  color: 'rgba(30,136,229,1)',
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '0px',

  '&:hover': {
    background: 'rgba(227,242,253, 1)',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  },
}));

export const StyledCard = styled('div')(() => ({
  borderRadius: '16px',
  border: '1px solid rgba(228,230,232, 1)',
  boxShadow: '0px 1px 3px rgba(0,0,0, 0.12)',
  padding: '24px',
}));

export const CardWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

export const CardHeaderWrapper = styled('div')(() => ({
  display: 'flex',
  gap: '10px',
}));

export const CardHeaderTitle = styled(Typography)(() => ({
  fontSize: '16px',
  color: 'rgba(84,88,92,1)',
  letterSpacing: '0px',
  lineHeight: '24px',
}));

export const CardHeaderDescription = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: '700',
  letterSpacing: '0',
  lineHeight: '32px',
}));

export const StyledLabel = styled('label')(() => ({
  color: 'rgba(84,88,92,1)',
  fontSize: '14px',
  fontWeight: '400',
  letterSpacing: '0px',
  lineHeight: '20px',
}));

type LinkProps = {
  underline?: boolean;
};

export const StyledLink = styled('a')<LinkProps>(({ underline }) => ({
  display: 'block',
  color: 'black',
  fontSize: '16px',
  fontWeight: '400',
  letterSpacing: '0px',
  lineHeight: '24px',
  textDecoration: underline ? 'underline' : 'none',
}));

export const StyledDescription = styled(Typography)(() => ({
  display: 'block',
  color: 'black',
  fontSize: '16px',
  fontWeight: '400',
  letterSpacing: '0px',
  lineHeight: '24px',
}));

export const StyledAppendix = styled('a')(() => ({
  fontSize: '12px',
  fontWeight: '400',
  fontStyle: 'normal',
  letterSpacing: '0px',
  textAlign: 'right',
  lineHeight: '16px',
  marginLeft: '4px',
}));

import { createTheme } from '@mui/material';

export const themeData = createTheme({
  colors: {
    color_white: '#fff',
    color_blue: '#4636b0',
    color_red: '#c94f4f'
  },
});

const theme = createTheme({
  customColor: themeData.colors,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '24px',
          letterSpacing: '0.4px',
          textTransform: 'capitalize',
          '&:hover': {
            '&.MuiButton-contained': {
              '&:hover': {
                backgroundColor: themeData.colors.color_dark_blue,
              },
            },
            '&.MuiButton-outlined': {
              '&:hover': {
                backgroundColor: themeData.colors.color_white,
              },
            },
          },
        },
        sizeSmall: {
          padding: '4px 8px',
          minWidth: '24px',
        },
        sizeMedium: {
          padding: '7px 20px',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        textSizeSmall: {
          padding: '4px 8px',
        },
        textSizeMedium: {
          padding: '9px 16px',
        },
        textSizeLarge: {
          padding: '12px 16px',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
          },
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
          },
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          padding: 0,
          '&.modal_container': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: themeData.colors.color_white,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.PrivatePickersMonth-root': {
            fontSize: '14px',
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          lineHeight: '24px',
        },
      },
    },
    text: {
      primary: themeData.colors.color_dark_gray,
      chip: themeData.colors.color_purple,
    },
  },
  typography: {
    subtitle1: {
      fontSize: '14px',
      lineHeight: '20px',
      color: themeData.colors.color_dark_gray,
      fontWeight: '300',
      letterSpacing: '0.17px',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57,
    },
    title: {
      fontSize: '14px',
      lineHeight: '20px',
      color: themeData.colors.color_black,
    },
    reportsTitle: {
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '32px',
      color: themeData.colors.color_black,
    },
    notiTitle: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
      color: themeData.colors.color_black,
    },
  },
});

export default theme;
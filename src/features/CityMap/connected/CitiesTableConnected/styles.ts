export default (theme: any): any => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 768,
    maxWidth: 1024
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  city: {
    '&:hover': {
      color: '#ddd'
    },
    cursor: 'pointer'
  }
});
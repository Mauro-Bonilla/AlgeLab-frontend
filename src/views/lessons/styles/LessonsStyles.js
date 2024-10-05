import { makeStyles } from '@mui/styles';

export const LessonsStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));
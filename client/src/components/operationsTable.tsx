import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from '@material-ui/core';
import { IOperation } from '../types/IOperation';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: 1000,
  },
});

interface OperationsTableProps {
  operations: IOperation[];
}

export const OperationsTable = ({ operations }: OperationsTableProps) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Operation</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {operations.map((operation) => (
              <TableRow key={operation.id}>
                <TableCell component="th" scope="row">
                  {operation.name}
                </TableCell>
                <TableCell align="right">{operation.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};


import Drawer from '../../components/Drawer'
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';



const columns = [
  { id: 'Ticket', label: 'Ticket details', minWidth: 170 },
  { id: 'Customer', label: 'Customer name', minWidth: 100 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'priority',
    label: 'Priority',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
];

function createData(Ticket, Customer, date, priority) {
  return { Ticket, Customer, date, priority};
}

const rows = [
  createData('Contact Email Not Linked', 'Tom Cruise', 'May 26, 2019', 'HIGH'),
  createData('Adding Images to Featured Posts', 'Matt Damon', 'May 26, 2019', 'LOW'),
  createData('When will I be charged this month', 'Robert Downey', 'May 26, 2019', 'HIGH'),
  createData('Payment not going through', 'Christian Bale', 'May 25, 2019', 'NORMAL'),
  createData('Unable to add replies', 'Henry Cavil', 'May 25, 2019', 'HIGH'),
  createData('Downtime since last week', 'Chris Evans','May 25, 2019', 'NORMAL'),
  createData('Referral Bonus', 'Sam Smith', 'May 25, 2019', 'LOW'),
  createData('How do I change my password?', 'Steve Rogers', 'May 24, 2019', 'NORMAL'),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 150,
    marginLeft: 350,
  },
  container: {
    maxHeight: 440,
  },
});

export default function Lists() {
  const classes = useStyles()

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
 <>
    <Drawer />    
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
 </>
  )
}



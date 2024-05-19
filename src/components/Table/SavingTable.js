import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Date, Credit, Balance) {
  return {Date, Credit, Balance};
}

const rows = [
  createData('Dec 7th 2020', "N20,000", "N140,000"),
  createData('Dec 7th 2020', "N20,000", "N140,000"),
  createData('Dec 7th 2020', "N20,000", "N140,000"),
  createData('Dec 7th 2020', "N20,000", "N140,000"),
  createData('Dec 7th 2020', "N20,000", "N140,000"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Credit</TableCell>
            <TableCell align="center">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"  align="center">
                {row.Date}
              </TableCell>
              <TableCell align="center">{row.Credit}</TableCell>
              <TableCell align="center">{row.Balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
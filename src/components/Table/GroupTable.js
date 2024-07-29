import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

function createData(SN, Name,Joined) {
  return {SN,Name,Joined};
}

const rows = [
  createData("1",'Ayo Group', "Jam 10th 2024"),
  createData("2",'Teachers Community', "Jan 10th 2024"),
  createData("3",'Arewa Group', "Jan 10th 2024"),
  createData("4",'NURT Group', "Jan 10th 2024"),
 

];

export default function GroupTable({data}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">S/N</TableCell>
            <TableCell style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">Name</TableCell>
            <TableCell  style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">Date Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row,index) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell  style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} component="th" scope="row"  align="left">
                        {row.SN}
                    </TableCell>
                    <TableCell  style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} component="th" scope="row"  align="left">
                        {row?.Name}
                    </TableCell>
                    <TableCell style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} align="left">{row?.Joined}</TableCell>
                    <Link to={`/dashboard-member`}>  <TableCell><button className='view-button'>View</button></TableCell> </Link>
                </TableRow>
           
          ))}
        </TableBody>
      </Table>
   
    </TableContainer>
  );
}
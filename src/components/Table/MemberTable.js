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

function createData(Name, Gender, Joined, Occupation) {
  return {Name, Gender, Joined, Occupation};
}

const rows = [
  createData('Ademola John', "Male", "Dec 8th 2023", "Teacher"),
  createData('Oyekunle Taiwo', "Female", "Jan 10th 2024", "Banker"),
  createData('Idowu Tobi', "Male", "Jan 20th 2023", "Farmer"),
  createData('Ademola John', "Male", "Dec 8th 2023", "Teacher"),
  createData('Ademola John', "Male", "Dec 8th 2023", "Teacher"),
  createData('Idowu Tobi', "Male", "Jan 20th 2023", "Farmer"),
  createData('Ademola John', "Male", "Dec 8th 2023", "Teacher"),
  createData('Ademola John', "Male", "Dec 8th 2023", "Teacher"),
 

];

export default function MemberTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">Name</TableCell>
            <TableCell  style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">Gender</TableCell>
            <TableCell  style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">Date Joined</TableCell>
            <TableCell  style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">Occupation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
           
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                
                    <TableCell  style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} component="th" scope="row"  align="left">
                        {row.Name}
                    </TableCell>
                    <TableCell  style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} align="left">{row.Gender}</TableCell>
                    <TableCell style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} align="left">{row.Joined}</TableCell>
                    <TableCell style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} align="left">{row.Occupation}</TableCell>
                    <Link to="/member-details">  <TableCell><button className='view-button'>View</button></TableCell> </Link>
                
                </TableRow>
           
          ))}
        </TableBody>
      </Table>
   
    </TableContainer>
  );
}
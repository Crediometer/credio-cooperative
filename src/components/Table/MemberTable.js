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

function createData(SN, Name, Gender, Joined, Occupation) {
  return {SN,Name, Gender, Joined, Occupation};
}

const rows = [
  createData("1",'Ademola John', "Male", "Jam 10th 2024", "Teacher"),
  createData("2",'Oyekunle Taiwo', "Female", "Jan 10th 2024", "Banker"),
  createData("3",'Idowu Tobi', "Male", "Jan 10th 2024", "Farmer"),
  createData("4",'Ademola John', "Male", "Jan 10th 2024", "Teacher"),
  createData("5",'Ademola John', "Male", "Jan 10th 2024", "Teacher"),
  createData("7",'Idowu Tobi', "Male", "Jan 10th 2024", "Farmer"),
  createData("8",'Ademola John', "Male", "Jan 10th 2024", "Teacher"),
  createData("9",'Ademola John', "Male", "Jan 11  th 2024", "Teacher"),
 

];

export default function MemberTable({data}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">S/N</TableCell>
            <TableCell style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">Name</TableCell>
            <TableCell  style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">Gender</TableCell>
            <TableCell  style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">Date Joined</TableCell>
            <TableCell  style={{color: "#B11226", fontFamily: "Poppins", fontSize:"1.2rem", fontWeight:"700"}} align="left">Occupation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row,index) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell  style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} component="th" scope="row"  align="left">
                        {row.SN}
                    </TableCell>
                    <TableCell  style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} component="th" scope="row"  align="left">
                        {row?.personalInfo?.fullname}
                    </TableCell>
                    <TableCell  style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} align="left">{row?.personalInfo?.sex}</TableCell>
                    <TableCell style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} align="left">{row.createdAt.slice(0,10)}</TableCell>
                    <TableCell style={{color: "#4B4B4B", fontFamily: "Poppins", fontSize:"1rem", fontWeight:"600"}} align="left">{row?.personalInfo?.occupationBusiness}</TableCell>
                    <Link to={`/member-details/${row.Name}`}>  <TableCell><button className='view-button'>View</button></TableCell> </Link>
                </TableRow>
           
          ))}
        </TableBody>
      </Table>
   
    </TableContainer>
  );
}
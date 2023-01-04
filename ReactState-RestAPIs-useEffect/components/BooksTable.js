import {useEffect, useState, Fragment} from 'react'

import Head from 'next/head'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Navbar from '../components/Navbar'

  export default function BooksTable(props){
    <TableContainer component={Paper}>
  <Table>
  <TableHead>
      <TableRow>
      <TableCell>Books in all Languages</TableCell>
      </TableRow>
  </TableHead>
  <TableBody>
      {props.map((book, index) =>{
        return <TableRow key={index}>
          <TableCell>{book}</TableCell>
              
              
          </TableRow>}
          )}

  </TableBody>
  </Table>
</TableContainer>
  }

  
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


export default function PopularAuthorList(props){
    return <>
            <Grid item xs={4}>
            <Box sx={{width: '100%'}}>
            <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom>
                Popular Authors
            </Typography>
            <List sx={{width: '100%'}}>
                <Divider />
                {props.map((author, index)=> {
                return <Fragment key={index}>
                    <ListItem
                    secondaryAction={
                        <Button
                        //onClick={(author => clickHandler(author))}
                        onClick={() => {setAuthorKey(author.key); changeAuthor();}}
                        >show</Button>}>
                    <ListItemText primary={author.name}></ListItemText>
                    </ListItem>
                    <Divider />
                </Fragment>
                })}
            </List>
            </Box>
        </Grid>
            </>
   
  }
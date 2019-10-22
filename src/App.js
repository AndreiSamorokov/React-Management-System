import React,{ Component } from 'react'; 
import Customer from './components/Customer';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

import './App.css';
const style = theme => ({
  root: {
    with: '100%',
    martinTop: theme.spacing(3),
    overfloX: "auto"
  },
  talbe: {
    minWidth: 1080
  }
})

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: 'Vlad',
    birthday: '45',
    gender: 'man',
    job: 'CEO'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: 'Andrei',
    birthday: '35',
    gender: 'man',
    job: 'Developer'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: 'Sasya',
    birthday: '25',
    gender: 'man',
    job: 'Designer'
  }
]

class App extends Component{
  render(){
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.talbe}>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Img</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            customers.map(c=>{return ( <Customer key = {c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ) })
          }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(style)(App);

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



class App extends Component{
  state = {
    customers : ""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));

  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();

    return body;
  }

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
          {this.state.customers ? this.state.customers.map(c=>{
            return ( <Customer key = {c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ) 
          }) : ""}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(style)(App);

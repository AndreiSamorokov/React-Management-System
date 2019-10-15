import React,{ Component, Fragment } from 'react'; 
import Customer from './components/Customer';

import './App.css';

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
    return(
      <Fragment>
        {
          customers.map(c=>{return ( <Customer key = {c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ) })
        }
      </Fragment>
    )
  }
}

export default App;

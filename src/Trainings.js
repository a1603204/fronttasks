import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Table from 'sort-table-react'
import logo from './logo.svg';
import './App.css';

class Trainings extends Component {
    constructor (props){
        super(props);
    
    this.state = { customers: [] };
    }
    


componentDidMount(){
    this.loadCustomers();
}

loadCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
    .then((response) => response.json()) 
    .then((responseData) => { 
       this.setState({ 
        customers: responseData.content,
        });
    })  
   
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
   
        
        <div className ="container">
        
        <ReactTable data={this.state.customers}
        
        columns={[
            {
              columns: [
    
                {
                  Header: "Date",
                  accessor: "date"
                },
                {
                  Header: "Duration",
                  accessor: "duration",
                },
                {
                  Header: "Activity",
                  accessor: "activity",
                },
          
              ]
            }
          ]}
          defaultPageSize={10}
          filterable
          className="-striped -highlight" > 
        </ReactTable>,
      </div>
        </div>
    );
  }
}

export default Trainings;


// import './App.css';
import React, { Component } from 'react';  
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";    

class App extends Component {  
  render() {  
    const cols = [{  
      Header: 'Name of College',  
      accessor: 'name'  
      },{  
      Header: 'Found in',  
      accessor: 'year'  
      },{  
        Header: 'Location',  
        accessor: 'location'  
      },{  
        Header: 'No. of Students',  
        accessor: 'year'  
      }]  
     const colleges = [{  
        name: 'Institute of Technology, Delhi',  
        year: 1950,
        location: "Delhi",
        students: 2000
        },{  
          name: 'Institute of Technology, Bombay',  
          year: 1980,
          location: "Bombay, Maharashtra",
          Students: 10000
      }]  

    return (  
          <div>  
              <ReactTable  
                  data={colleges}  
                  columns={cols}  
                  defaultPageSize = {10}  
                  pageSizeOptions = {[10,20,30]}  
              />  
          </div>        
    )  
  }  
}  
export default App;
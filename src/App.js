import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items: [],
      name:"sahan",
      isLoaded:false,
    }
  }

  componentDidMount(){

    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=EHWvdxhhBkAzsMfcGFvYXxdwaOMG8JZH')
    .then(response => response.json())
    .then(data => console.log(data.results.books))
    .then(json=>{
        this.setState({
          items:json,
          isLoaded: true,
        })
    });
      // .then(json=>{
      //     console.log(json);
      //     this.setState({
      //      // isLoaded: true,
      //      // items: json,
      //    // })
      // });
  }
  render(){

    var { isLoaded, items }=this.state;
    

    if(!isLoaded){
      return <div>Loading..it</div>;
    }
    
     else{
      return(
        <div className="App">
            <ul>
                
               data loaded
               {/* {{thi}} */}
            </ul>
        </div>
      );
    }
  } }

export default App

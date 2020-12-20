import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items: [],
      isLoaded:false,
    }
  }

  componentDidMount(){

    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=EHWvdxhhBkAzsMfcGFvYXxdwaOMG8JZH')
    .then(response => response.json())
      .then(data => {
        console.log(data.results.books)
             this.setState({
            items:data.results.books,
            isLoaded: true,
        })
      })
   ; 
  }
  render(){

    var {  isLoaded, items }=this.state;
    

    if(!isLoaded){
      return <div>
          Loading..it
        </div>;
    }
    
     else{
      return(
        <div className="App">
          <h1 class="topic">The New York Times best-selling books list</h1>
            <ul class="list">
            { items.map((item,index ) =>
                <div class="row">
                   <img style={{width: 175, height: 175}}  src={item.book_image}  />
                  <div class="col-sm"><li key={index}>{ item.rank }</li><hr/></div>
                  <div class="col-sm"><li key={index}>{ item.title }</li></div>
                  <div class="col-sm"><li key={index}>{ item.author }</li></div>
                  <div class="col-sm"><br/></div>
      
                  </div>
               )
              }
            </ul>
        </div>
      );
    }
  } 
}

export default App
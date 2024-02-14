import React, { useEffect, useState } from "react";
// import { robots } from './robots';
import CardList from "../components/cardList";
import Searchbox from "../components/Searchbox";
import './App.css'



const App = () =>{
    // state hook for searchfield
    const [searchfield, setSearchField] = useState("");
    const [robots, setRobots] = useState([]);

    function onSearchChange (event){
        const value= event.target.value;
        setSearchField(value);
        console.log(searchfield);
        
    }
    // fetch data from api
    function getData(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((data) => setRobots(data))
        .catch((error) => console.log("Error fetching data"));
    }
    
    useEffect(() =>{
        getData();
    })
    
    const filteredRobots = robots.filter((robot)=> robot.name.toLowerCase().includes(searchfield.toLowerCase()));

    if(!robots.length) 
        return(<h1>Loading</h1>)
    else{
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox searchChange={onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
            
        )   
    }
}
export default App;


                //without using usestate
// -----------------------------------------------------

// import React, { Component } from "react";
// import { robots } from './robots';
// import CardList from "./cardList";
// import Searchbox from "./Searchbox";


// // using class
// class App extends Component{

//     constructor(){
//         super();
//         this.state = {
//             robots: robots,
//             searchfield: ''
//         }
//     }

//     onSearchChange = (event) =>{
//         // storing searchField event  in the state 
//         this.setState({searchfield:  event.target.value});
        
//     }

//     render() {
//         const filteredRobots=this.state.robots.filter(robot =>{
//             return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase()) // to filter the data based on user input  for filtering the data 
//         })

//         return(
//             <div className="tc">
//                 <h1>RoboFriends</h1>
//                 <Searchbox searchChange={this.onSearchChange}/>
//                 <CardList robots={filteredRobots} />
//             </div>
            
//         )
//     }

    
// }

// // previous, without using class
// // const App = () =>{

// //     return(
// //         <div className="tc">
// //             <h1>RoboFriends</h1>
// //             <Searchbox />
// //             <CardList robots={robots} />
// //         </div>
        
// //     )
// // }
// export default App;
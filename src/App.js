
import React,{useState,useEffect} from "react"
import './App.css';
import Links from "./Links"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import IssuePage from "./IssuePage";
function App() {
  const [fetchedData,setFetchedData]=useState([1,2,3])
  const [content,setContent]=useState({})
  const getdata=()=>{
    fetch("https://api.github.com/repos/facebookincubator/create-react-app/issues")
    .then(response=>response.json())
    .then(data=>setFetchedData(data))
  }
  useEffect(() => {
    getdata();
  },[]);
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/IssuePage" exact>
           <IssuePage data={content}/>
          </Route>
          <Route path="/" exact>
           <Links setContent={setContent} fetchedData={fetchedData} />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
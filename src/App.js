import logo from './logo.svg';
import './App.css';
import { useEffect ,useState} from 'react';
import RecordData from './screens/recorddata';
import { Grid } from '@mui/material';
function App() {
  const[userData,setUserData]=useState([]);
  useEffect(() =>{  
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(
        (result) => {
        setUserData(result.data)    
            console.log(result);
        },      
        (error) => {
            alert(error)
        }
    )
  },[]) 

  return (
    <div className="App">
     
    {/* {
        userData.map((item,index)=>{
         return <RecordData userDetails={item} key={index}/> 
        
       })
    } */}
     <Grid container spacing={3}>
          {userData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} xl={3} key={index} >
             <RecordData userDetails={item} key={index}/> 
            </Grid>
          ))}
      </Grid>

      
         
       {/* <RecordData userDetails="hlo"/>  */}
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Profile} from './components/Profile'
import {BookingHist} from './components/BookingHist'
import {Balance} from './components/Balance'

function App() {
  const bookinghist = [{
    name:"Ride-1",
    startpoint :"hyderabad",
    destination : "Guntur",
    duration : "Duration",
    fare :"1000 rs",
    date :"10-5-2020"
    },
    {
    name:"Ride-2",
    startpoint :"bellam",
    destination : "paakam",
    duration : "1 sec",
    fare :"100 rs",
    date :"11-5-2020"
    },
    {
    name:"Ride-2",
    startpoint :"bellam",
    destination : "paakam",
    duration : "1 sec",
    fare :"100 rs",
    date :"11-5-2020"
    },
    {
    name:"Ride-2",
    startpoint :"bellam",
    destination : "paakam",
    duration : "1 sec",
    fare :"100 rs",
    date :"11-5-2020"
    }
  ]


  const profiledata ={
    email:"abhinavaaa@gmail.com",
    username: "raghus",
    phnumber:"7995948888" 
  }

  return (
    <Profile info={profiledata}/>
    //<BookingHist info={bookinghist}/>
    //<Balance/>
  );
}

export default App;

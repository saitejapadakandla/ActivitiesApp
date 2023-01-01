import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header,Icon, List, Button} from 'semantic-ui-react'

function App() {
  const [activities,setActivities] = useState([]);
  useEffect(
    ()=>{
      axios.get('http://localhost:5211/api/Activities').then(response=>
      {
      setActivities(response.data)
      }
      );
    },[]
  )
  return (
    <div>
        <Header as='h2' icon='users' content='Reactivities'/>
        
        <List>{activities.map((activity:any) =>(
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}</List>

        <Button content='Test'/>
    </div>
  );
}

export default App;

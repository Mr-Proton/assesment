import { useState, useEffect } from "react";
import "./App.css";
import { Link } from 'react-router-dom'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=8`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
      .catch((err) => {
        console.log(err.message);
      }); 
    console.log(data);
  }, [setData]);

  return (
    <div className="app">
      
      {data?.map((item) => (
        <div className="card-body">
          <Link to={{pathname:`/${item.id}`, state:{users:item}}}>
          <div className="heading"><h2>{item.company.name}</h2></div>
          <div className="card-texts">
            <h3>Owner: {item.name}</h3>
            <div className="details">
              <h6>Email : {item.email}</h6>
            </div>
          </div>
          </Link>
        </div>
      ))}

    </div>
  );
}

export default App;

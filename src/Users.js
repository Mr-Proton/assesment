import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


export default function Users(){
    const {id}=useParams()
    const [data, setData] = useState([]);
    

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/`+id)
        .then((response) => response.json())
        .then((actualData) => setData(actualData))
        .catch((err) => {
          console.log(err.message);
        });
      console.log(data);
    }, [id]);

    return(
        <div className="info">
            <h1 className="head-name">{data.name}</h1>
            {/* <h2>Company : {data.company.name}</h2> */}
            <h3>Email : {data.email}</h3>
            <h3>Phone : {data.phone}</h3>
            <h3>Phone : {data.website}</h3>
        </div>
    )
}
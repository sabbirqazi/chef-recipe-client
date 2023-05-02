/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = ({children}) => {
    
    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:5000/allData/${id}`)
        .then((res) => res.json())
        .then((data) => console.log(data.details));
    }, []);
  
    console.log(id);
    return (
        <div>
            <h1>helooooo</h1>
        </div>
    );
};

export default Recipe;
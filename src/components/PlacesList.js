import React, { useState } from 'react';
import Place from './Place';
import AddPlace from './AddPlace';

const PlacesList = () => {
    const [country, setCountry] = useState([
        { name: 'Japan', isCompleted: false },
        { name: 'Taiwan', isCompleted: false },
        { name: 'USA', isCompleted: false }
    ]);
    
    const addPlace = (name) => {
        const newplace = [...country, { name } ];
        setCountry(newplace)
    }

    const completePlace = index => {
        const newplace = [...country];
        newplace[index].isCompleted = !newplace[index].isCompleted;
        setCountry(newplace)
    }

    const deletePlace = index => {
        const newplace = [...country];
        newplace.splice(index, 1);
        setCountry(newplace)
    }

    return (
        <div className="todolist">
            <h3>Places I've been to:</h3>
            <Place country={country} deletePlace={deletePlace} completePlace={completePlace} />
            <AddPlace addPlace={addPlace} />
        </div>
    )
}

export default PlacesList;
import React from 'react';

const Place = ({country, deletePlace, completePlace}) => {
    const countries = country.length ? (
        country.map((country, index) => {
            return (
                <li
                key={index}
                style={{
                    textDecoration: country.isCompleted ? 'line-through' : 'none',
                    backgroundColor: country.isCompleted ? '#ddd' : 'transparent'
                }}>
                    {country.name}
                    <span onClick={() => {deletePlace(index)}}>X</span>
                    <small onClick={() => completePlace(index)}>{ country.isCompleted ? 'Completed' : 'Complete'}</small>
                </li>
            )
        })
    ) : (
        <p><i>No more countries in the list.</i></p>
    )
    return (
        <div className="placeslist">
            <ul>
            {countries}
            </ul>
        </div>
    )
}

export default Place;
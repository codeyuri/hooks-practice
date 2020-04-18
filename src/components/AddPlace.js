import React, { useState } from 'react';

const AddPlace = ({addPlace}) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addPlace(value);
        setValue('');
    }
    return (
        <div className="addplace">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add place..." value={value} onChange={e => setValue(e.target.value)} />
            </form>
        </div>
    )
}

export default AddPlace;
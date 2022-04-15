import React from 'react';

const Car = ({ car }) => {
    const { name, picture, color } = car;
    return (
        <div>
            <h1>{name}</h1>
            <img width={500} src={picture} alt="" />
            <h3>Available color: {color}</h3>
        </div>
    );
};

export default Car;
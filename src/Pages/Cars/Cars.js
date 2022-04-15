import React, { useEffect, useState } from 'react';
import Car from '../Home/Car/Car';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            {
                cars.map(car => <Car
                    key={car._id}
                    car={car}
                ></Car>)
            }
        </div>
    );
};

export default Cars;
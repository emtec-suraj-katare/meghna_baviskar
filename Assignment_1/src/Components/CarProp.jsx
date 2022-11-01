import React from 'react'

const CarProp = (props) => {
    const cars = props.cars

    return (
        <div>
            <ul>
                <li> Model:{cars.model}</li>
                <li>Company:{cars.company}</li>
                <li>Price:{cars.price}</li>
                <li>Configuration:
                    <ul>
                        <li>Color: {cars.configuration.color}</li>
                        <li>Fuel: {cars.configuration.fuel}</li>
                        <li>Cylinder: {cars.configuration.cylinder}</li>
                        <li>FuelTankCapacity:{cars.fuelTankCapacity}</li></ul></li>
                    <li>Mileage:
                        <ul>
                            <li>City: {cars.configuration.mileage.city}</li>
                            <li>Highway:{cars.configuration.mileage.highway}</li>
                        </ul></li>
            </ul>
        </div>
    )

}

export default CarProp;
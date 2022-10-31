import React from 'react'

const CarProp = (props) => {
    const cars = props.cars

    return (
        <div>
            <ul>
                <li> model:{cars.model}</li>
                <li>company:{cars.company}</li>
                <li>price:{cars.price}</li>
                <li>configuration:
                    <ul>
                        <li>color: {cars.configuration.color}</li>
                        <li>fuel: {cars.configuration.fuel}</li>
                        <li>cylinder: {cars.configuration.cylinder}</li>
                        <li>fuelTankCapacity:{cars.fuelTankCapacity}</li></ul></li>
                    <li>mileage:
                        <ul>
                            <li>city: {cars.configuration.mileage.city}</li>
                            <li>highway:{cars.configuration.mileage.highway}</li>
                        </ul></li>
            </ul>
        </div>
    )

}

export default CarProp;
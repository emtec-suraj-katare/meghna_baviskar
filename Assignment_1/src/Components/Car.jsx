import React from 'react'

const Car = () => {
    const Car =
    {
        model: 'i20',
        company: 'Hyundai',
        price: 20,
        configuration: {
            color: 'gray',
            fuel: 'petrol',
            cylinder: 4,
            fuelTankCapacity: 37,
            mileage: {
                city: 14,
                highway: 20,
            },
        },
        features: ['touch screen', 'bluetooth', 'alloy wheels', 'power steering']
    }
    return (
        <div>
            model:{Car.model}
            company:{Car.company},
            price:{Car.price},
            configuration:
            color: {Car.configuration.color},
            fuel: {Car.configuration.fuel},
            cylinder: {Car.configuration.cylinder},
            fuelTankCapacity:{Car.fuelTankCapacity},
            mileage:
            city: {Car.configuration.mileage.city},
            highway:{Car.configuration.mileage.highway}
        </div>
    )
}
export default Car
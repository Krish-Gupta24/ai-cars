import React from 'react'
import { CarsList } from './_components/CarList'


export const metadata = {
    title: "Cars | SmartWheels",
    description:"Manage cars in your marketplace"
}

const CarsPage = () => {
  return (
      <div className='p-6'>
          <h1 className='text-2xl font-bold mb-6'>Cars Management</h1>
          <CarsList/>
    </div>
  )
}

export default CarsPage
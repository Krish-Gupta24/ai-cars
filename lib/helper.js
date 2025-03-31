export const serializedCarsData = (car, whishlisted = false) => {
    return {
        ...car,
        price: car.price ? parseFloat(car.price.toString()) : 0,
        createdAt: car.createdAt?.toISOString(),
        updatedAt: car.updatedAt?.toISOString(),
        whishlisted: whishlisted
        
    }
}

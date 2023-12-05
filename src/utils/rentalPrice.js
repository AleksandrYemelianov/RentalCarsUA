export const rentalPrice = () => {
    let priceSelect = []
    for (let index = 30; index <= 500; index += 10) {
         priceSelect.push(index); 
    }
    return priceSelect
} 
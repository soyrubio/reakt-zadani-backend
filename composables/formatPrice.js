
export const formatPrice = (price = 0, amount = 1) => {
    if (!price) return
    return useState('formatPrice', () => Math.ceil(price * amount).toLocaleString() + ' Kč').value
  }
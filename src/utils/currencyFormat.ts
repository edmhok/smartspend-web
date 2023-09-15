export const phpCurrencyFormat = (price: number | undefined) => {
    if (price === undefined) return null;
  
    return new Intl.NumberFormat('en-PH', { 
      style: 'currency',
      currency: 'PHP'
    }).format(price);
  }
//Takes in a number and converts it into a currency format for GBP
export const formatPrice = (figure: number) => {
  return new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  }).format(figure);
};

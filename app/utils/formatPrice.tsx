export const formatPrice = (figure: number) => {
  return new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  }).format(figure);
};

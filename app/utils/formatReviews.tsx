export const formatReviews = (num: number) => {
  if (num === 1) {
    return num + " " + "review";
  } else {
    return num + " " + "reviews";
  }
};

//Converts the word "review" into plural when number being taken in is not 1
export const formatReviews = (num: number) => {
  if (num === 1) {
    return num + " " + "review";
  } else {
    return num + " " + "reviews";
  }
};

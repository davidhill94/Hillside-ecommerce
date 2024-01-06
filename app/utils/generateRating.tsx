import { FaStar, FaRegStar, FaRegStarHalfStroke, FaS } from "react-icons/fa6";

//Takes in a number from the products review ratings and converts them into 3 types of star icon that displays the average product rating
export const generateRating = (num: any) => {
  if (num < 0.25) {
    return (
      // 0 STAR RATING
      <>
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </>
    );
  } else if (num >= 0.25 && num < 0.75) {
    return (
      // 0.5 START RATING
      <>
        <FaRegStarHalfStroke />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </>
    );
  } else if (num >= 0.75 && num < 1.25) {
    return (
      // 1 STAR RATING
      <>
        <FaStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </>
    );
  } else if (num >= 1.25 && num < 1.75) {
    return (
      // 1.5 STAR RATING
      <>
        <FaStar />
        <FaRegStarHalfStroke />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </>
    );
  } else if (num >= 1.75 && num < 2.25) {
    return (
      // 2 STAR RATING
      <>
        <FaStar />
        <FaStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </>
    );
  } else if (num >= 2.25 && num < 2.75) {
    return (
      // 2.5 STAR RATING
      <>
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
        <FaRegStar />
        <FaRegStar />
      </>
    );
  } else if (num >= 2.75 && num < 3.25) {
    return (
      // 3 STAR RATING
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
        <FaRegStar />
      </>
    );
  } else if (num >= 3.25 && num < 3.75) {
    return (
      // 3.5 STAR RATING
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
        <FaRegStar />
      </>
    );
  } else if (num >= 3.75 && num < 4.25) {
    return (
      // 4 STAR RATING
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </>
    );
  } else if (num >= 4.25 && num < 4.75) {
    return (
      // 4.5 STAR RATING
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </>
    );
  } else if (num >= 4.75) {
    return (
      // 5 STAR RATING
      <>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </>
    );
  }
};

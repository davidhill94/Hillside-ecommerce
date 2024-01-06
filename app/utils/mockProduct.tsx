//Whole file to be deleited once database is set up - currently used to build product details page

import mockImageOne from "../../public/images/mockImageOne.jpg";
import mockImageTwo from "../../public/images/mockImageTwo.jpg";
import mockImageThree from "../../public/images/mockImageThree.jpg";
import mockReviewImage from "../../public/images/mockReviewImage.jpg";

export const mockProduct = {
    id: "2bb36y",
    name: "Artisanal Ceramic Bowl Set",
    description:
      "A set of four beautifully glazed ceramic bowls, handmade by local artisans using traditional techniques.",
    price: 34.5,
    category: "kitchenware",
    inStock: true,
    images: [
      {image: mockImageThree.src},
      {image: mockImageTwo.src},
      {image: mockImageOne.src},
    ],
    reviews: [
      {
        id: "84gbjw2",
        userId: "jdnjnvjr353",
        productId: "2bb36y",
        rating: 4,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageOne.src},
            {image: mockImageTwo.src},
            {image: mockImageThree.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
      {
        id: "84gbjw2",
        userId: "jdnjnvjr353",
        productId: "2bb36y",
        rating: 5,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageOne.src},
            {image: mockImageTwo.src},
            {image: mockImageThree.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  }
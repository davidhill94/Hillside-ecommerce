//Whole file to be deleited once database is set up - currently used to build product details page

import mockImageOne from "../../public/images/mockImageOne.jpg";
import mockImageTwo from "../../public/images/mockImageTwo.jpg";
import mockImageThree from "../../public/images/mockImageThree.jpg";
import mockReviewImage from "../../public/images/mockReviewImage.jpg";

export const mockProduct = {
  id: "2bb36y",
  name: "Artisanal Ceramic Bowl Set",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus, magna sit amet vehicula tincidunt, elit justo euismod diam, in auctor sapien nibh sed odio. In in velit neque. Sed ac malesuada sem. Nulla non ante eget sapien varius laoreet. Fusce porta odio et mauris dignissim molestie. Ut dictum bibendum odio, sed fermentum felis porta non. Suspendisse potenti. Etiam bibendum rhoncus tristique. Nunc eleifend pharetra erat sed gravida. Quisque tincidunt ut diam sed vulputate. Morbi ex risus, scelerisque sed varius ac, molestie nec enim. Vestibulum tellus sapien, laoreet a magna ac, interdum tincidunt orci. Vestibulum id urna molestie tellus tempus rhoncus. Etiam consectetur ante nec varius volutpat. Fusce pellentesque est faucibus mi elementum, sit amet tempor nunc sollicitudin. Pellentesque vehicula purus lorem, aliquet luctus urna pulvinar luctus.",
  price: 34.5,
  category: "kitchenware",
  inStock: true,
  images: [
    { image: mockImageOne.src, id: "84792nchjs" },
    { image: mockImageTwo.src, id: "84nd38nchjs" },
    { image: mockImageThree.src, id: "873bbjws" },
    { image: mockImageOne.src, id: "8734yux" },
    { image: mockImageTwo.src, id: "88hxj8rh" },
    { image: mockImageThree.src, id: "94hfjws" },
    { image: mockImageOne.src, id: "8ydhbhx" },
    { image: mockImageTwo.src, id: "jd38b8rh" },
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
          { image: mockReviewImage.src },
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
      comment: "Product was exactly as advertised, will definitely buy again",
      createdAt: "2023-05-25T15:50:43.558Z",
      user: {
        id: "jdnjnvjr353",
        name: "C Ronaldo",
        email: "ronaldo@gmail.com",
        emailVerification: null,
        images: [
          { image: mockReviewImage.src },
        ],
        hashedPassword: null,
        createdAt: "2023-05-25T15:50:43.558Z",
        updatedAt: "2023-05-25T15:50:43.558Z",
        role: "USER",
      },
    },
  ],
};

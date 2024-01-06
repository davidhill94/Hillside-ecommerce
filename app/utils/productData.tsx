import mockImageOne from "../../public/images/mockImageOne.jpg";
import mockImageTwo from "../../public/images/mockImageTwo.jpg";
import mockImageThree from "../../public/images/mockImageThree.jpg";
import mockReviewImage from "../../public/images/mockReviewImage.jpg";

//Mock Data for products until the database is built and fully functioning
export const productData = [
  {
    id: "77bjj41",
    name: "Handwoven Macrame Wall Hanging",
    description:
      "A stunning handwoven wall hanging made with natural cotton rope, perfect for adding texture to any space.",
    price: 45.99,
    category: "wall_decor",
    inStock: true,
    images: [
      {image: mockImageTwo.src},
      {image: mockImageOne.src},
      {image: mockImageThree.src},
    ],
    reviews: []
  },
  {
    id: "2bb36y",
    name: "Artisanal Ceramic Bowl Set",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus, magna sit amet vehicula tincidunt, elit justo euismod diam, in auctor sapien nibh sed odio. In in velit neque. Sed ac malesuada sem. Nulla non ante eget sapien varius laoreet. Fusce porta odio et mauris dignissim molestie. Ut dictum bibendum odio, sed fermentum felis porta non. Suspendisse potenti. Etiam bibendum rhoncus tristique. Nunc eleifend pharetra erat sed gravida. Quisque tincidunt ut diam sed vulputate. Morbi ex risus, scelerisque sed varius ac, molestie nec enim. Vestibulum tellus sapien, laoreet a magna ac, interdum tincidunt orci. Vestibulum id urna molestie tellus tempus rhoncus. Etiam consectetur ante nec varius volutpat. Fusce pellentesque est faucibus mi elementum, sit amet tempor nunc sollicitudin. Pellentesque vehicula purus lorem, aliquet luctus urna pulvinar luctus.",
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
  },
  {
    id: "300n436g",
    name: "Handcrafted Wooden Cutting Board",
    description:
      "An elegant wooden cutting board made from sustainable acacia wood, perfect for serving and food preparation.",
    price: 29.99,
    category: "kitchenware",
    inStock: false,
    images: [
      {image: mockImageTwo.src},
      {image: mockImageThree.src},
      {image: mockImageOne.src},
    ],
    reviews: [
      {
        id: "jcrn4939",
        userId: "jdnjnvjr353",
        productId: "300n436g",
        rating: 5,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageThree.src},
            {image: mockImageTwo.src},
            {image: mockImageOne.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "173bbnf",
    name: "Handwoven Macrame Wall Hanging",
    description:
      "A stunning handwoven wall hanging made with natural cotton rope, perfect for adding texture to any space.",
    price: 45.99,
    category: "wall_decor",
    inStock: true,
    images: [
      {image: mockImageOne.src},
      {image: mockImageTwo.src},
      {image: mockImageThree.src},
    ],
    reviews: []
  },
  {
    id: "2ndcc74",
    name: "Artisanal Ceramic Bowl Set",
    description:
      "A set of four beautifully glazed ceramic bowls, handmade by local artisans using traditional techniques.",
    price: 34.5,
    category: "kitchenware",
    inStock: true,
    images: [
      {image: mockImageTwo.src},
      {image: mockImageOne.src},
      {image: mockImageThree.src},
    ],
    reviews: []
  },
  {
    id: "384bjcm",
    name: "Handcrafted Wooden Cutting Board",
    description:
      "An elegant wooden cutting board made from sustainable acacia wood, perfect for serving and food preparation.",
    price: 29.99,
    category: "kitchenware",
    inStock: false,
    images: [
      {image: mockImageThree.src},
      {image: mockImageTwo.src},
      {image: mockImageOne.src},
    ],
    reviews: []
  },
  {
    id: "4jnc884n",
    name: "Handmade Leather Tote Bag Silk Infused with Aromatic Vibe",
    description:
      "A versatile leather tote bag handcrafted with premium leather, featuring multiple compartments for everyday use.",
    price: 89.95,
    category: "bags",
    inStock: true,
    images: [
      {image: mockImageOne.src},
      {image: mockImageTwo.src},
      {image: mockImageThree.src},
    ],
    reviews: [
      {
        id: "8fhnbu22",
        userId: "jdnjnvjr353",
        productId: "4jnc884n",
        rating: 4.5,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          image: mockReviewImage.src,
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "77bjj41",
    name: "Handwoven Macrame Wall Hanging",
    description:
      "A stunning handwoven wall hanging made with natural cotton rope, perfect for adding texture to any space.",
    price: 45.99,
    category: "wall_decor",
    inStock: true,
    images: [
      {image: mockImageTwo.src},
      {image: mockImageOne.src},
      {image: mockImageThree.src},
    ],
    reviews: []
  },
  {
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
    ],
  },
  {
    id: "300n436g",
    name: "Handcrafted Wooden Cutting Board",
    description:
      "An elegant wooden cutting board made from sustainable acacia wood, perfect for serving and food preparation.",
    price: 29.99,
    category: "kitchenware",
    inStock: false,
    images: [
      {image: mockImageTwo.src},
      {image: mockImageThree.src},
      {image: mockImageOne.src},
    ],
    reviews: [
      {
        id: "jcrn4939",
        userId: "jdnjnvjr353",
        productId: "300n436g",
        rating: 2.5,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageThree.src},
            {image: mockImageTwo.src},
            {image: mockImageOne.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "2ndcc74",
    name: "Artisanal Ceramic Bowl Set",
    description:
      "A set of four beautifully glazed ceramic bowls, handmade by local artisans using traditional techniques.",
    price: 34.5,
    category: "kitchenware",
    inStock: true,
    images: [
      {image: mockImageTwo.src},
      {image: mockImageOne.src},
      {image: mockImageThree.src},
    ],
    reviews: []
  },
  {
    id: "384bjcm",
    name: "Handcrafted Wooden Cutting Board",
    description:
      "An elegant wooden cutting board made from sustainable acacia wood, perfect for serving and food preparation.",
    price: 29.99,
    category: "kitchenware",
    inStock: false,
    images: [
      {image: mockImageThree.src},
      {image: mockImageTwo.src},
      {image: mockImageOne.src},
    ],
    reviews: []
  },
];

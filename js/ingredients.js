const allIngredients = [
  {
    name: "Chicken",
    image: './images/ingredients/chicken.jpg',
    // Free Photo | Napkin near chicken fillet. (2018, March 5). Freepik. https://www.freepik.com/free-photo/napkin-near-chicken-fillet_1891684.htm#fromView=search&page=1&position=2&uuid=716f3a88-71a2-4d3e-95e6-d64233642d79
  },
  {
    name: "Yogurt",
    image: './images/ingredients/yogurt.jpg',
    // Free Photo | White yogurt in jar on tablecloth. (2018, August 6). Freepik. https://www.freepik.com/free-photo/white-yogurt-jar-tablecloth_2741072.htm#fromView=search&page=1&position=4&uuid=e3a90a67-5748-47b6-8530-a4a7e7dad710
  },
  {
    name: "Tomato",
    image: './images/ingredients/tomato.jpg'
    // Free Photo | Red glossy tomatoes. (2020, July 27). Freepik. https://www.freepik.com/free-photo/red-glossy-tomatoes_9376333.htm#fromView=search&page=1&position=1&uuid=17d330bd-28c5-4ca6-aa4c-3ffd253a5fe6
  },
  {
    name: "Onion",
    image: './images/ingredients/onion.jpg'
    // Free Photo | Detail view of fresh onion slices. (2018, November 30). Freepik. https://www.freepik.com/free-photo/detail-view-fresh-onion-slices_3492607.htm#fromView=search&page=1&position=27&uuid=0fa033b6-25ff-4664-9226-87dd28dd76b9
  },
  {
    name: "Garlic",
    image: './images/ingredients/garlic.jpg'
    // Free Photo | Close-up of garlic bulb on black background. (2019, February 18). Freepik. https://www.freepik.com/free-photo/close-up-garlic-bulb-black-background_3951476.htm#fromView=search&page=1&position=24&uuid=66515cbc-20a6-4fa6-add9-9e3883b2b0f5
  },
  {
    name: "Ginger",
    image: './images/ingredients/ginger.jpg'
    // Free Photo | Ginger root in the supermarket closeup food background. (2023, February 21). Freepik. https://www.freepik.com/free-photo/ginger-root-supermarket-closeup-food-background_38369907.htm#fromView=search&page=2&position=32&uuid=d6747879-b9cf-41a4-a70c-8b14b30b31e4
  },
  {
    name: "Garam masala",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Chili powder",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Turmeric",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Cumin",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Coriander",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Cream",
    image: './images/ingredients/cream.jpg'
    // https://www.freepik.com/free-photo/swirl-made-glossy-wet-paint_1691433.htm#fromView=search&page=1&position=8&uuid=375c660b-fbf6-48c8-8913-e9edd55a9c98
  },
  {
    name: "Butter",
    image: './images/ingredients/butter.jpg'
    // https://www.freepik.com/free-photo/side-view-black-caviar-with-bread-butter-dark-background_7757555.htm#fromView=search&page=1&position=28&uuid=2ce7e736-2fd7-496e-a8e5-b5a8b8b86ff7
  },
  {
    name: "Salt",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Pepper",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Lemon juice",
    image: './images/ingredients/lemon.jpg'
    // Free Photo | Some lemon with its leaf on white textured background, side view. (2020, April 21). Freepik. https://www.freepik.com/free-photo/some-lemon-with-its-leaf-white-textured-background-side-view_7757625.htm#fromView=search&page=1&position=21&uuid=d0f36839-2d7d-4ec1-9e7a-f672c2cb7314
  },
  {
    name: "Cilantro",
    image: './images/ingredients/cilantro.jpg'
    // Free Photo | Close-up of a fresh parsley on white textured background. (2018, December 3). Freepik. https://www.freepik.com/free-photo/close-up-fresh-parsley-white-textured-background_3506904.htm#fromView=search&page=1&position=15&uuid=63d16e08-18e8-4189-81e8-3c4154e74429
  },
  {
    name: "Paneer",
    image: './images/ingredients/paneer.jpg'
    // Free Photo | Tasty blue cheese slice on chopping board. (2019, May 24). Freepik. https://www.freepik.com/free-photo/tasty-blue-cheese-slice-chopping-board_4577715.htm#fromView=search&page=1&position=13&uuid=65b42142-2de5-47e9-9d06-c258055646e9
  },
  {
    name: "Spinach",
    image: './images/ingredients/spinach.jpg'
    // Free Photo | Woman slashing spinach for seasonal salad top view. (2020, May 12). Freepik. https://www.freepik.com/free-photo/woman-slashing-spinach-seasonal-salad-top-view_8162152.htm#fromView=search&page=1&position=23&uuid=d50c882b-1936-4482-bf88-696fb49bf127
  },
  {
    name: "Green chili",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Cashews",
    image: './images/ingredients/cashews.jpg'
    // https://www.pexels.com/photo/a-bowl-with-cashews-standing-on-a-wooden-cutting-board-4499222/
  },
  {
    name: "Mustard seeds",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Coriander powder",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Chickpeas",
    image: './images/ingredients/chickpeas.jpg'
    // https://www.pexels.com/photo/round-grilled-food-106972/
  },
  {
    name: "Amchur powder (dried mango powder)",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  },
  {
    name: "Kasuri methi",
    image: './images/ingredients/garam-masala.jpg'
    // Free Photo | Plate with bowls with seasoning. (2020, July 13). Freepik. https://www.freepik.com/free-photo/plate-with-bowls-with-seasoning_9164130.htm#fromView=search&page=1&position=0&uuid=2251f64f-4803-4b5f-a2ec-89acca42cb70
  }
];




$(document).ready(function () {

  function preloadImages() {
    allIngredients.forEach(function (ingredient) {
      let img = new Image();
      img.src = ingredient.image
    })
  }
  preloadImages()


  allIngredients.forEach(({ name, image }) => {
    $(".ingredients-container").append(`<div class="ingredient-card">
        <img src="${image}" alt="${name}" />
        <p>${name}</p>
      </div>`)

    $('.ingredient-card').animate({
      opacity: 1,
      marginTop: "0"
    }, { duration: 1000, easing: 'swing' })
  })


})

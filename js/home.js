const RecipesData = [
  {
    id: "dish1",
    title: "Chicken Tikka Masala",
    imageSrc: "./images/chicken-tikka.jpg",
    // Free Photo | Top view kharcho with green pepper and tomato and greens in dark plate. (2020, April 18).Freepik.https://www.freepik.com/free-photo/top-view-kharcho-with-green-pepper-tomato-greens-dark-plate_7729876.htm#fromView=search&page=1&position=35&uuid=5a58ab6a-6ac8-4a22-9678-4d624215af51
    width: 300,
    height: 300,
    dialogId: "dialog1",
    ingredients: [
      "Chicken",
      "Yogurt",
      "Tomato",
      "Onion",
      "Garlic",
      "Ginger",
      "Garam masala",
      "Chili powder",
      "Turmeric",
      "Cumin",
      "Coriander",
      "Cream",
      "Butter",
      "Salt",
      "Pepper",
      "Lemon juice",
      "Cilantro"
    ]
    ,
    dialogContent: "The flavours of ancient spices poured into chicken!"
  },
  {
    id: "dish2",
    title: "Palak Paneer",
    imageSrc: "./images/palak-paneer.jpg",
    // Free Photo | Flat lay japanese food in bowls arrangement. (2020, December 24). Freepik. https://www.freepik.com/free-photo/flat-lay-japanese-food-bowls-arrangement_11827353.htm#fromView=search&page=1&position=17&uuid=10241b70-ca58-438d-bfc9-b644e2b575dd
    width: 300,
    height: 300,
    dialogId: "dialog2",
    ingredients: [
      "Paneer",
      "Spinach",
      "Onion",
      "Tomato",
      "Garlic",
      "Ginger",
      "Green chili",
      "Garam masala",
      "Turmeric",
      "Cumin",
      "Coriander",
      "Cream",
      "Butter",
      "Salt",
      "Pepper"
    ]
    ,
    dialogContent: "Popular Indian dish made with spinach and Paneer! Melts in your mouth!"
  },
  {
    id: "dish3",
    title: "Dal Tadka",
    imageSrc: "./images/dal-tadka.jpg",
    // Free Photo | Vegetable soup with carrot and tomato slices. (2020, March 19). Freepik. https://www.freepik.com/free-photo/vegetable-soup-with-carrot-tomato-slices_7303406.htm#fromView=search&page=1&position=4&uuid=4cdd2435-3d0e-425d-adda-fad7d4568be6
    width: 300,
    height: 300,
    dialogId: "dialog3",
    ingredients: [
      "Lentils",
      "Onion",
      "Tomato",
      "Garlic",
      "Ginger",
      "Green chili",
      "Cumin seeds",
      "Mustard seeds",
      "Turmeric",
      "Chili powder",
      "Coriander powder",
      "Garam masala",
      "Butter",
      "Salt",
      "Pepper",
      "Cilantro"
    ]
    ,
    dialogContent: "Dal Tadka is the go to comfort food for any indian. Made out of lentils but with a TADKA!"
  },
  {
    id: "dish4",
    title: "Chole",
    imageSrc: "./images/chole.jpg",
    width: 300,
    height: 300,
    dialogId: "dialog4",
    // Free Photo | Delicious cooked beans in a bowl. (2020, November 11). Freepik. https://www.freepik.com/free-photo/delicious-cooked-beans-bowl_11037893.htm#fromView=search&page=1&position=5&uuid=8bd1c826-7692-4df3-befb-274479c770e3
    ingredients: [
      "Chickpeas",
      "Onion",
      "Tomato",
      "Garlic",
      "Ginger",
      "Green chili",
      "Cumin seeds",
      "Coriander seeds",
      "Turmeric",
      "Chili powder",
      "Garam masala",
      "Amchur powder (dried mango powder)",
      "Salt",
      "Pepper",
      "Cilantro"
    ],
    dialogContent: "A flavory delicious protein rich sabzi for your tummy! Specially made with Chickpeas and Indian Spices!"
  },
  {
    id: "dish5",
    title: "Shahi Paneer",
    imageSrc: "./images/shahi-paneer.jpg",
    // Free Photo | Flat lay indian food arrangement. (2020, October 30).Freepik.https://www.freepik.com/free-photo/flat-lay-indian-food-arrangement_10869763.htm#fromView=search&page=1&position=4&uuid=56e3f16e-c85b-4bab-9b37-93315d6730f1
    width: 300,
    height: 300,
    dialogId: "dialog5",
    ingredients: [
      "Paneer",
      "Onion",
      "Tomato",
      "Cashews",
      "Garlic",
      "Ginger",
      "Green chili",
      "Cream",
      "Butter",
      "Cumin",
      "Coriander",
      "Garam masala",
      "Turmeric",
      "Kasuri methi",
      "Salt",
      "Pepper",
      "Cilantro"
    ],
    dialogContent: "The buttery flavours of Shahi Paneer comes with rich Milk cream! Sweet on the tongue but yet delicious!"
  }
];

const allIngredients = ["Chicken", "Yogurt", "Tomato", "Onion", "Garlic", "Ginger", "Garam masala",
  "Chili powder", "Turmeric", "Cumin", "Coriander", "Cream", "Butter", "Salt",
  "Pepper", "Lemon juice", "Cilantro", "Paneer", "Spinach", "Green chili",
  "Cashews", "Mustard seeds", "Coriander powder", "Chickpeas",
  "Amchur powder (dried mango powder)", "Kasuri methi"
]



$(document).ready(() => {
  function generateHTML(searchTerm) {

    const filteredData = RecipesData.filter(item => {
      return item.ingredients.map(ign => ign.toLowerCase()).includes(searchTerm.toLowerCase())
    });

    const htmlContent = filteredData.map(item => `
      <section id="${item.id}">
        <h1>${item.title}</h1>
        <a href="#" id="${item.id}">
        <img src="${item.imageSrc}" 
          alt="${item.title}" 
          width="${item.width}" 
          height="${item.height}"
          />
      </a>
        <div id="${item.dialogId}" title="${item.title}" style="display: none;" >
          <p>${item.dialogContent}</p>
          <p>Check out more <a href="../pages/recipes.html#${item.id}">here</a></p>
        </div>
      </section>
    `).join('');

    $('#searchResults').html(htmlContent);

    filteredData.forEach((item) => {
      $(`#${item.id}`).click((e) => {
        e.preventDefault()
        $(`#${item.dialogId}`).dialog({ modal: true })
      });
    });
  }

  $("#search").on('input', function () {
    const searchTerm = $(this).val();
    generateHTML(searchTerm);
  });

  $("#search").autocomplete({
    source: allIngredients,
    select: (event, ui) => {
      const searchTerm = ui.item.value;
      generateHTML(searchTerm)
    }
  });

  RecipesData.forEach((item) => {
    $(`#${item.id}`).click(() =>
      $(`#${item.dialogId}`).dialog({ modal: true })
    );
  });

});



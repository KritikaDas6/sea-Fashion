const defaultFashionItems = [
  {
    name: "Blue Low-waisted Jeans",
    category: "Bottoms",
    image: "images/Blue.png",
    lastWorn: "",
    notes: "",
    wearCount: 0,
    woreToday: false
  },
  {
    name: "Brown Side-parted Pants",
    category: "Bottoms",
    image: "images/brown_pants.png",
    lastWorn: "",
    notes: "",
    wearCount: 0,
    woreToday: false
  },
  {
    name: "Skirt",
    category: "Bottoms",
    image: "images/skirt.png",
    lastWorn: "",
    notes: "",
    wearCount: 0,
    woreToday: false
  },
  {
    name: "Green Peackock Shirt",
    category: "Tops",
    image: "images/greenTop.png",
    lastWorn: "",
    notes: "",
    wearCount: 0,
    woreToday: false
  },
  {
    name: "Denim Embroidered Shirt",
    category: "Tops",
    image: "images/Shirt_denim.png",
    lastWorn: "",
    notes: "",
    wearCount: 0,
    woreToday: false
  },
  {
    name: "Light Shirt",
    category: "Tops",
    image: "images/light_shirt.png",
    lastWorn: "",
    notes: "",
    wearCount: 0,
    woreToday: false
  },
  {
    name: "Bleach Shirt",
    category: "Tops",
    image: "images/bleach_shirt.png",
    lastWorn: "",
    notes: "",
    wearCount: 4,
    woreToday: false
  },
  {
    name: "Bangle",
    category: "Accessories",
    image: "images/Bangle.png",
    lastWorn: "",
    notes: "",
    wearCount: 0,
    woreToday: false
  },
  {
    name: "Shoes",
    category: "Accessories",
    image: "images/Shoes.png",
    lastWorn: "",
    notes: "",
    wearCount: 2,
    woreToday: false
  },
  {
    name: "Watch",
    category: "Accessories",
    image: "images/watch.png",
    lastWorn: "",
    notes: "",
    wearCount: 4,
    woreToday: false
  }
];

let fashionItems =
  JSON.parse(localStorage.getItem("fashionItems")) ||
  defaultFashionItems;

let currentItem = null;

function saveItems() {
  localStorage.setItem(
    "fashionItems",
    JSON.stringify(fashionItems)
  );
}

function showCards() {
  const cardContainer =
    document.getElementById("card-container");

  cardContainer.innerHTML = "";

  const templateCard =
    document.querySelector(".card");

  for (let i = 0; i < fashionItems.length; i++) {
    const item = fashionItems[i];

    const nextCard =  templateCard.cloneNode(true);

    editCardContent(nextCard, item);

    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, item) {
  card.style.display = "block";

  card.querySelector("h2").textContent =
    item.name;

  card.querySelector("img").src =
    item.image;

  card.querySelector("img").alt =
    item.name;

  card.querySelector("ul").innerHTML = `
    <li><strong>Category:</strong> ${item.category}</li>
  `;
  card.addEventListener("click", function () {
    openPopup(item);
  });
}

function showTops() {
  const allCards =
    document.getElementById("card-container");

  allCards.innerHTML = "";

  const templateCard =    document.querySelector(".card");

  for (let i = 0; i < fashionItems.length; i++) {
    if (fashionItems[i].category === "Tops") {
      const topCard =
        templateCard.cloneNode(true);

      editCardContent( topCard, fashionItems[i]);
      allCards.appendChild(topCard);
    }
  }
}

 

function showBottoms() {
  const allCards = document.getElementById("card-container");

  allCards.innerHTML = "";

  const templateCard = document.querySelector(".card");

  for (let i = 0; i < fashionItems.length; i++) {
    if (
      fashionItems[i].category === "Bottoms"
    ) {
      const bottomCard =
       templateCard.cloneNode(true);

      editCardContent(
        bottomCard,
        fashionItems[i]
      );

      allCards.appendChild(bottomCard);
    }
  }
}

function showAccessories() {
  const allCards =
    document.getElementById("card-container");

  allCards.innerHTML = "";

  const templateCard =
    document.querySelector(".card");

  for (let i = 0; i < fashionItems.length; i++) {
    if (
      fashionItems[i].category === "Accessories"
    ) {
      const accessoryCard =
        templateCard.cloneNode(true);

      editCardContent(
        accessoryCard,
        fashionItems[i]
      );

      allCards.appendChild(accessoryCard);
    }
  }
}

function searchByName() {
  const input =
    document
      .getElementById("searchInput")
      .value.toLowerCase()
      .trim();

  const allCards =
    document.getElementById("card-container");

  const noMatch =
    document.getElementById("noName");

  const templateCard =
    document.querySelector(".card");

  allCards.innerHTML = "";

 
  let foundMatch = false;

  for (let i = 0; i < fashionItems.length; i++) {
    const itemName = fashionItems[i].name.toLowerCase();

    let match = true;
    for (let j = 0; j < input.length; j++) {
      if (itemName[j] !== input[j]) {
        match = false;
        break;
      }
    }
    if (match == true && !itemName.includes(input) == false) {
      const matchCard =
        templateCard.cloneNode(true);

      editCardContent( matchCard,fashionItems[i]);

      allCards.appendChild(matchCard);

      foundMatch = true;
    }
  }

  if (!foundMatch) {
    noMatch.style.display = "block";
  } else {
    noMatch.style.display = "none";
  }
}


// my code to reverseSearch: function to add a second search bar to allow users to exclude letters
 function reverseSearch() {
const input = document.getElementById("reverseSearchInput").value.toLowerCase().trim();

const allCards =
  document.getElementById("card-container");

const templateCard =
  document.querySelector(".card");

allCards.innerHTML = "";

  for (let i = 0; i < fashionItems.length; i++) {
    const itemName = fashionItems[i].name.toLowerCase();

    if (!itemName.includes(input)) {
    const card = templateCard.cloneNode(true);
    editCardContent( card,fashionItems[i]);
    allCards.appendChild(card);
    }
    }
  }
  
 

// end of jackie code 

//function filterOut(){
//   // Retrieve the text from the filterInput search bar 
// const filterText = document.getElementById('filterInput').value.toLowerCase()
//   // rest of your function below: 
  // const arr = [];
  

// //new array -> display cards
   //for(let i =0; i< fashionItems.length(); i++){ //[_,_,_]
     //if( !((fashionItems[i].names).includes(filterText))){

       // arr.push(fashionItems[i]); 
     //}

  //}
 //}
  
// 
//input of search -> check that with a part of the .name of
 
  // for loop: compare it to go through array names.inlcudes("input")

  //.includes(//string)
  



function hideNoMatchMessage() {
  const noMatch =
    document.getElementById("noName");

  if (noMatch) {
    noMatch.style.display = "none";
  }
}

function quoteAlert() {
  alert(
    "Fashion is the armor to survive the reality of everyday life. - Bill Cunningham"
  );
}

function removeLastCard() {
  fashionItems.pop();

  saveItems();

  showCards();
}

function randomizeOutfit() {
  const tops = [];
  const bottoms = [];

  for (let i = 0; i < fashionItems.length; i++) {
    if (fashionItems[i].category === "Tops") {
      tops.push(fashionItems[i]);
    }

    if (
      fashionItems[i].category ===
      "Bottoms"
    ) {
      bottoms.push(fashionItems[i]);
    }
  }

  const randomTop =
    tops[
      Math.floor(
        Math.random() * tops.length
      )
    ];

  const randomBottom =
    bottoms[
      Math.floor(
        Math.random() * bottoms.length
      )
    ];

  document.getElementById("topImage").src =
    randomTop.image;

  document.getElementById("topImage").alt =
    randomTop.name;

  document.getElementById(
    "bottomImage"
  ).src = randomBottom.image;

  document.getElementById(
    "bottomImage"
  ).alt = randomBottom.name;

  document.getElementById(
    "topName"
  ).textContent = randomTop.name;

  document.getElementById(
    "bottomName"
  ).textContent = randomBottom.name;
}

function openPopup(item) {
  currentItem = item;

  document.getElementById(
    "popupTitle"
  ).textContent = item.name;

  document.getElementById(
    "popupImage"
  ).src = item.image;

  document.getElementById(
    "popupImage"
  ).alt = item.name;

  document.getElementById(
    "lastWornInput"
  ).value = item.lastWorn;

  document.getElementById(
    "notesInput"
  ).value = item.notes;

  document.getElementById(
    "wearCountText"
  ).textContent =
    "Times worn: " + item.wearCount;

  document.getElementById(
    "popupOverlay"
  ).style.display = "flex";
}

function woreToday() {
  if (!currentItem) {
    return;
  }

  const today =
    new Date() .toISOString().split("T")[0];

  currentItem.lastWorn = today;

  currentItem.wearCount = currentItem.wearCount + 1;

  document.getElementById( "lastWornInput").value = today;

  document.getElementById(
    "wearCountText"
  ).textContent =
    "Times worn: " +
    currentItem.wearCount;

  saveItems();
}

function closePopup() {
  document.getElementById(
    "popupOverlay"
  ).style.display = "none";
}

function savePopupChanges() {
  if (!currentItem) {
    return;
  }

  currentItem.lastWorn =
    document.getElementById(
      "lastWornInput"
    ).value;

  currentItem.notes =
    document.getElementById(
      "notesInput"
    ).value;

  saveItems();

  closePopup();
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    showCards();

    randomizeOutfit();

    document.getElementById("allButton")
        .addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          hideNoMatchMessage();
          showCards();
        }
      );

    document
      .getElementById("topsButton")
      .addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          hideNoMatchMessage();
          showTops();
        }
      );

    document
      .getElementById("bottomsButton")
      .addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          hideNoMatchMessage();
          showBottoms();
        }
      );

    document.getElementById(
        "accessoriesButton"
      )
      .addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          hideNoMatchMessage();
          showAccessories();
        }
      );



    document
      .getElementById(
        "searchButton"
      )
      .addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          hideNoMatchMessage();
          searchByName();
        }
      );

    document
      .getElementById(
        "randomOutfitButton"
      )
      .addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          randomizeOutfit();
        }
      );

    document
      .getElementById(
        "closePopupButton"
      )
      .addEventListener(
        "click",
        function () {
          closePopup();
        }
      );

    document
      .getElementById(
        "woreTodayButton"
      )
      .addEventListener(
        "click",
        function () {
          woreToday();
        }
      );

    document
      .getElementById(
        "savePopupButton"
      )
      .addEventListener(
        "click",
        function () {
          savePopupChanges();
        }
      );
// jackie code 
      document
      .getElementById("reverseSearchButton")
      .addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          hideNoMatchMessage();
          reverseSearch();
        }
      );
      // end of jackie code 

    document
      .getElementById(
        "popupOverlay"
      )
      .addEventListener(
        "click",
        function (e) {
          if (
            e.target ===
            document.getElementById(
              "popupOverlay"
            )
          ) {
            closePopup();
          }
        }
      );
  }
);
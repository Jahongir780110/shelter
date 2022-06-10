function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.slice(8 - petsPerPage);
}

function render() {
  const petsCards = document.querySelectorAll(".pets__cards .card");
  for (let i = 0; i < petsCards.length; i++) {
    const card = petsCards[i];
    card
      .querySelector(".card-img img")
      .setAttribute("src", pages[page - 1][i].imgUrl);
    card
      .querySelector(".card-img img")
      .setAttribute("alt", pages[page - 1][i].alt);
    card.querySelector(".card-title").innerText = pages[page - 1][i].name;
  }
  if (page === 1) {
    leftLong.setAttribute("disabled", "disabled");
    left.setAttribute("disabled", "disabled");
    rightLong.removeAttribute("disabled");
    right.removeAttribute("disabled");
  } else if (page === 48 / petsPerPage) {
    rightLong.setAttribute("disabled", "disabled");
    right.setAttribute("disabled", "disabled");
    leftLong.removeAttribute("disabled");
    left.removeAttribute("disabled");
  } else {
    leftLong.removeAttribute("disabled");
    left.removeAttribute("disabled");
    rightLong.removeAttribute("disabled");
    right.removeAttribute("disabled");
  }
  middle.innerText = page;
}

let page = 1;
let petsPerPage = 8;
let moda = "desktop";
const petsData = [
  {
    id: "1",
    name: "Katrine",
    type: "Cat - British Shorthair",
    info: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: "panleukopenia",
    diseases: "none",
    parasites: "none",
    imgUrl: "./img/pets-katrine.png",
    alt: "cat image",
  },
  {
    id: "2",
    name: "Jennifer",
    type: "Dog - Labrador",
    info: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: "none",
    diseases: "none",
    parasites: "none",
    imgUrl: "./img/pets-jennifer.png",
    alt: "puppy image",
  },
  {
    id: "3",
    name: "Woody",
    type: "Dog - Golden Retriever",
    info: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: "adenovirus, distemper",
    diseases: "right back leg mobility reduced",
    parasites: "none",
    imgUrl: "./img/pets-woody.png",
    alt: "dog image",
  },
  {
    id: "4",
    name: "Sophia",
    type: "Dog - Jack Russell Terrier",
    info: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "1 month",
    inoculations: "parvovirus",
    diseases: "none",
    parasites: "none",
    imgUrl: "./img/pets-sophia.png",
    alt: "puppy image",
  },
  {
    id: "5",
    name: "Timmy",
    type: "Cat - British Shorthair",
    info: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: "calicivirus, viral rhinotracheitis",
    diseases: "calicivirus,viral rhinotracheitis",
    parasites: "none",
    imgUrl: "./img/pets-timmy.png",
    alt: "cat image",
  },
  {
    id: "6",
    name: "Charly",
    type: "Dog - Jack Russell Terrier",
    info: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: "bordetella bronchiseptica, leptospirosis",
    diseases: "deafness, blindness",
    parasites: "lice, fleas",
    imgUrl: "./img/pets-charly.png",
    alt: "dog image",
  },
  {
    id: "7",
    name: "Scarlett",
    type: "Dog - Jack Russell Terrier",
    info: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: "parainfluenza",
    diseases: "none",
    parasites: "none",
    imgUrl: "./img/pets-scarlett.png",
    alt: "puppy image",
  },
  {
    id: "8",
    name: "Freddie",
    type: "Cat - British Shorthair",
    info: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: "parainfluenza",
    diseases: "rabies",
    parasites: "none",
    imgUrl: "./img/pets-freddie.png",
    alt: "cat image",
  },
];
const pages = [petsData.slice(0, petsPerPage)];

const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".modal__backdrop");
const modalClose = document.querySelector(".modal__close");

const cardItems = document.querySelectorAll(".pets__cards .card");

const menuBtnMain = document.querySelector(".header__btn[data-main]");
const menuBtnSidebar = document.querySelector(".header__btn[data-sidebar]");
const headerSidebar = document.querySelector(".header__sidebar");
const headerLogo = document.querySelector(".header__logo[data-main]");
const sidebarNavItems = document.querySelectorAll(".header__sidebar-navbar li");

const paginationButtons = document.querySelectorAll(".pets__navigation button");
const leftLong = paginationButtons[0];
const left = paginationButtons[1];
const middle = paginationButtons[2];
const right = paginationButtons[3];
const rightLong = paginationButtons[4];
const oldWidth = window.innerWidth;
const width = window.innerWidth;

if (width < 768) {
  petsPerPage = 3;
  const removingCards = document.querySelectorAll(".card.mobile");
  removingCards.forEach((card) => {
    card.remove();
  });
} else if (width < 1280) {
  petsPerPage = 6;
  const removingCards = document.querySelectorAll(".card.tablet");
  removingCards.forEach((card) => {
    card.remove();
  });
}

for (let i = 0; i < 48 / petsPerPage; i++) {
  const shuffledArray = shuffleArray([...petsData]);
  pages.push(shuffledArray);
}

cardItems.forEach((cardItem, index) => {
  cardItem.addEventListener("click", () => {
    const id = index;
    const petData = pages[page - 1][id];

    modal.querySelector(".modal__heading").innerText = petData.name;
    modal.querySelector(".modal__subheading").innerText = petData.type;
    modal
      .querySelector(".modal__image img")
      .setAttribute("src", petData.imgUrl);
    modal.querySelector(".modal__image img").setAttribute("alt", petData.alt);
    modal.querySelector(".modal__text").innerText = petData.info;
    modal.querySelector(".pet-age").innerText = petData.age;
    modal.querySelector(".pet-inoculations").innerText = petData.inoculations;
    modal.querySelector(".pet-diseases").innerText = petData.diseases;
    modal.querySelector(".pet-parasites").innerText = petData.parasites;

    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });
});

backdrop.addEventListener("click", () => {
  modal.classList.add("hide");
  document.body.style.overflow = "visible";
});

modalClose.addEventListener("click", () => {
  modal.classList.add("hide");
  document.body.style.overflow = "visible";
});

menuBtnMain.addEventListener("click", () => {
  headerSidebar.classList.remove("hidden");
  headerLogo.style.visibility = "hidden";
});

menuBtnSidebar.addEventListener("click", () => {
  headerSidebar.classList.add("hidden");
  headerLogo.style.visibility = "visible";
});

sidebarNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerSidebar.classList.add("hidden");
    headerLogo.style.visibility = "visible";
  });
});

headerSidebar.querySelector(".backdrop").addEventListener("click", () => {
  headerSidebar.classList.add("hidden");
  headerLogo.style.visibility = "visible";
  document.body.style.overflow = "visible";
});

right.addEventListener("click", () => {
  if (page < pages.length) {
    page++;
    render();
  }
});

left.addEventListener("click", () => {
  if (page > 1) {
    page--;
    render();
  }
});

leftLong.addEventListener("click", () => {
  page = 1;
  render();
});

rightLong.addEventListener("click", () => {
  page = 48 / petsPerPage;
  render();
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  if (oldWidth >= 1280 && width < 1280 && width >= 768) {
    document.location.reload();
  } else if (
    oldWidth >= 768 &&
    oldWidth < 1280 &&
    width < 768 &&
    width >= 320
  ) {
    document.location.reload();
  } else if (
    oldWidth < 768 &&
    oldWidth >= 320 &&
    width >= 768 &&
    width < 1280
  ) {
    document.location.reload();
  } else if (oldWidth >= 768 && oldWidth < 1280 && width >= 1280) {
    document.location.reload();
  }
});

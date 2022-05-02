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
let sliderStart = 0;

const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".modal__backdrop");
const modalClose = document.querySelector(".modal__close");
const sliderItems = document.querySelectorAll(".pets__slider .card");
const sliderBtnLeft = document.querySelector(".pets__slider-btnLeft");
const sliderBtnRight = document.querySelector(".pets__slider-btnRight");

function changeSlider() {
  sliderItems.forEach((sliderItem, index) => {
    const id = (sliderStart + index) % petsData.length;
    const petData = petsData[id];

    sliderItem.dataset.id = petData.id;
    sliderItem
      .querySelector(".card-img img")
      .setAttribute("src", petData.imgUrl);
    sliderItem.querySelector(".card-img img").setAttribute("alt", petData.alt);
    sliderItem.querySelector(".card-title").innerText = petData.name;
  });
}

sliderItems.forEach((sliderItem, index) => {
  sliderItem.addEventListener("click", () => {
    const id = (sliderStart + index) % petsData.length;
    const petData = petsData[id];

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

sliderBtnLeft.addEventListener("click", () => {
  const x = sliderStart - 3;
  if (x < 0) {
    sliderStart = petsData.length + x;
  } else {
    sliderStart = x;
  }
  changeSlider();
});

sliderBtnRight.addEventListener("click", () => {
  sliderStart += 3;
  changeSlider();
});

backdrop.addEventListener("click", () => {
  modal.classList.add("hide");
  document.body.style.overflow = "visible";
});

modalClose.addEventListener("click", () => {
  modal.classList.add("hide");
  document.body.style.overflow = "visible";
});

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
];

const pets = document.querySelector("#pets").querySelectorAll(".card");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".modal__backdrop");
const modalClose = document.querySelector(".modal__close");

pets.forEach((p) => {
  p.addEventListener("click", () => {
    const id = p.dataset.id;
    const petData = petsData.find((d) => d.id === id);
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
  });
});

backdrop.addEventListener("click", () => {
  modal.classList.add("hide");
});

modalClose.addEventListener("click", () => {
  modal.classList.add("hide");
});

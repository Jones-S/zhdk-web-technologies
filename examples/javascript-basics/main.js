console.log("Hello Universe!");

const user = {
  name: "Jonas",
  "likes birds": true,
  likesLizards: false,
};

user.likesDragons = false;
user["likes Zebras"] = false;

console.log("user.likesLizards: ", user.likesLizards);
console.log("user: ", user);

const container = document.querySelectorAll(".container");
console.log("container: ", container);
console.log("container[0]: ", container[0]);

const firstContainer = document.querySelector('[data-js="container"]');
console.log("container: ", firstContainer);

const child = firstContainer.querySelectorAll(".child");
console.log("child: ", child);

firstContainer.addEventListener("click", (event) => {
  console.log("event: ", event);
  console.log("event.target: ", event.target);
});

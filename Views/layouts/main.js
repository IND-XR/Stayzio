// Variables

const likeBtn = document.querySelector('.heart-icon');
const numberOfLikesElement = document.querySelector('.number-of-likes');




// get the value from the HTML element
let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);

let isLiked = false;

// Functions

const likeClick = () => {

// if the like button hasn't been clicked

  if (!isLiked) {
    likeBtn.classList.add('isLiked');
    numberOfLikes++;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  }
// if the like button has been clicked
 else {
    likeBtn.classList.remove('isLiked');
    numberOfLikes--;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  }
};

// Event Listeners

likeBtn.addEventListener('click', likeClick);
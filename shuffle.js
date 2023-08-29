<script>
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.addEventListener("DOMContentLoaded", function () {
  // Check if the shuffled order is already stored in local storage
  var shuffledOrder = localStorage.getItem("shuffledOrder");

  if (!shuffledOrder) {
    var randomCards = document.querySelectorAll(".random-card");
    var shuffledCards = shuffleArray(Array.from(randomCards));
    
    var container = document.createElement("div");
    shuffledCards.forEach(function (card) {
      container.appendChild(card.cloneNode(true));
    });
    
    var newShuffledOrder = container.innerHTML;
    localStorage.setItem("shuffledOrder", newShuffledOrder);
    
    var existingCards = document.querySelectorAll(".random-card");
    shuffledCards.forEach(function (shuffledCard, index) {
      existingCards[index].replaceWith(shuffledCard.cloneNode(true));
    });
  } else {
    var shuffledContainer = document.createElement("div");
    shuffledContainer.innerHTML = shuffledOrder;
    var shuffledCards = shuffledContainer.querySelectorAll(".random-card");
    var existingCards = document.querySelectorAll(".random-card");
    
    existingCards.forEach(function (existingCard, index) {
      existingCard.replaceWith(shuffledCards[index].cloneNode(true));
    });
  }
});
</script>

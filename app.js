/*var num = Math.floor(Math.random() * 4) + 1;

$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: `Images/Gpay_Card ${num}.jpg`, // Background (image path or hex color).
  fg: `Images/front.jpg`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});
*/


// Check if the scratch card has been revealed before
let isRevealed = localStorage.getItem("isRevealed") === "true";

$(document).ready(function () {
  if (!isRevealed) {
    // The following code initializes the scratch card with the shuffling images and reveal logic
    const numImages = 4; // Number of available images
    const randomImageIndex = Math.floor(Math.random() * numImages) + 1;

    $("#card").wScratchPad({
      size: 100, // The size of the brush/scratch.
      bg: `Images/Gpay_Card ${randomImageIndex}.jpg`, // Background image path.
      fg: `Images/front.jpg`, // Foreground image path.
      cursor: "pointer", // Set cursor.
      scratchUp: function () {
        if (!isRevealed) {
          isRevealed = true;
          // Save the revealed state in local storage
          localStorage.setItem("isRevealed", "true");
          // Add any action you want to perform when the scratch card is revealed
          alert("Scratch card revealed!");
        }
      },
    });
  } else {
    // If the card has been revealed, you can show a message or perform other actions
    alert("Scratch card already revealed!");
  }
});
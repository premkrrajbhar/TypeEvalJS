let enterDataType = document.getElementById("enterDataType");
let checkDataType = document.getElementById("checkDataType");
let displayDataType = document.getElementById("displayDataType");
let clearBtn = document.getElementById("clearBtn");

checkDataType.addEventListener("click", () => {
  let enterData = enterDataType.value;

  if (enterData == "") {
    alert("Please enter a data");
    return;
  }

  if (!isNaN(enterData) && enterData.trim() !== "") {
    displayDataType.textContent = "Your Data is: Number";
  } else if (enterData === "true" || enterData === "false") {
    displayDataType.textContent = "Your Data is: Boolean";
  } else if (enterData === "null") {
    displayDataType.textContent = "Your Data is: Null";
  } else if (typeof enterData === "string") {
    displayDataType.textContent = "Your Data is: String";
  } else {
    displayDataType.textContent = "Your Data is: Invalid or Unsupported Type";
  }
});

clearBtn.addEventListener("click", () => {
  enterDataType.value = "";
  displayDataType.textContent = "";
});

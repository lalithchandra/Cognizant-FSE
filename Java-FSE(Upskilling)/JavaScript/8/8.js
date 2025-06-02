function filterByCategory(category) {
  // logic here
  console.log("Filter by:", category);
}

function searchByName(event) {
  if (event.key === "Enter") {
    const keyword = event.target.value;
    console.log("Search:", keyword);
  }
}

document.querySelectorAll(".registerBtn").forEach(btn =>
  btn.onclick = () => {
    alert("Registered!");
  }
);

const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);


container.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.backgroundColor = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    //   event.target.style.transition = 'background-color 1s';
    }, 500);
  }, false);

  const dimenstions = document.getElementById("dimensions")
dimenstions.addEventListener("click", function(event){
    alert("sup");
}); 
let container = document.getElementById("container");
const body = document.getElementById("body");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      //cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 32);


container.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //event.target.style.backgroundColor = "#" + randomColor;
    event.target.style.backgroundColor = 'orange';
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    //   event.target.style.transition = 'background-color 1s';
    }, 150);
  }, false);

function dimensions() {
    let dimensions = prompt("Enter the dimensions", "16x16");
    arr = dimensions.split('x')
    if (arr[0] < 100|| arr[1] < 100){
    const grid_items = document.getElementsByClassName("grid-item");
    for (var i = grid_items.length - 1; i >= 0; --i) {
        grid_items[i].remove();
      }
    
    if (dimensions != null) {
        
        makeRows(parseInt(arr[0]),parseInt(arr[1]))
    }
    }
    else{
        
    }
}
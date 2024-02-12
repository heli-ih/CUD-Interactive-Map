window.addEventListener("load", () => {
  let image = document.getElementById("image");
  image.parentNode.removeChild(image);
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // drawMap();

  class myLine {
    constructor(x, y, dx, dy) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
    }
  }

  function drawLine(myLine, ctx) {
    ctx.beginPath();

    // Create the gradient for the shiny red line
    var gradient = ctx.createLinearGradient(
      myLine.x,
      myLine.y,
      myLine.dx,
      myLine.dy
    );
    gradient.addColorStop(0, "#ff0000");
    gradient.addColorStop(0.5, "#ff4444");
    gradient.addColorStop(1, "#ff0000");

    // Set the stroke style to the gradient and increase the line width for the black border
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 20;

    // Draw the line with the shiny red color
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 10;

    // Draw the arrow
    // ctx.beginPath();
    // ctx.moveTo(myLine.dx - 20, myLine.dy - 20); // move the drawing point to the position where the arrow should start
    // ctx.lineTo(myLine.dx - 35, myLine.dy - 35); // draw the first arrow line
    // ctx.lineTo(myLine.dx - 35, myLine.dy - 15); // draw the second arrow line
    // ctx.closePath();
    // ctx.fillStyle = "black"; // fill the arrow with black color
    // ctx.fill();

    // Add the black shadow
    //ctx.shadowColor = "black";
    //ctx.shadowBlur = 5;
    //ctx.shadowOffsetX = 0;
    //ctx.shadowOffsetY = 0;

    // Draw the line with a black border
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctx.moveTo(myLine.x, myLine.y);
    ctx.lineTo(myLine.dx, myLine.dy);
    ctx.stroke();
  }

  function drawArrow(x, y, angle, ctx) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(
      x - 35 * Math.cos(angle - Math.PI / 6),
      y - 35 * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      x - 35 * Math.cos(angle + Math.PI / 6),
      y - 35 * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();
  }

  function drawStartPoint(x, y, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  }

  function drawEndPoint(x, y, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
  }

  function clearCanvas() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  }

  function parsePath(string) {
    const ctx = canvas.getContext("2d");

    for (let i = 0; i < string.length; i++) {
      switch (string.charAt(i)) {
        case "1":
          var line = new myLine(1470, 1000, 1470, 230);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow(line.x, (line.dy + line.y) / 2 - 15, angle, ctx);
          break;

        case "2":
          var line = new myLine(1470, 230, 1190, 230);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow((line.dx + line.x) / 2 - 15, line.y, angle, ctx);
          break;

        case "3":
          var line = new myLine(1190, 230, 1190, 160);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow(line.x, (line.dy + line.y) / 2 - 15, angle, ctx);
          break;

        case "4":
          var line = new myLine(1470, 1000, 1470, 925);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow(line.x, (line.dy + line.y) / 2 - 15, angle, ctx);
          break;

        case "5":
          var line = new myLine(1470, 925, 1350, 925);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow((line.dx + line.x) / 2 - 15, line.y, angle, ctx);
          break;

        case "6":
          var line = new myLine(1470, 1000, 1470, 660);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow(line.x, (line.dy + line.y) / 2 - 15, angle, ctx);
          break;

        case "7":
          var line = new myLine(1470, 660, 450, 660);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow((line.dx + line.x) / 2 - 15, line.y, angle, ctx);
          break;

        case "8":
          var line = new myLine(450, 660, 450, 500);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow(line.x, (line.dy + line.y) / 2 - 15, angle, ctx);
          break;

        case "9":
          var line = new myLine(1470, 230, 570, 230);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow((line.dx + line.x) / 2 - 15, line.y, angle, ctx);
          break;

        case "A":
          var line = new myLine(570, 230, 570, 165);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow(line.x, (line.dy + line.y) / 2 - 15, angle, ctx);
          break;

        case "B":
          var line = new myLine(1470, 230, 1300, 230);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow((line.dx + line.x) / 2 - 15, line.y, angle, ctx);
          break;

        case "C":
          var line = new myLine(1300, 230, 1300, 160);
          drawLine(line, ctx);
          // Draw the arrow at the end of the line
          var angle = Math.atan2(line.dy - line.y, line.dx - line.x);
          drawArrow(line.x, (line.dy + line.y) / 2 - 15, angle, ctx);
          break;

        case "c":
          clearCanvas();
          break;

        case "s":
          drawStartPoint(1470, 1000, ctx);
          break;

        case "e":
          drawEndPoint(line.dx, line.dy, ctx);
          break;

        default:
          break;
      }
    }
  }
  window.parsePath = parsePath;

  let input = document.getElementById("search-input");
  let list = document.getElementById("list");

  input.addEventListener("keyup", function () {
    let searchTerm = input.value.toLowerCase();
    let buttons = list.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
      let li = buttons[i].getElementsByTagName("li")[0];
      let title = li.textContent;

      if (title.toLowerCase().indexOf(searchTerm) > -1) {
        buttons[i].style.display = "";
      } else {
        buttons[i].style.display = "none";
      }
    }
  });

  fetch(
    "https://cud-interactive-map-default-rtdb.asia-southeast1.firebasedatabase.app/.json"
  )
    .then((response) => response.json())
    .then((data) => {
      let list = document.getElementById("list");
      data.forEach((item) => {
        let button = document.createElement("button");
        button.setAttribute("onclick", `window.parsePath('${item.path}')`);
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        li1.setAttribute(
          "class",
          "w-full my-3 border border-grey-800 rounded-xl flex items-center py-3 hover:shadow-lg hover:shadow-gray-500/40 hover:-translate-y-1"
        );
        //image
        let imgBox = document.createElement("div");
        imgBox.setAttribute("class", "inline p-3 mx-6");
        let img = document.createElement("img");
        img.setAttribute("src", item.src);
        img.setAttribute("class", "rounded-xl");
        //info
        let infoBox = document.createElement("div");
        infoBox.setAttribute("class", "flex flex-col items-start ");
        let span1 = document.createElement("span");
        span1.textContent = item.name;
        span1.setAttribute("class", "text-sm ");

        let span2 = document.createElement("span");
        span2.textContent = item.title;
        span2.setAttribute("class", "text-sm");

        let span3 = document.createElement("span");
        span3.textContent = item.office;
        span3.setAttribute("class", "text-sm");

        let span4 = document.createElement("span");
        span4.textContent = item.telephone;
        span4.setAttribute("class", "text-sm");

        //appending
        list.appendChild(button);
        button.appendChild(ul);
        ul.appendChild(li1);

        li1.appendChild(imgBox);
        imgBox.appendChild(img);

        li1.appendChild(infoBox);
        infoBox.appendChild(span1);
        infoBox.appendChild(span2);
        infoBox.appendChild(span3);
        infoBox.appendChild(span4);
      });
    });
});

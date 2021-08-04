canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=1;
ctx.rect(180, 170, 430, 200 );
ctx.stroke();

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(275, 250, 40, 0, 2 * Math.PI );
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(375, 250, 40, 0, 2 * Math.PI );
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(475, 250, 40, 0, 2 * Math.PI );
ctx.stroke();

color="gold";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(325, 295, 40, 0, 2 * Math.PI );
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(425, 295, 40, 0, 2 * Math.PI );
ctx.stroke();
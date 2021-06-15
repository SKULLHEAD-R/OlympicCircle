canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//code for making circle

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(200,200,60,0,2*Math.PI);
ctx.stroke();
//end for making circle
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(350,200,60,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(500,200,60,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(275,270,60,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(425,270,60,0,2*Math.PI);
ctx.stroke();
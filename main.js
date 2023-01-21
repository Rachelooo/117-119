function  preload(){

classifier=ml5.imageClassifier("DoodleNet");

}
function setup(){

canvas = createCanvas(400, 400);
canvas.position(550, 300);
background("white");
synth=window.speechSynthesis;
canvas.mouseReleased(classifyCanvas);

}
function draw(){
   
stroke[0];
strokeWeight[5];
if(mouseIsPressed){
line(pmouseX, pmouseY, mouseX, mouseY);
}

}
function clearCanvas(){
    background("white");
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error, results){
if(error){
    console.error(error);
}
    console.log(results);
document.getElementById("label").innerHTML="label - "+ results[0].label;
document.getElementById("confidence").innerHTML="confidence - "+ Math.round(results[0].confidence * 100) +"%";
utterThis= new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}
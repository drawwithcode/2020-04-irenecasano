function preload(){
  // put preload code here
}

function setup() {
createCanvas(windowWidth, windowHeight);
background("seashell")
createP("Instant poetry").style("font-family", "CliftonTrial-Italic").style("font-size", "50px").position(width/2.7, height/7);
createP("set your words free").style("font-family", "CliftonTrial-Italic").style("font-size", "20px").position(width/2.35, height/3.5);
createP("Enter your text").style("font-family", "CliftonTrial-Italic").style("font-size", "15px").position(width/2.7, height/2.3);
createP("Change font size with the slider").style("font-family", "CliftonTrial-Italic").style("font-size", "15px").position(width/2.7, height/2.15);
createP("Press ENTER.").style("font-family", "CliftonTrial-Italic").style("font-size", "15px").position(width/2.7, height/2);
createP("Click anywehre to start").style("font-family", "CliftonTrial-Italic").style("font-size", "20px").position(width/2.47, height/1.6);

}

function draw() {

}

function mouseClicked() {
  window.open("poetryLab.html", "_self")
}

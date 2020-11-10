
let dancingWords = [];
let xspeed = 6;
let yspeed = 4;
let slider;
let myText;
let textbox;

class Dancer {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
    element.p;
    element.style("font-family", "CliftonTrial-Italic").style("font-size", slider.value() + "pt")


  }


  updatePos() {
    this.x += xspeed;
    this.y += yspeed;
    this.element.position(this.x, this.y);

    if (this.x  > width -70 || this.x < 1) {
    xspeed = -xspeed;
  }
  if (this.y > height -40 || this.y < 1) {
    yspeed = -yspeed;
  }
  }

}


function preload(){
  // put preload code here
}

function setup() {
createCanvas(windowWidth, windowHeight);
  frameRate(30);


textbox = createInput('Ernie variopinte dei fiori semicupi delle farfalle spegnitoi');
textbox.input(keyPressed);
slider = createSlider(12,70,20);
slider.position(50, 40);
slider.input(updateSize);
slider.position(50, 40);
textbox.position(50, 80);
textbox.size(300);


  myText = createP(textbox.value()).addClass('p').hide();




}

function updateSize(){
  paragraph.style("font-size", slider.value() + "pt");
}

function keyPressed(){
  if (keyCode === ENTER) {

    myText.html(textbox.value());
  const texts = selectAll('p')

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
      const dw = new Dancer(spannedWord, random(20, width-70), random(20, height-70));
      dancingWords.push(dw);
    }
  }


}
}

function draw() {
  // page.
background("seashell");
  const texts = selectAll('p')
  for (let i = 0; i < dancingWords.length; i++) {
    dancingWords[i].updatePos();

  }



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

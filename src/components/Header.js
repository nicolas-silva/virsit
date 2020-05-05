import React from "react";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./Header.css";

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 1;
  this.period = parseInt(period, 1) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

function Header(props) {

  return (
    <>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          {" "}
          Vi<span className="TheR">rs</span>it
        </h1>
        <p className="typewrite" data-period="1000" data-type='[ "Virsit is the place",
                                                             "To easily find a Virtual Tour", 
                                                             "To Museums or Art Galleries...", 
                                                             "Zoos or Aquariums...",
                                                             "Places you can not go at the moment,",
                                                             "Or you are planning to visit soon.",
                                                             "Anyway,",
                                                             "Find below a nice place to visit now!" ]'>
        <span className="wrap"></span>
        </p>
      </header>
      
    </>
  );
}
export default Header;

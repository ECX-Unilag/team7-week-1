// Set the date we're counting down to
var countDownDate = new Date("Dec 1, 2020 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// SLIDE SHOW FOR THE PRODUCT PAGE
let image = [ '../Assets/images/items.png', '../Assets/images/green.png', '../Assets/images/blue.png', '../Assets/images/red.png', '../Assets/images/orange.png'];
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let slideShow = document.querySelector('#slide');
let currentIndex = 0;
var cont = true;
slideShow.onmouseover = function() {
  cont = false;
};
nextBtn.onclick = function() {
  console.log('next-button working');
  cont = false;
  currentIndex++;
  console.log(currentIndex);
  console.log(image.length);
  var img_length = image.length - 1;
  if (currentIndex > img_length) {
    currentIndex = 0;
    slideShow.src = image[0];
  }
  else {
    slideShow.src = image[currentIndex];
    setInterval(
      function change() {
        cont = true;
      }, 4000);
  }
    return currentIndex;
};
prevBtn.onclick = function() {
  console.log('prev-button working');
  cont = false;
    currentIndex--;
    var img_length = image.length - 1;
    if (currentIndex < 0) {
      currentIndex = img_length;
      slideShow.src = image[img_length];
    } else {
      slideShow.src = image[currentIndex];
      setInterval(
        function change() {
          cont = true;
        }, 4000);
      return currentIndex;
    }
};

window.onload = (event) => {
  if (cont === true) {
    setInterval(
      function move() {
        console.log('i move');
        currentIndex++;
        slideShow.src = image[currentIndex];
        console.log(currentIndex);
        img_length = image.length - 2;
        if (currentIndex > img_length) { currentIndex = -1 }
        return currentIndex;
      }
      ,4000);
  }
};

  // MAKING THE IMAGES SHOW;
  let image_d;

  // MAKING THE VALUES SHOW
  let sizes, xs, s, m, l, xl, colors, green, blue, red, orange;
  sizes = document.querySelector('#size-value');
  colors = document.querySelector('#color-value');
  xs = document.querySelector('#xs');
  s = document.querySelector('#s');
  m = document.querySelector('#m');
  l = document.querySelector('#l');
  xl = document.querySelector('#xl');
  green = document.querySelector('#green');
  blue = document.querySelector('#blue');
  red = document.querySelector('#red');
  orange = document.querySelector('#orange');

  // FUNCTIONS
  function value() {
    sizes.innerHTML = this.value;
  };
  xs.onclick = value;
  s.onclick = value;
  m.onclick = value;
  l.onclick = value;
  xl.onclick = value;
  
  function color() {
    // this.classList.add('bordered');
    // this.addEventListener('mouseout', function() {
    //   this.classList.remove('bordered');
    // });
    colors.innerHTML = this.value;
  };
  green.onclick = color;
  blue.onclick = color;
  red.onclick = color;
  orange.onclick = color;

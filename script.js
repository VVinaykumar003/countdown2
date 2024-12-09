let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd ');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.getElementById('.day_dot');
let hr_dot = document.getElementById('hr_dot');
let min_dot = document.getElementById('min_dot');
let sec_dot = document.getElementById('sec_dot');

let endDate = '01/07/2024 00:00:00';

//date format mm/dd/yyyy
let x =setInterval(function(){
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown ;

  //time calculation for days,hours ,minutes and seconds 
  let d = Math.floor(distance / (1000* 60 * 60 * 24));
  let h = Math.floor((distance% (1000* 60 * 60 * 24) ) / (1000* 60 * 60 ));
  let m = Math.floor((distance % (1000* 60 * 60) ) / (1000* 60 ));
  let s = Math.floor((distance % (1000* 60 ) ) / (1000));

// output the result in element with id 
days.innerHTML = d + "<br><span>Days</span></br>";
hours.innerHTML = h + "<br><span>hours</span></br>";
minutes.innerHTML = m + "<br><span>minutes</span></br>";
seconds.innerHTML = s + "<br><span>seconds</span></br>";

//anime stroke 
dd.style.strokeDashoffset = 440  - (440 * d) / 365;
//365 days in an year
hh.style.strokeDashoffset = 440  - (440 * h) / 24;
mm.style.strokeDashoffset = 440  - (440 * m) / 60;
ss.style.strokeDashoffset = 440  - (440 * s) / 60;

//60 seconds in a seconds 

// animte circle dots 
day_dot.style.transform = `rotateZ(${d * 0.986} deg)`;

//360 / 365days = 0.986 
hr_dot.style.transform = `rotateZ(${h * 0.986} deg)`;


//360 / 24hrs = 15 
min_dot.style.transform = `rotateZ(${m * 0.986} deg)`;

//360deg / 60 seconds = 6 
min_dot.style.transform = `rotateZ(${m * 0.986} deg)`;

//if the countdown is over , write some text 
if(distance < 0){
  clearInterval(x);
  document.getElementById("time").style.display = 'none';

  document.querySelector("newYear").style.display= 'block'
}

})
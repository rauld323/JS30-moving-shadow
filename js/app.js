const first = document.querySelector('.first')
const text = first.querySelector('h1');
//walk determines how much it should be streched.
const walk = 500;

function shadow(e){
   const width = first.offsetWidth;
   const height = first.offsetHeight;
   //destructure form  const {offsetWidth: width, offsetHeight: height } = hero;
   let {offsetX: x, offsetY: y} = e;


   if(this !== e.target){
       x = x + e.target.offsetLeft;
       y = y + e.target.offsetTop;
   }

   //if walk is 100 than the highest should be 50 and the lowest should be -50
   const xWalk = Math.round((x / width * walk) - (walk / 2));
   const yWalk = Math.round((y / height * walk) - (walk / 2));

   //1. X Cordin, 2. Y Condin, 3. blur Radius, 4. Color shadow
   text.style.textShadow =`
   ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
   ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
   `
}

first.addEventListener('mousemove',shadow);
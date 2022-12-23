


// Mouse circle

const mouseCircle = document.querySelector('.mouse-circle');
const mouseDot = document.querySelector('.mouse-dot');

const mouseCircleFn = (x,y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};
// End of mouse circle

// Animated circles
const circles = document.querySelectorAll('.circle');
const mainImg = document.querySelector('.main-circle img');
 let mX = 0;
 let mY = 0;
 const Z = 100;
 
const animatedCircles = (e, x, y) =>{
 if(x < mX){
   circles.forEach((circle) => {
       circle.style.left = `${Z}px`;
   });  
   mainImg.style.left = `${Z}px`;
 }else if(x > mX){
     circles.forEach((circle) => {
       circle.style.left = `-${Z}px`;
   });  
   mainImg.style.left = `-${Z}px`;
 }
 
 if(y < mY){
   circles.forEach((circle) => {
       circle.style.top = `${Z}px`;
   });  
   mainImg.style.top = `${Z}px`;      
 }else if(y > mY){
     circles.forEach((circle) => {
       circle.style.top = `-${Z}px`;
   });  
   mainImg.style.top = `-${Z}px`;  
 }
 mX = e.clientX;
 mY = e.clientY;
};

// End of animated circles

document.body.addEventListener('mousemove',(e) => {
    let x = e.clientX;
    let y = e.clientY;
    mouseCircleFn(x,y);
    animatedCircles(e,x,y);
});

document.body.addEventListener('mouseleave', () => {
    mouseCircle.style.opacity = '0';
    mouseDot.style.opacity = '0';
});

// Main button
const mainBtns = document.querySelectorAll('.main-btn');

mainBtns.forEach( btn => {
    let ripple; 

btn.addEventListener('mouseenter', (e) => {
const left = e.clientX - e.target.getBoundingClientRect().left;    
const top = e.clientY - e.target.getBoundingClientRect().top;  

ripple = document.createElement('div');
ripple.classList.add('ripple');
ripple.style.left = `${left}px`;
ripple.style.top = `${top}px`;
btn.prepend(ripple);
});

btn.addEventListener('mouseleave', () => {
    btn.removeChild(ripple);
});

});


// End of main button

// About me text
const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextContent = 'I am a designer & I create awards winning websites with the best user experience & I do not talk much,just contact me.:)';

Array.from(aboutMeTextContent).forEach((char) =>{
const span = document.createElement('span');
span.textContent = char;
aboutMeText.appendChild(span);
    
    span.addEventListener('mouseenter', (e) => {
        e.target.style.animation = 'aboutMeTextAnim 10s infinite';
    });
});

// End of about me text


// Projects
const container = document.querySelector('.container');
const projects = document.querySelectorAll('.project');
const projectHideBtn = document.querySelector('.project-hide-btn');

projects.forEach( (project,i) => {
   project.addEventListener('mouseenter', () => {
       project.firstElementChild.style.top =
`-${project.firstElementChild.offsetHeight - project.offsetHeight + 20}px`;
   });
   
   project.addEventListener('mouseleave', () => {
       project.firstElementChild.style.top = '2rem';
   });
   
   /* Big project image*/
   project.addEventListener('click', () => {
      const bigImgWrapper = document.createElement('div');
      bigImgWrapper.className = 'project-img-wrapper';
      container.appendChild(bigImgWrapper);
      
      const bigImg = document.createElement('img');
      bigImg.className = 'project-img';
      const imgPath = project.firstElementChild.getAttribute('src').split(".")[0];
      bigImg.setAttribute('src', `${imgPath}-big.jpg`);
      bigImgWrapper.appendChild(bigImg);
      document.body.style.overflowY = 'hidden';
      
      projectHideBtn.classList.add('change');
      projectHideBtn.onclick = ()=> {
          projectHideBtn.classList.remove('change');
          bigImgWrapper.remove();
          document.body.style.overflowY = 'scroll';
      };
  });
   /* Eng of big project image*/
   
   i >= 6 && (project.style.cssText = 'display: none; opacity: 0');
   
});


//Projects button
const projectsBtn = document.querySelector('.projects-btn');
const projectsBtnText = document.querySelector('.projects-btn span');
let showHideBool = true;

projectsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    projectsBtn.firstElementChild.nextElementSibling.classList.toggle('change');
    
    projects.forEach((project, i) => {
        if(i >= 6){
            if(showHideBool){
                project.style.display = 'flex';
                project.style.opacity = '1';
                
                projectsBtnText.textContent = 'Show Less';
            }else{
                project.style.display = 'none';
                project.style.opacity = '0';
                
                projectsBtnText.textContent = 'Show More';
            }
        }
    });
    showHideBool = !showHideBool;
});
//End of projects button
// End of projects








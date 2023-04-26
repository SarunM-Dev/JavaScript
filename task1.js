let submitButton = document.getElementById("result");

submitButton.addEventListener("click", function() {
  let mark1 = Number(document.getElementById("kg").value);
  let mark2 = Number(document.getElementById("lb").value);
  let mark3 = Number(document.getElementById("lb1").value);
  let total = mark1 + mark2 + mark3;   
  let average = total / 3;      
  let grade;
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }
  let result;
  if (grade == "F" || mark1 < 40 || mark2 < 40 || mark3 < 40) {
    result = "Fail";
  } else {
    result = "Pass";
  }
  document.getElementById("tt").value = total;
  document.getElementById("av").value = average;
  document.getElementById("gr").value = grade;
  document.getElementById("re").value = result;
});

function createParticle (x, y, type) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);
  let width = Math.floor(Math.random() * 30 + 8);
  let height = width;
  let destinationX = (Math.random() - 0.5) * 300;
  let destinationY = (Math.random() - 0.5) * 300;
  let rotation = Math.random() * 520;
  let delay = Math.random() * 200;
  
  switch (type) {
    case 'emoji':
      particle.innerHTML = ['❤','🧡','💛','💚','💙','💜','🤎'][Math.floor(Math.random() * 7)];
      particle.style.fontSize = `${Math.random() * 24 + 10}px`;
      width = height = 'auto';
      break;   
  }
}
particle.style.width = `${width}px`;
particle.style.height = `${height}px`;
const animation = particle.animate([
  {
    transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
    opacity: 1
  },
  {
    transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
    opacity: 0
  }
], {
  duration: Math.random() * 1000 + 5000,
  easing: 'cubic-bezier(0, .9, .57, 1)',
  delay: delay
});
animation.onfinish = removeParticle;
function removeParticle (e) {
e.srcElement.effect.target.remove();
}

if (document.body.animate) {
document.querySelectorAll('button').forEach(button => button.addEventListener('click', pop));
}

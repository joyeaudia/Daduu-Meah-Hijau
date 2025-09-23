var A=document.querySelector(".img1");var B=document.querySelector(".img2");let h=document.querySelector("h1");
A.setAttribute("src","images/dice6.png");B.setAttribute("src","images/dice6.png");
function rollDice(   ){let r1=Math.floor(Math.random()*6)+1;let r2=Math.floor(Math.random()*6)+1;
A.setAttribute("src","images/dice"+r1+".png");B.setAttribute("src","images/dice"+r2+".png");
if(r1>r2){h.innerHTML="🚩 Player 1 Wins!"}else if(r2>r1){h.innerHTML="Player 2 Wins! 🚩"}else{h.innerHTML="🤝 Draw!"}}
rollDice(   )

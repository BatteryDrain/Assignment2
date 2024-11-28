document.getElementById("button1").addEventListener("click", function () {
    let goHere = "";
    document.getElementById("currentSection").innerHTML = "The Problem";
    document.getElementById("paragraph").innerHTML = "In the brisk months of October 2021 a game was introduced to the world, WORDLE. This simple game captivated the world from old to young, student to proffessor. Everyone in an english speaking country had heard the name WORDLE. When I got wind of this new free minigame I gave it a try only to see I suck at it. The problem had shown it's self. I knocked on my brothers room and gave him a challenge, design a program that can help you beat wordle every time. He abliged and we were off, now this wasn't our first time, we had made many challenges like this before where we try to out code each oth on a website called Scratch by MIT. You can try the WORDLE game with the link below!";
    document.getElementById("fig1").src = "";
    goHere = "https://www.nytimes.com/games/wordle";
    document.getElementById("link").href = goHere;
    document.getElementById("link").innerHTML = goHere;
});
document.getElementById("button2").addEventListener("click", function () {
    document.getElementById("currentSection").innerHTML = "Version1.0";
    document.getElementById("paragraph").innerHTML = "I made the first version in 2022 around the same time as my brother, although I won the contest because my version allowed the user to input data without have to input all previous data. This was acheved by making a display, where the user could input information in diffrent sections to indice the hints WORDLE gave them. At the time of making the first version there was this meme that was about people adding n't to the end of a word to men the opposite. If you are reading this you are deadn't, hence WORDLEn't. You can try this version for yourself, with the link below!";
    document.getElementById("fig1").src = "assets/WORDLEnt1.0.webp";
    goHere = "https://scratch.mit.edu/projects/674726490"
    document.getElementById("link").href = goHere;
    document.getElementById("link").innerHTML = goHere;
});
document.getElementById("button3").addEventListener("click", function () {
    document.getElementById("currentSection").innerHTML = "Version2.0";
    document.getElementById("paragraph").innerHTML = "One of the biggest complaints I got when showing people the first version was they didn't know how to use it. I added instructions to the description of the program on the right but that didn't work so I added a question mark in the bottom left, if you click it a overlay will show you what the diffrent sections are for. Although I found that if a user is confused they are more likely to give up instead of looking for a help button. There was only one way I could fix these core problems, I needed a redesign. I started by removing all three sections all together, leaving only the output section. Instead I replaced them with an inerface inspired by the WORDLE game. I added a draggable tile section to allow the user to tell the program the hints the game gave them.";
    document.getElementById("fig1").src = "assets/WORDLEnt2.0v2.webp";
    goHere = "https://scratch.mit.edu/projects/965784197";
    document.getElementById("link").href = goHere;
    document.getElementById("link").innerHTML = goHere;
});
document.getElementById("button4").addEventListener("click", function () {
    document.getElementById("currentSection").innerHTML = "Future Versions";
    document.getElementById("paragraph").innerHTML = "I have not only used this program for wordle but I've also found it usefull for conversations and other word based puzzels, so in the future I want to make a wordlen't that can work for 4 letter words and 6 letter words and so on. Try the final version for yourself!";
    document.getElementById("fig1").src = "";
    goHere = "https://scratch.mit.edu/projects/965784197";
    document.getElementById("link").href = goHere;
    document.getElementById("link").innerHTML = goHere;
});
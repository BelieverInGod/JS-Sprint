let BlackWidow = new Object ()
BlackWidow.team = "Avengers";
BlackWidow.universe = "Marvel";
BlackWidow.race = "human";
BlackWidow.eyeColor = "green";
BlackWidow.hairColor = "lightBrown";

let Robin = new Object ()
Robin.team = "Justice League Of America";
Robin.universe = "DC Comics";
Robin.race = "human"
Robin.eyeColor = "blue";
Robin.hairColor = "black";


function WhatIsHero(hero) {
    if(hero.team === "Avengers" && hero.universe === "Marvel" && hero.race === "human" && hero.eyeColor === "green" && (hero.hairColor === "lightBrown" || hero.hairColor === "green")) {
        console.log("This is BlackWidow!")
    }
    else if((hero.team === "Justice League Of America" || hero.team === "Teen Titans") && hero.universe === "DS Comics" && (hero.race === "human" || hero.race === "kryptonian") && eyeColor === "blue" && hairColor === "black") {
        console.log("This is Superman or Robin!")
    }
    else {
        console.log("Didn't recognize!")
    }
}

WhatIsHero(BlackWidow)
WhatIsHero(Robin)


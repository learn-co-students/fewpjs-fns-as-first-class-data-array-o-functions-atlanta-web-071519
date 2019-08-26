function wakeDog (dogName, dogBreed) {
    let wakeString = `Wake ${dogName} the ${dogBreed}`;
    console.log(wakeString);
    return wakeString; 
};

function leashDog (dogName, dogBreed) {
    let leashString = `Leash ${dogName} the ${dogBreed}`;
    console.log(leashString);
    return leashString; 
};

function walkToPark (dogName, dogBreed) {
    let walkString = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walkString);
    return walkString; 
};

function throwFrisbee (dogName, dogBreed) {
    let throwFrisbeeString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(throwFrisbeeString);
    return throwFrisbeeString; 
};

function walkHome (dogName, dogBreed) {
    let walkHomeString = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(walkHomeString);
    return walkHomeString; 
};

function unleashDog (dogName, dogBreed) {
    let unleashString = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleashString);
    return unleashString; 
};

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]; 

function exerciseDog (dogName, dogBreed){
    let actions_array = []; 
    for (let i = 0; i < routine.length; i++) {
        actions_array.push(routine[i](dogName, dogBreed)); 
    }
    return actions_array; 
}; 
function wakeDog(dogName, dogBreed) {
    let wakeDogString = `Wake ${dogName} the ${dogBreed}`;
    console.log(wakeDogString);
    return wakeDogString;
}

function leashDog(dogName, dogBreed) {
    let leashDogString = `Leash ${dogName} the ${dogBreed}`;
    console.log(leashDogString);
    return leashDogString;
}

function walkToPark(dogName, dogBreed) {
    let walkToParkString = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walkToParkString);
    return walkToParkString;
}

function throwFrisbee(dogName, dogBreed) {
    let throwFrisbeeString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(throwFrisbeeString);
    return throwFrisbeeString;
}

function walkHome(dogName, dogBreed) {
    let walkHomeString = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(walkHomeString);
    return walkHomeString;
}

function unleashDog( dogName, dogBreed) {
    let unleashDogString = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleashDogString);
    return unleashDogString;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let newRoutine = [];
    for (let i = 0; i < routine.length; i++) {
        newRoutine.push(routine[i](dogName, dogBreed));
    }
    return newRoutine;
}
//Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numberofChlidren, partnersName, location, jobTitle) {
    const result = `You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numberofChlidren} kids.`
    console.log(result);
}
tellFortune(3, 'xyz', 'Islamabad', 'Front End Developer');
tellFortune(4, 'xyz', 'Lahore', 'Graphic Designer');

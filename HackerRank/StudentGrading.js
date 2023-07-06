function studentGrading(grade) {
    const roundedGrades = [];
    for (grade of grade) {
        if (grade < 38) {
            roundedGrades.push(grade);
        }
        //ceil is used to find the next multiple of 5 after a given number
        else {
            const nextMultiple = Math.ceil(grade / 5) * 5;
            if (nextMultiple - grade < 3) {
                roundedGrades.push(nextMultiple);
            }
            else {
                roundedGrades.push(grade);
            }
        }
    }
    return roundedGrades;
}
console.log(studentGrading([4, 73, 67, 38, 33]));
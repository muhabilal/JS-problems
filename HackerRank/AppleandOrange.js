const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let countApples = 0;
    let countOranges = 0;
    for (let apple of apples) {
        let landingSpot = a + apple;
        if (landingSpot >= s && landingSpot <= t) {
            countApples++;
        }
    }
    for (let orange of oranges) {
        let landingSpot = a + orange;
        if (landingSpot >= s && landingSpot <= t) {
            countOranges++;
        }
    }
    console.log(countApples);
    console.log(countOranges);
}
const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];
countApplesAndOranges(s, t, a, b, apples, oranges);

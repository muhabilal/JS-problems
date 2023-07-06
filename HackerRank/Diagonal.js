function diagonalDifference(matrix) {
    const n = matrix.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    // Calculate the sum of the primary diagonal
    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
    }

    // Calculate the sum of the secondary diagonal
    for (let i = 0; i < n; i++) {
        secondaryDiagonalSum += matrix[i][n - i - 1];
    }

    // Calculate the absolute difference between the two sums
    const absoluteDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

    return absoluteDifference;
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const difference = diagonalDifference(matrix);
console.log(difference); // Output: 0
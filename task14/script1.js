const div = (Firstno, secondno) => {
    return new Promise((resolve, reject) => {
        if (secondno === 0) {
            const err = "Division by zero is not allowed";
            reject(err);
        } else {
            const ans = Firstno / secondno;
            resolve(ans);
        }
    });
}

async function Answer() {
    const testCases = [
        { Firstno: 10, secondno: 2 },
        { Firstno: 50, secondno: 3 },
        { Firstno: 10, secondno: 0 },
        { Firstno: 52, secondno: 4 },
        { Firstno: 100, secondno: 0 }
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { Firstno, secondno } = testCases[i];
        try {
            const result = await div(Firstno, secondno);
            console.log(`Dividing ${Firstno} by ${secondno}`);
            console.log(`Result: ${result}`);
        } catch (error) {
            console.error(`Dividing ${Firstno} by ${secondno}`);
            console.error(`Error: ${error}`);
        }
    }
}

// Calling the function
Answer();

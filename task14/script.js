const div = (Firstno, secondno) => {
    return new Promise((resolve, reject) => {
        if (secondno === 0) {
            console.error(`Dividing ${Firstno} by ${secondno}`)
            const err = "Division by zero is not allowed";
            reject(err);
        } else {
            const ans = Firstno / secondno;
            console.log(`Dividing ${Firstno} by ${secondno}`)
            resolve(ans);
        }
    })
}

async function Answer() {
    try {
        const div0 = await div(10, 2);
        console.log(`Result: ${div0}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }

    try {
        const div1 = await div(10, 0);
        console.log(`Result: ${div1}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }

    try {
        const div2 = await div(15, 3);
        console.log(`Result: ${div2}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }

    try {
        const div3 = await div(9, 0);
        console.log(`Result: ${div3}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }

    try {
        const div4 = await div(7, -1);
        console.log(`Result: ${div4}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

Answer();
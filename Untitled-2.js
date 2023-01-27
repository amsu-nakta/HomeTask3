/* 1 */
function getMaxDifference(arr) {
    if (arr.length < 2) {
        return 0;
    }

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return max - min;
}

/* 2 */
function getWordsLongerThan(str, number) {
    return str.split(" ").filter((word) => word.length > number);
}

/* 3 */
function endsWith(origin, target) {
    return target.length > 0 && origin.endsWith(target);
}

/* 4 */
function getPairAvarageValues(arr) {
    return arr.map((el, i) => (el + arr[i + 1]) / 2).slice(0, -1);
}

/* 5 */
function countVowels(str) {
    const vowels = "aoieu";
    let counter = 0;

    str.split("").forEach((letter) => vowels.includes(letter) && counter++);

    return counter;
}

function removeABC(str) {
    const result = str
        .replaceAll("a", "")
        .replaceAll("b", "")
        .replaceAll("c", "");

    return result === str ? null : result;
}

/* 6 */
function difference(firstArr, secondArr) {
    return [...new Set([...firstArr, ...secondArr])];
}

/* 7 */
function reverseObject(obj) {
    const reversedEntries = Object.entries(obj).map((el) => el.reverse());

    return Object.fromEntries(reversedEntries);
}

/* 8 */
function getInsuranceCompensationDifference(items, compensation) {
    const totalCostOfItems = Object.values(items).reduce(
        (result, cost) => result + cost,
        0
    );

    return totalCostOfItems - compensation;
}

/* 9 */
function doesBrickFit(a, b, c, w, h) {
    const minSide = Math.min(a, b, c);
    const minIndex = [a, b, c].indexOf(minSide);
    const middleSide = Math.min(...[a, b, c].filter((el, i) => i !== minIndex));

    return minSide <= Math.min(w, h) && middleSide <= Math.max(w, h);
}

/* 10 */
function getFileName(str) {
    return str.split("\\").at(-1).split(".").at(0);
}

/* 11 */
function cyclicShift(firstStr, secondStr) {
    for (let letter of firstStr) {
        if (secondStr === firstStr.slice(1) + letter) {
            return true;
        }
    }

    return false;
}

/* 12 */
function splitArrayIntoHalves(arr) {
    const sortedArr = [...arr].sort();
    const arrB = sortedArr.filter((el, i) => i % 2 === 0);
    const arrC = sortedArr.filter((el, i) => i % 2 === 1);

    return { arrB, arrC };
}

/* 13 */
function formatString(str) {
    const urlRegex =
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const emailRegex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g;

    const stringInCorrectCase =
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const stringWithoutLongDigits = stringInCorrectCase
        .split(" ")
        .filter((el) => el.length <= 3 || isNaN(el))
        .join(" ");
    const stringWithoutEmails = stringWithoutLongDigits.replaceAll(
        emailRegex,
        "[контакти заборонені]"
    );
    const stringWithoutUrls = stringWithoutEmails.replaceAll(
        urlRegex,
        "[посилання заборонено]"
    );

    return stringWithoutUrls;
}

/* 14 */
function checkParenthesesBalance(str) {
    return (
        str.split("").reduce((result, el) => {
            if (result < 0) {
                return null;
            } else if (el === "(") {
                return result + 1;
            } else if (el === ")") {
                return result - 1;
            }
        }, 0) === 0
    );
}

/* 15 */
function generatePassword() {
    const length = Math.floor(Math.random() * 15) + 6;
    const underscoreIndex = Math.floor(Math.random() * length);

    let result = "";

    for (let i = 0; i < length; i++) {
        if (i === underscoreIndex) {
            result += "_";
            continue;
        }

        let newCharacter = String.fromCharCode(
            Math.floor(Math.random() * ("Z".charCodeAt() - "0".charCodeAt())) +
                "0".charCodeAt()
        );

        const digitsCount = result.split("").filter((el) => !isNaN(el)).length;

        while (
            !isNaN(newCharacter) &&
            (!isNaN(result[i - 1]) || digitsCount === 4)
        ) {
            newCharacter = String.fromCharCode(
                Math.floor(
                    Math.random() * ("Z".charCodeAt() - "0".charCodeAt())
                ) + "0".charCodeAt()
            );
        }

        result += newCharacter;
    }

    while (result.split("").filter((el) => el > "A" && el < "Z").length < 2) {
        const randomIndex = Math.floor(Math.random() * length);

        if (randomIndex === underscoreIndex) {
            continue;
        }

        let newCharacter = String.fromCharCode(
            Math.floor(Math.random() * ("Z".charCodeAt() - "A".charCodeAt())) +
                "A".charCodeAt()
        );

        result =
            result.slice(0, randomIndex) +
            newCharacter +
            result.slice(randomIndex + 1);
    }

    return result;
}

/* 16 */
function sortMinValuesByDifferentSides(arr) {
    const sortedArr = [...arr].sort();
    const firstHalf = sortedArr.filter((el, i) => i % 2 === 0);
    const secondHalf = sortedArr.filter((el, i) => i % 2 === 1);

    return [...firstHalf, ...secondHalf.reverse()];
}

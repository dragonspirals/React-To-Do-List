// / splits an array into sub-arrays of length 7 
export function splitWeek(flatArray) {

    const newArray = [];

    for (let i=0; i<flatArray.length; i++) {
        // create an array for each week inside array 
        if (i%7 === 0) {
            const weekArray = [];
            newArray.push(weekArray);
        }

        newArray[Math.floor(i/7)].push(flatArray[i]);
    }

    return(newArray);
}
    
// flat array of dates
export default function flatDates(startDate, numDays) {
    const array = [];

    for (let i=0; i<numDays; i++) {
        const date = new Date();

        date.setDate(startDate.getDate() + i);
        array.push(date.getDate());
    }

    return array;
}
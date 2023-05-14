    /* ----------------------- generate numerical options ----------------------- */
    //  generates select options for numbers

    export default function GenerateOptions({ start, step, number }) {

        // start    -   first option value
        // step     -   step between values
        // number   -   how many options to generate


        // create an array of same length as number
        function createArray(length) {
            var array = [];
            for (let i=0; i<length; i++) {

                var value = start + (step*i)
                array.push(value);
            }
            return array;
        }


        // map array to each option 

        return (
            <>
            {createArray(number).map(index => (
                <option value = {index}>{index}</option>
            ))}
            </>
        )

    }

    export function GenerateMonths() {
        // create an array of same length as number
        const months=["January", "February", "March", "April", "May", "June", "July", "August"
        , "September", "October", "November", "December"]

        return (
            <>
            {months.map(month => (
                <option value = {months.indexOf(month)}>{month}</option>
            ))}
            </>
        )
        
    }
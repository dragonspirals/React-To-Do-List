

const weekDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


    // array becomes row with array elements 
    const ArrayToRow = ({ array, clickFn }) => {
        return (
            <tr>
                {array.map(cell => (
                    <td className="table-box">{cell}</td>
                ))}
            </tr>
        )
    }

       

        // 2d array becomes table with array elements being rows 
        export default function ArrayToTable({ array })  {
        
            return(
                <table>

                    <tr>
                        {weekDay.map(cell => (
                            <th className="table-headings">{cell}</th>
                        ))}
                    </tr>

                    {array.map(row => (
                        <ArrayToRow array={row} />
                    ))}
                </table >
            )
        }
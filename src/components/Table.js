import React from 'react';

const data = [
    { calories: 227, carbs: 0, protien: 20, fat:22 },
]
 
function Table() {
    return (
        <div className="Table">
            <table>
                <tr>
                    <th>Calories</th>
                    <th>Carbs</th>
                    <th>Protien</th>
                    <th>Fat</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <React.Fragment>
                        <tr key={key}>
                            <td>{val.calories}</td>
                            <td>{val.carbs}</td>
                            <td>{val.protien}</td>
                            <td>{val.fat}</td>
                        </tr>
                        </React.Fragment>
                    )
                })}
            </table>
        </div>
    );
}
 
export default Table;

/*Calories
277kcal

Carbs
0g

Protein
20g

Fat
22g */
/*
[EN] Complete the theaterSeats function to return a matrix (array of arrays)
where each sub-array contains the position of the seats in a row.
example :
[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 

[FR] Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice (tableau de tableaux)
où chaque sous-tableau liste les positions des sieges d'une rangée.
exemple :
[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/

function range(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

function theaterSeats() {
    const columns = range(1, 26);
    const rows = range(1, 100);
    let seats = [];

    for(let i = 0; i < columns.length; i++){
        let currentRow = [];
        for(let j = 0; j < rows.length; j++){
            currentRow.push(`${columns[i]}-${rows[j]}`);
        }
        seats.push(currentRow);
    }
    return  seats;
}

module.exports = theaterSeats;


console.log(theaterSeats()[25][10])
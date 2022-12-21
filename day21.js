const awardBonuses = () => {
    [...Array(100).keys()].slice(1).forEach((id) => {
        id % 3 === 0 && id % 5 === 0 ? console.log(`${id} - JACKPOT! 1 Million and a Yacht!`) :
        id % 3 === 0 ? console.log(`${id} - Vacation!`) :
        id % 5 === 0 ? console.log(`${id} - $100,000 bonus!`) :
        console.log(`${id} - :(`)
    })  
}

awardBonuses();

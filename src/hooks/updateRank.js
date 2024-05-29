let currentRankIndex = 0;
let coins = 0;
const ranks = [
    { name: 'Bronze', points: 0 },
    { name: 'Silver', points: 5000 },
    { name: 'Gold', points: 25000 },
    { name: 'Platinum', points: 100000 },
    { name: 'Diamond', points: 1000000 },
    { name: 'Epic', points: 2000000 },
    { name: 'Legendary', points: 10000000 },
    { name: 'Master', points: 50000000 },
    { name: 'Grandmaster', points: 100000000 },
];
let currentRank = document.getElementById('rank');

export function Rank() {

    function updateRank() {
        for (let i = ranks.length - 1; i >= 0; i--) {
            if (coins >= ranks[i].points && currentRankIndex < i) {
                currentRankIndex = i;
                currentRank.textContent = `${ranks[i].name}`;
                break;
            }
        }
    }

    return {
        ranks,
        updateRank,
        currentRankIndex,
    };
}
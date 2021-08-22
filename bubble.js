function setPlayerStyle(player) {
    player.style.border = "2px solid red";
    player.style.margin = "20px";
    player.style.padding = "5px";
    player.style.borderRadius = "15px";
}

document.getElementById('add-item').addEventListener('click', function () {
    const playersParent = document.getElementById('players');
    const newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    newPlayer.innerHTML = `
                <h1>New Player</h1>
                <p>Ipsum soluta doloremque, iusto cum eaque odio ipsa, nulla ratione dolore ullam tempora ab repudiandae fuga, consectetur ad. Nesciunt exercitationem culpa assumenda perspiciatis ipsum a esse aliquam voluptate laudantium officiis.</p>
    `;
    playersParent.appendChild(newPlayer);
    setPlayerStyle(newPlayer);
})

const players = document.getElementsByClassName("player");
for (const player of players) {
    setPlayerStyle(player);
    }

document.getElementById('players').addEventListener('click', function (event) {
    console.log(event.target.tagName.toLowerCase());
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else if(event.target.tagName.toLowerCase() != 'section') {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})
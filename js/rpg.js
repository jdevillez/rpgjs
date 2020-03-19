let GameManager = {
     setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
     },
     resetPlayer: function(classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 30, 50);
                break;
            case "Rogue":
                player = new Player(classType, 100, 0, 60, 150, 200);
                break;
            case "Mage":
                player = new Player(classType, 80, 300, 30, 0, 50);
                break;
            case "Hunter":
                player = new Player(classType, 200, 0, 30, 200, 100);
                break;         
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/Classe/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>'+ classType +'</h3><p class="health-player">Vie: '+ player.health +'</p><p>Mana: '+ player.mana +'</p><p>Force: '+ player.strenght +'</p><p>Agilité: '+ player.agility +'</p><p>Vitesse: '+ player.speed +'</p></div>';
     },
     setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Quete: Trouve un ennemi!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Trouver un enemi !</a>';
        getArena.style.visibility = "visible";
     },
     setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // Creation d'adversaire
        let enemy00 = new Enemy('Kobold', 100, 0, 100, 100, 100);
        let enemy01 = new Enemy('Murloc', 200, 0, 150, 60, 90);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
     //   console.log(chooseRandomEnemy); 
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;                 
        }
        getHeader.innerHTML = '<p>Quete: Choissi ton attaque</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMove.calcAttack()">Attaque !</a>';
        getEnemy.innerHTML = '<img src="img/Ennemi/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType +  '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Vie: '+ enemy.health +'</p><p>Mana: '+ enemy.mana +'</p><p>Force: '+ enemy.strenght +'</p><p>Agilité: '+ enemy.agility +'</p><p>Vitesse: '+ enemy.speed +'</p></div>';
     }
}
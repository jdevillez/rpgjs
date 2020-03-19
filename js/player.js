let player;

function Player(classType, health, mana, strenght, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strenght = strenght;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMove = {
    calcAttack: function () {
        // 1er qui attaque ?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        // player & adversaire attaque
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.mana > 0) {
                calcBaseDamage = player.strenght * player.mana / 1000;
            } else {
                calcBaseDamage = player.strenght * player.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strenght * enemy.mana / 1000;
            } else {
                calcBaseDamage = enemy.strenght * enemy.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("Tu a attaquer " + playerAttackValues[0] + " points de degats " + playerAttackValues[1] + " fois.");
            if (enemy.health <= 0) {
                alert("Win, F5 pour rejouer");
                getPlayerHealth.innerHTML = 'Vie: ' + player.health;
                getEnemyHealth.innerHTML = 'Vie: 0';
            } else {
                getEnemyHealth.innerHTML = 'Vie: ' + enemy.health;
                // enemy attaque
                let enemyAttackValues = enemyAttack();

                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy a attaquer " + enemyAttackValues[0] + " points de degats " + enemyAttackValues[1] + " fois.");
                if (player.health <= 0) {
                    alert("Perdu, F5 pour rejouer");
                    getPlayerHealth.innerHTML = 'Vie: 0';
                    getEnemyHealth.innerHTML = 'Vie: ' + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = 'Vie: ' + player.health;
                }
            }
        } else if ( getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy a attaquer " + enemyAttackValues[0] + " points de degats " + enemyAttackValues[1] + " fois.");
            if (player.health <= 0) {
                alert("Perdu, F5 pour rejouer");
                getEnemyHealth.innerHTML = 'Vie: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Vie: 0';
            } else {
                getPlayerHealth.innerHTML = 'Vie: ' + player.health;
                
                let playerAttackValues = playerAttack();

                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("Tu a attaquer " + playerAttackValues[0] + " points de degats " + playerAttackValues[1] + " fois.");
                if (enemy.health <= 0) {
                    alert("Win, F5 pour rejouer");
                    getEnemyHealth.innerHTML = 'Vie: 0';
                    getPlayerHealth.innerHTML = 'Vie: ' + player.health;
                } else {
                    getEnemyHealth.innerHTML = 'Vie: ' + enemy.health;
                }
            }
        }
    }

}
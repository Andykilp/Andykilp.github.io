

// on click code
var clicks = 0;
function whenClicked(number) {
    clicks = clicks + number;
    document.getElementById("clicks").innerHTML = clicks;
}
// upgrades code


// cursor
var cursors = 0;
function buyCursor() {
        var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     
        if(clicks >= cursorCost){                                   
            cursors = cursors + 1;                                   
            clicks = clicks - cursorCost;                          
            document.getElementById('cursors').innerHTML = cursors;  
            document.getElementById("clicks").innerHTML = clicks;
        };
        var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       
        document.getElementById('cursorCost').innerHTML = nextCost;
};

// monkey
var monkeys = 0
function buyMonkey() {
        var monkeyCost = Math.floor(100 * Math.pow(1.1,monkeys));     
        if(clicks >= monkeyCost){                                   
            monkeys = monkeys + 1;                                   
            clicks = clicks - monkeyCost;                          
            document.getElementById('monkeys').innerHTML = monkeys;  
            document.getElementById("clicks").innerHTML = clicks;
        };
        var nextCost = Math.floor(100 * Math.pow(1.1,monkeys));       
        document.getElementById('monkeyCost').innerHTML = nextCost;
};












// upgrades for the upgrades so they are not useless

// function firstCursorUpgrade(); {
//     var cursorUpgradeOne = true;
// }
// // check to see if the upgrade should be bought
// if (cursors >= 10 && cursorUpgradeOne === false) {
//     document.createElement("p")
// }









// update code
window.setInterval(function(){
    whenClicked(cursors)
    if (cursorUpgradeOne === true) {
        whenClicked(cursors)
    }
    whenClicked(monkeys * 5)
    
}, 1000);



var friends = require("../data/friends");

module.exports = function(app) {

    app.post("/api/friends", function(req, res){
        console.log(`HA!`)
        var userScore = req.body.answers;
        var totaldiff="";
        var diffarry = [];
        var friendScore = 100;
        for (var i in friends) {
            for (var j in friends[i][2]) {
                // for (var j = 0; i<3;i++){
                var dif = userScore[j] - friends[i][2][j]
                totaldiff =+ Math.abs(dif)
                
            }
            diffarry.push(totaldiff)
            
        }
        var matchIndex = indexOfMin(diffarry)
        var matchedFriend = friends[matchIndex];
        res.send(matchedFriend);
    })
    
}
function indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }

    return minIndex;
}
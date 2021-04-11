// function getElementByXpath(path) {
//     return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//   }
  
//   getElementByXpath(##).click()
//   getElementByXpath(##).value = ""


var Workers = {
    "홍승원" : {},
    "김진호" : {},
    "구건" : {},
    "곽동희" : {},
    "김연담" : {},
    "지승빈" : {},
    "전성민" : {},
    "이경현" : {},
    "권예찬" : {},
    "공재영": {},
    "서동원": {}
}

var time = {
    "weekday": {
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {},
        "7": {},
        "8": {},
        "9": {}
    },
    "holiday" : {
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {},
        "7": {},
        "8": {},
        "9": {}
    },
    "night" : {
        "2": {},
        "3": {},
        "4": {},
        "5": {},
        "6": {},
        "7": {},
        "8": {},
        "9": {}
    }
}

function filter(workers){
    for(let name in workers){
        return (Object.keys(workers[name]).length == 0) ? workers[name] : undefined;
    }
}

var enableWorkers = filter(Workers);
var enableWorkersLength = enableWorkers.length;

function Rank(){};
Rank.prototype.rank = {
    "day" : {
        "AM" : {"w":"2"},
        "PM" : {},
        "PT" : {}
    },
    "night" : {}
}
Rank.prototype.getAM = function(){ return Rank.prototype.rank["day"]["AM"]; }
Rank.prototype.getPM = function(){ return Rank.prototype.rank["day"]["PM"]; }
Rank.prototype.getPT = function(){ return Rank.prototype.rank["day"]["PT"]; }
Rank.prototype.getNight = function(){ return Rank.prototype.rank["night"]; }

function LastRank(){}
LastRank.prototype = Object.create(Rank.prototype);
LastRank.prototype.constructor = LastRank;

function NewRank(){}
NewRank.prototype = Object.create(Rank.prototype);
NewRank.prototype.constructor = NewRank;

var lRank = new LastRank();
var nRank = new NewRank();

var CurrentFirstWorker = (function(){
    if(lRank.getAM[0] in enableWorkers)
    return lRank.getAM[0]
})
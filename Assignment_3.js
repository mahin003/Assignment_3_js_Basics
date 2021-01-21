function kilometerToMeter(kilo) {
    //condition to prevent getting negetive days
    if (kilo < 0) {
        var error = "Distance cannot be negetive";
        return error;
    }
    var meter = kilo * 1000;
    return meter;
}


function budgetCalculator(watch, mobile, leptop) {
    //given prices
    //watch 50
    //phone 100
    //leptop 500

    //condition to prevent getting negetive input
    if (watch < 0 || mobile < 0 || leptop < 0) {
        var error = "Number of items cannot be negetive";
        return error;
    }
    //condition to prevent getting float inputs
    else if (Math.ceil(watch) != watch || Math.ceil(mobile) != mobile || Math.ceil(leptop) != leptop) {
        var error = "Number of items cannot be float";
        return error;
    }
    //calculating totals
    var total = (watch * 50) + (mobile * 100) + (leptop * 500);
    return total;
}


function hotelCost(days) {
    //condition to prevent getting negetive input
    if (days < 0) {
        var error = "Days cannot be negetive";
        return error;
    }
    //condition to prevent getting float inputs
    else if (Math.ceil(days) != days) {
        var error = "Days cannot be float";
        return error;
    }
    var cost = 0;
    for (var i = 1; i <= days; i++) {
        if (i <= 10) {
            cost += 100;
        }
        else if (i <= 20) {
            cost += 80;
        }
        else {
            cost += 50;
        }
    }
    return cost;
}


function megaFriend(names) {
    //names is an array that contains array of names;
    //var names = ["Mahin","Topu","Shahriar","Nabil"];

    //error messege in case I dont havc any friends ie empty array 
    if (names.length == 1 && names[0].length == 0) {
        return "Get some frineds !!!";
    }
    var LongName = names[0];
    for (var i = 0; i < names.length; i++) {
        if (LongName.length < names[i].length) {
            LongName = names[i]
        }
    }
    return LongName;
}


//kiloTometer function call
var distance = kilometerToMeter(1.232);
console.log(distance);


//hotelCost function call
var cost = hotelCost(6);
console.log(cost);

//budget function call
var budget = budgetCalculator(4, 5, 6);
console.log(budget);


//dec;laring an array then function call
var names = ["Mahin", "Topu", "Shahriar", "Nabil"];
var LongName = megaFriend(names);
console.log(LongName);

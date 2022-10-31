function distanceFromHqInBlocks(customerLocation) {
    const hqLocation = 42;
    var blocksFromHQ;
    if(customerLocation > hqLocation) {
        blocksFromHQ = customerLocation - hqLocation; 
    } else {
        blocksFromHQ = hqLocation - customerLocation;
    }
    return blocksFromHQ;
}

function distanceFromHqInFeet(customerLocation) {
    return distanceFromHqInBlocks(customerLocation) * 264;

}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    } else { 
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }  else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance <=2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
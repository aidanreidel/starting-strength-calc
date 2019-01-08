function calcuWeight() {
    let squat = document.getElementById("sqIn");
    let ohp = document.getElementById("ohpIn");
    let dl = document.getElementById("dlIn");
    let bp = document.getElementById("bpIn");
    let pc = document.getElementById("pcIn");

    //This function rounds to the nearest for later use
    let round5 = toRound => Math.round(toRound / 5) * 5;

    //functions
    /* 
        The idea here is that there you want to increase the amount of weight lifted in 4 even as possible steps
        between 45lbs and and work weight
     */
    const bar = 45;
    let wwiii = workWeight => round5((workWeight - bar) * .25) + bar;
    let wwiv = workWeight => round5((workWeight - bar) * .50) + bar;
    let wwv = workWeight => round5((workWeight - bar) * .75) + bar;


    /* 
        Recursively calculate what weight sizes should be added to the bar
        Almost got away with immutability... 
        Call with whatever weight needs to be lifted and an array of the available plates from highest to lowest
        Returns a string
    */
    let plateStack = (remainder, plates, index, stack) => {
        if(remainder % plates[plates.length-1] !== 0) {
            console.error(remainder + "%" + plates[plates.length-1] +" = " + remainder % plates[plates.length-1] + " That's NFG Partner")
            alert(remainder + " can not be broken down with standard weights")
            return "Error!"
        }

        //Undefined was getting preappended to my string so i fixed it
        if (stack === undefined) {
            stack = ""
            index = 0
            //we are only interested what on one half of the bar so..
            console.log((remainder - bar)/2)
            return plateStack(((remainder - 45) / 2), plates, index, stack)
        }

        if (remainder === 0) return stack


        if((remainder - plates[index]) >= 0){
            if (stack !== "") stack += ", "
            return plateStack((remainder - plates[index]), plates, index, (stack + plates[index]));
        }
        else {
            return plateStack(remainder, plates, (index + 1), stack);
        }

    }

    const regularPlates = [45, 35, 25, 10, 5, 2.5, 1.25]
    const olympicPlates = [55, 45, 35, 25, 10, 5, 2.5] 
    //squats
    document.getElementById("td13").innerText = wwiii(squat.value);
    document.getElementById("td14").innerText = wwiv(squat.value);
    document.getElementById("td15").innerText = wwv(squat.value);
    document.getElementById("td131").innerText = plateStack(wwiii(squat.value), regularPlates);
    document.getElementById("td141").innerText = plateStack(wwiv(squat.value), regularPlates);
    document.getElementById("td151").innerText = plateStack(wwv(squat.value), regularPlates);
    document.getElementById("td161").innerText = plateStack((squat.value), regularPlates);
    //overhead press
    document.getElementById("td23").innerText = wwiii(ohp.value);
    document.getElementById("td24").innerText = wwiv(ohp.value);
    document.getElementById("td25").innerText = wwv(ohp.value);
    document.getElementById("td231").innerText = plateStack(wwiii(ohp.value), regularPlates);
    document.getElementById("td241").innerText = plateStack(wwiv(ohp.value), regularPlates);
    document.getElementById("td251").innerText = plateStack(wwv(ohp.value), regularPlates);
    document.getElementById("td261").innerText = plateStack((ohp.value), regularPlates);
    //bench press
    document.getElementById("td43").innerText = wwiii(bp.value);
    document.getElementById("td44").innerText = wwiv(bp.value);
    document.getElementById("td45").innerText = wwv(bp.value);
    document.getElementById("td431").innerText = plateStack(wwiii(bp.value), regularPlates);
    document.getElementById("td441").innerText = plateStack(wwiv(bp.value), regularPlates);
    document.getElementById("td451").innerText = plateStack(wwv(bp.value), regularPlates);
    document.getElementById("td461").innerText = plateStack((bp.value), regularPlates);
    //power cleans
    document.getElementById("td53").innerText = wwiii(pc.value);
    document.getElementById("td54").innerText = wwiv(pc.value);
    document.getElementById("td55").innerText = wwv(pc.value);
    document.getElementById("td531").innerText = plateStack(wwiii(pc.value), regularPlates);
    document.getElementById("td541").innerText = plateStack(wwiv(pc.value), regularPlates);
    document.getElementById("td551").innerText = plateStack(wwv(pc.value), regularPlates);
    document.getElementById("td561").innerText = plateStack((pc.value), regularPlates);
    
    //dead lift
    document.getElementById("td33").innerText = wwiii(dl.value);
    document.getElementById("td34").innerText = wwiv(dl.value);
    document.getElementById("td35").innerText = wwv(dl.value);
    document.getElementById("td331").innerText = plateStack(wwiii(dl.value), olympicPlates);
    document.getElementById("td341").innerText = plateStack(wwiv(dl.value), olympicPlates);
    document.getElementById("td351").innerText = plateStack(wwv(dl.value), olympicPlates);
    document.getElementById("td361").innerText = plateStack((dl.value), olympicPlates);
}
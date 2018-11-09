function calcuWeight() {
    let squat = document.getElementById("sqIn");
    let ohp = document.getElementById("ohpIn");
    let dl = document.getElementById("dlIn");
    let bp = document.getElementById("bpIn");
    let pc = document.getElementById("pcIn");

    //This function rounds to the nearest for later use
    let round5 = toRound => Math.round(toRound/5)*5;

    //functions
    /* The idea here is that there you want to increase the amount of weight lifted in 4 even as possible steps
    between 45lbs and and work weight
     */
    const bar = 45;
    let wwiii = workWeight => round5((workWeight-bar) * .25) + bar;
    let wwiv = workWeight => round5((workWeight-bar) * .50) + bar;
    let wwv = workWeight =>  round5((workWeight-bar)*.75) + bar;


    // Recursively calculate what weight sizes should be added to the bar
    // call with ((warm up || work weight) - bar) / 2
    let plateStack = (remainder, stack) => {
        //base case
        if(remainder < 0) console.error("You fucked up your recursion");
        if(remainder === 0) return stack;
        //Undefined was getting prepeneded to my string so i Killed it
        if(stack === undefined) stack = "";
        //recursive cases
        if((remainder-45) >= 0) return plateStack((remainder-45), (stack + "45 "));
        if((remainder-35) >= 0) return plateStack((remainder-35), (stack + "35 "));
        if((remainder-25) >= 0) return plateStack((remainder-25), (stack + "25 "));
        if((remainder-10) >= 0) return plateStack((remainder-10), (stack + "10 "));
        if((remainder-5) >= 0) return plateStack((remainder-5), (stack + "5 "));
        if((remainder-2.5) >= 0) return plateStack((remainder-2.5), (stack +"2.5 "));

        console.error("The recursion missed")
    }

    //fill the table
    //squats
    document.getElementById("td13").innerText = wwiii(squat.value);
    console.log(plateStack((wwiii(squat.value)-45)/2));
    document.getElementById("td14").innerText = wwiv(squat.value);
    console.log(plateStack((wwiv(squat.value)-45)/2));
    document.getElementById("td15").innerText = wwv(squat.value);
    console.log(plateStack((wwv(squat.value)-45)/2));

    //overhead press
    document.getElementById("td23").innerText = wwiii(ohp.value);
    document.getElementById("td24").innerText = wwiv(ohp.value);
    document.getElementById("td25").innerText = wwv(ohp.value);
    //dead lift
    document.getElementById("td33").innerText = wwiii(dl.value);
    document.getElementById("td34").innerText = wwiv(dl.value);
    document.getElementById("td35").innerText = wwv(dl.value);
    //bench press
    document.getElementById("td43").innerText = wwiii(bp.value);
    document.getElementById("td44").innerText = wwiv(bp.value);
    document.getElementById("td45").innerText = wwv(bp.value);
    //power cleans
    document.getElementById("td53").innerText = wwiii(pc.value);
    document.getElementById("td54").innerText = wwiv(pc.value);
    document.getElementById("td55").innerText = wwv(pc.value);

}
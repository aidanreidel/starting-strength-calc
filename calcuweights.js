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

    //fill the table
    //squats
    document.getElementById("td13").innerText = wwiii(squat.value);
    document.getElementById("td14").innerText = wwiv(squat.value);
    document.getElementById("td15").innerText = wwv(squat.value);
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
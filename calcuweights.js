function calcuWeight() {
    let squat = document.getElementById("sqIn");
    let ohp = document.getElementById("ohpIn");
    let dl = document.getElementById("dlIn");
    let bp = document.getElementById("bpIn");
    let pc = document.getElementById("pcIn");

    //This function rounds to the nearest for later use
    let round5 = toRound => Math.round(toRound / 5) * 5;

    //functions
    /* The idea here is that there you want to increase the amount of weight lifted in 4 even as possible steps
    between 45lbs and and work weight
     */
    const bar = 45;
    let wwiii = workWeight => round5((workWeight - bar) * .25) + bar;
    let wwiv = workWeight => round5((workWeight - bar) * .50) + bar;
    let wwv = workWeight => round5((workWeight - bar) * .75) + bar;


    /* Recursively calculate what weight sizes should be added to the bar
     Almost got away with immutability... the only th
     Call with whatever weight needs to be lifted, DO NOT PASS IN A STRING
     TODO brake out the first call into another function to avoid errors
     Returns a string
    */
    let plateStack = (remainder, stack) => {
        //initialize the recursion
        //Undefined was getting preappended to my string so i fixed it
        if (stack === undefined) {
            stack = "";
            //we are only interested what on one half of the bar so..
            return plateStack(((remainder - 45) / 2), stack);
        }

        //base case
        if (remainder === 0) return stack;
        //helps readability
        if (stack !== "") stack += ", ";
        //recursive cases
        if ((remainder - 45) >= 0) return plateStack((remainder - 45), (stack + "45"));
        if ((remainder - 35) >= 0) return plateStack((remainder - 35), (stack + "35"));
        if ((remainder - 25) >= 0) return plateStack((remainder - 25), (stack + "25"));
        if ((remainder - 10) >= 0) return plateStack((remainder - 10), (stack + "10"));
        if ((remainder - 5) >= 0) return plateStack((remainder - 5), (stack + "5"));
        if ((remainder - 2.5) >= 0) return plateStack((remainder - 2.5), (stack + "2.5"));

        console.error("plateStack's recursive cases missed, potentially < 0 ")
    }

    //fill the table
    //squats
    document.getElementById("td13").innerText = wwiii(squat.value);
    document.getElementById("td14").innerText = wwiv(squat.value);
    document.getElementById("td15").innerText = wwv(squat.value);
    document.getElementById("td131").innerText = plateStack(wwiii(squat.value));
    document.getElementById("td141").innerText = plateStack(wwiv(squat.value));
    document.getElementById("td151").innerText = plateStack(wwv(squat.value));
    document.getElementById("td161").innerText = plateStack((squat.value));

    //overhead press
    document.getElementById("td23").innerText = wwiii(ohp.value);
    document.getElementById("td24").innerText = wwiv(ohp.value);
    document.getElementById("td25").innerText = wwv(ohp.value);
    document.getElementById("td231").innerText = plateStack(wwiii(ohp.value));
    document.getElementById("td241").innerText = plateStack(wwiv(ohp.value));
    document.getElementById("td251").innerText = plateStack(wwv(ohp.value));
    document.getElementById("td261").innerText = plateStack((ohp.value));
    //dead lift
    document.getElementById("td33").innerText = wwiii(dl.value);
    document.getElementById("td34").innerText = wwiv(dl.value);
    document.getElementById("td35").innerText = wwv(dl.value);
    document.getElementById("td331").innerText = plateStack(wwiii(dl.value));
    document.getElementById("td341").innerText = plateStack(wwiv(dl.value));
    document.getElementById("td351").innerText = plateStack(wwv(dl.value));
    document.getElementById("td361").innerText = plateStack((dl.value));
    //bench press
    document.getElementById("td43").innerText = wwiii(bp.value);
    document.getElementById("td44").innerText = wwiv(bp.value);
    document.getElementById("td45").innerText = wwv(bp.value);
    document.getElementById("td431").innerText = plateStack(wwiii(bp.value));
    document.getElementById("td441").innerText = plateStack(wwiv(bp.value));
    document.getElementById("td451").innerText = plateStack(wwv(bp.value));
    document.getElementById("td461").innerText = plateStack((bp.value));
    //power cleans
    document.getElementById("td53").innerText = wwiii(pc.value);
    document.getElementById("td54").innerText = wwiv(pc.value);
    document.getElementById("td55").innerText = wwv(pc.value);
    document.getElementById("td531").innerText = plateStack(wwiii(pc.value));
    document.getElementById("td541").innerText = plateStack(wwiv(pc.value));
    document.getElementById("td551").innerText = plateStack(wwv(pc.value));
    document.getElementById("td561").innerText = plateStack((pc.value));

}
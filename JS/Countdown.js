function startCountdown(options) {
    if (!options.target || !options.element) {
        return;
    }

    let element;

    try {
        element = document.querySelector(options.element);
    } catch {
        return;
    }

    if (!element) {
        return;
    }

    const targetDate = new Date(options.target).getTime();

    if (isNaN(targetDate)) {
        return;
    }

    const timer = setInterval(function () {
        const distance = targetDate - Date.now();

        if (distance < 0) {
            clearInterval(timer);
            element.innerHTML = options.message || "Time's Up!";
            return;
        }

        const days = Math.floor(distance / 86400000);
        const hours = Math.floor((distance % 86400000) / 3600000);
        const minutes = Math.floor((distance % 3600000) / 60000);
        const seconds = Math.floor((distance % 60000) / 1000);

        element.innerHTML =
            days + "d " +
            hours + "h " +
            minutes + "m " +
            seconds + "s";
    }, 1000);
}





























// Same date every year
startCountdown({
    target:"",
    element:"#",
    message:"",
});



// Same date every year
startCountdown({
    target:"Jan 1, 2027",
    element:"#NewYears",
    message:"Happy New Year's!",
});

// Same date every year
startCountdown({
    target:"Jan 6, 2027",
    element:"#Epiphany",
    message:"Happy Epiphany!",
});

// Same date every year
startCountdown({
    target:"Jun 16, 2027",
    element:"#USArmy",
    message:"Happy Birthday Soldiers!",
});

// Different date every year
startCountdown({
    target:"Jan 18, 2027",
    element:"#MartinLutherKing",
    message:"Happy Martin Luther King, Jr. Day!",
});

// Same date every year
startCountdown({
    target:"Jun 19, 2027",
    element:"#Juneteenth",
    message:"Happy Juneteenth!",
});

// Same date every year
startCountdown({
    target:"Feb 2, 2027",
    element:"#GroundhogDay",
    message:"Happy Groundhog Day! 6 more weeks of Winter or is Spring coming?",
});

// Same date every year
startCountdown({
    target:"Feb 14, 2027",
    element:"#ValentinesDay",
    message:"Happy Valentine's Day!",
});

// Different date every year
startCountdown({
    target:"Feb 14, 2027",
    element:"#SuperBowl",
    message:"Happy SuperBowl Sunday! Go Team!",
});

// Same date every year
startCountdown({
    target:"Feb 17, 2027",
    element:"#PresidentsDay",
    message:"Happy President's Day!",
});

// Same/Different date every year
startCountdown({
    target:"Mar 14, 2027",
    element:"#DLSTS",
    message:"Change your clocks foward, Lose one hour of sleep.",
});

// Same date every year
startCountdown({
    target:"Mar 17, 2027",
    element:"#SaintPatricksDay",
    message:"Happy St.Patrick's Day!",
});

// Different date every year
startCountdown({
    target:"Mar 21, 2027",
    element:"#PalmSunday",
    message:"Happy Palm Sunday!",
});
// April 09, 2028 March 25, 2029 April 14, 2030

// Different date every year
startCountdown({
    target:"Mar 26, 2027",
    element:"#GoodFriday",
    message:"Happy Good Friday!",
});
// always friday, April 14, 2028, March 30, 2029, April 19, 2030

// Different date every year
startCountdown({
    target:"Mar 28, 2027",
    element:"#Easter",
    message:"Happy Easter!",
});

// Same date every year
startCountdown({
    target:"Apr 15, 2027",
    element:"#TaxDay",
    message:"Time is up to pay Uncle Sam!",
});

// Different date every year
startCountdown({
    target:"Apr 28, 2027",
    element:"#AdministrativeAppreciationDay",
    message:"Happy Administrative Appreciation Day! You keep everything running. Thank you for all yo do!",
});
// April 26, 2028, April 25, 2029, April 24, 2030
// Always on Wednesdays in april early 20ths

// Different date every year
startCountdown({
    target:"May 31, 2027",
    element:"#MemorialDay",
    message:"Happy Memorial Day!",
});

// Same date every year
startCountdown({
    target:"Jul 4, 2027",
    element:"#IndependenceDay",
    message:"Happy 4th of July!",
});

// Different date every year
startCountdown({
    target:"Jul 13, 2027 20:0:0",
    element:"#AllStarBaseball",
    message:"All Star Game is live! Team American League or Team National League?",
});

// Same date every year
startCountdown({
    target:"Aug 4, 2027",
    element:"#USCoastGuard",
    message:"Happy Birthday Coasties!",
});

// Different date every years
startCountdown({
    target:"Aug 23, 2044",
    element:"#SolarEclipse",
    message:"Have a good time seeing the Solar Eclipse!",
});

// Different date every year (6,2027)
startCountdown({
    target:"Sept 7, 2026 ",
    element:"#LaborDay",
    message:"Happy Labor Day",
});

// Same date every year
startCountdown({
    target:"Sept 18, 2026",
    element:"#USAirForce",
    message:"Happy Birthday Airmen!",
});

// Different date every year
startCountdown({
    target:"Sept 29, 2026",
    element:"#MLBWildCard",
    message:"Wild Card Series!",
});

// Different date every year
startCountdown({
    target:"Oct 12, 2026",
    element:"#ColumbusDay",
    message:"Happy Columbus Day!",
});

// Same date every year
startCountdown({
    target:"Oct 13, 2026",
    element:"#USNavy",
    message:"Happy Birthday Sailors!",
});

// Different date every year
startCountdown({
    target:"Oct 23, 2026",
    element:"#WorldSeries",
    message:"The World Series is here! Let's go teams!",
});

// Same date every year
startCountdown({
    target:"Oct 31,2026",
    element:"#Halloween",
    message:"Happy Halloween!",
});

// Same date every year
startCountdown({
    target:"Nov 1, 2026",
    element:"#AllSaintsDay",
    message:"Happy All Saints Day!",
});

//Different date every year
startCountdown({
    target:"Nov 1, 2026",
    element:"#DLSTE",
    message:"Change your clocks back, Gain one hour of sleep.",
});

// Same/Different date every year
startCountdown({
    target:"Nov 3, 2026",
    element:"#USElection",
    message:"Happy Election Day! Go Vote!",
});

// Same date every year
startCountdown({
    target:"Nov 10, 2026",
    element:"#USMarineCorps",
    message:"Happy Birthday Marines! OOORRRAAAHHH!!!!",
});

// Same date every year
startCountdown({
    target:"Nov 11, 2026",
    element:"#VeteransDay",
    message:"Happy Veterans Day!",
});

// Different date every year
startCountdown({
    target:"Nov 26, 2026",
    element:"#Thanksgiving",
    message:"Happy Thanksgiving!",
});

// Different date every year
startCountdown({
    target:"Nov 27, 2026",
    element:"#BlackFriday",
    message:"Happy Black Friday Shoppimg! Be safe!",
});
//November 26, 2027 November 24, 2028	November 23, 2029 November 29, 2030

// Different date every year
startCountdown({
    target:"Nov 30, 2026",
    element:"#CyberMonday",
    message:"Happy Cyber Monday!",
});

// Different date every year  
// (24,2027) (12,2028) (1,2029) (20,2030) 
// Starts at nightfall, need to add
startCountdown({
    target:"Dec 4, 2026",
    element:"#Hanukkah",
    message:"Happy Hanukkah!",
});

// One Time
startCountdown({
    target:"Dec 18, 2026",
    element:"#Doomsday",
    message:"Avengers Doomsday is out!",
});

// Same date every year
startCountdown({
    target:"Dec 20, 2026",
    element:"#USSpaceForce",
    message:"Happy Birthday Gaurdians!",
});

// Same date every year
startCountdown({
    target: "Dec 25, 2026",
    element: "#Christmas",
    message:"Merry Christmas!",
});

// Same date every year
startCountdown({
    target:"Dec 31, 2026",
    element:"#NewYearsEve",
    message:"Happy New Year's Eve!",
});
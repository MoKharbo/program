const date = new Date();
const dagen = ['Zonderdag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const dagenNu = dagen[date.getDay()];


if (dagenNu == 'Maandag' || dagenNu == 'Dinsdag' || dagenNu == 'Woensdag' || dagenNu == 'Donderdag' || dagenNu == 'Vrijdag') {
    console.log("je hebt school");
} else {
    console.log("je hebt geen school");
}

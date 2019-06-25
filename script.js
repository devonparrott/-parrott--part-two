var eventType = prompt("Event Type");

var tempFahr = prompt("What is the temperature?");

if (eventType == "casual" && tempFahr <=54) {
console.log("Since it is " + tempFahr + " and you are going to a " + eventType + " event, you should wear something comfy and a coat.");
}

if (eventType == "casual" && tempFahr > 54 && tempFahr <=69) {
console.log("Since it is " + tempFahr + " and you are going to a " + eventType + " event , you should wear something comfy and a jacket.");
}

if (eventType == "casual" && tempFahr >=70) {
console.log("Since it is " + tempFahr + " and you are going to a " + eventType + " event, you should wear something comfy and no jacket.");
}

if (eventType == "semi-formal" && tempFahr <=54) {
console.log("Since it is " + tempFahr + " and you are going to a " + eventType + " event, you should wear a polo and a coat.");
}

if (eventType == "semi-formal" && tempFahr > 54 && tempFahr <=69) {
console.log("Since it is " + tempFahr + " and you are going to a " + eventType + " event , you should wear a polo and a jacket.");
}

if (eventType == "semi-formal" && tempFahr >=70) {
console.log("Since it is " + tempFahr + " and you are going to a " + eventType + " event, you should wear a polo and no jacket.");
}

if (eventType == "formal" && tempFahr <=54) {
console.log("Since it is " + tempFahr + " and you are going to a " + eventType + " event, you should wear a suit and a coat.");
}

if (eventType == "formal" && tempFahr > 54 && tempFahr <=69) {
console.log("Since it is " + tempFahr + " and you are going to a " + eventType + " event , you should wear a suit and a jacket.");
}

if (eventType == "formal" && tempFahr >=70) {
console.log("Since it is " + tempFahr + " and you are going to a " + eventType + " event, you should wear a suit and no jacket.");
}























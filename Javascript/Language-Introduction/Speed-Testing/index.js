// user input
let nameVehicleOne = prompt("Enter the name of the first vehicle:")
let speedVehicleOne = parseFloat(prompt("Enter the speed of the fist vehicle:"))
let nameVehicleTwo = prompt("Enter the name of the second vehicle:")
let speedVehicleTwo = parseFloat(prompt("Enter the speed of the second vehicle:"))

// compare speeds
if (speedVehicleOne > speedVehicleTwo) {
    console.log(`${nameVehicleOne} é mais rápido.`);
} else if (speedVehicleOne < speedVehicleTwo) {
    console.log(`${nameVehicleTwo} é mais rápido.`);
} else {
    console.log(`${nameVehicleOne} e ${nameVehicleTwo} têm velocidade igual.`);
}
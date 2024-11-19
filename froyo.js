
let orderInput = prompt("Please enter your froyo order and separate the different entries with commas:");
let orderArr = orderInput.split(",");

const myFroyoOrder = countFlavors(orderArr);

for (const flavor in myFroyoOrder) {
    console.log(flavor + ": " + myFroyoOrder[flavor]);
}    

function countFlavors(order) {
    const froyoOrder = {};
    for (let i = 0; i < order.length; i++) {
        let flavor = order[i];
        if (froyoOrder.hasOwnProperty(flavor)) {
            froyoOrder[flavor]++;
        } else {
            froyoOrder[flavor] = 1;
        }
    }
    return froyoOrder;
}
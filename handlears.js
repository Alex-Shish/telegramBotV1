function sum(ctx) {
//    split the message by space
    const message = ctx.message.text.split(' ');
//    get the first number
    const firstNumber = Number(message[1]);
//    get the second number
    const secondNumber = Number(message[2]);
//    get the result
    const result = firstNumber + secondNumber;
//    send the result Your sum is 5
    ctx.reply(`Your sum is ${result}`);
}

function mult(ctx) {
//    split the message by space
    const message = ctx.message.text.split(' ');
//    get the first number
    const firstNumber = Number(message[1]);
//    get the second number
    const secondNumber = Number(message[2]);
//    get the result
    const result = firstNumber * secondNumber;
//    send the result Your sum is 5
    ctx.reply(`Your multiplication is ${result}`);
}

function div(ctx) {
//    split the message by space
    const message = ctx.message.text.split(' ');
//    get the first number
    const firstNumber = Number(message[1]);
//    get the second number
    const secondNumber = Number(message[2]);
//    get the result
    const result = firstNumber / secondNumber;
//    send the result Your sum is 5
    ctx.reply(`Your division is ${result}`);
}

function root(ctx) {
//    split the message by space
    const message = ctx.message.text.split(' ');
//    get the first number
    const firstNumber = Number(message[1]);
//    get the second number
    const secondNumber = Number(message[2]);
//    get the result
    const result = firstNumber ** (1 / secondNumber);
//    send the result Your sum is 5
    ctx.reply(`Your extraction root is ${result}`);
}
module.exports = {sum, mult, div, root}
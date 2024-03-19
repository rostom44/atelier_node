import chalk from 'chalk';

const wilders = ["max", "flakron", "miraq", "fadili", "zack", "kana"];
const colors = ['red', 'green', 'blue', 'magenta', 'cyan', 'yellow'];

for (let i = 0; i < wilders.length; i++) {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    console.log(chalk[colors[randomColorIndex]](wilders[i]));
}

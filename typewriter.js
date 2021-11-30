const sentence = "hello there from lighthouse labs";
let i = 0;
for (const char of sentence) {
  i += 1;
setTimeout(() => {
  process.stdout.write(char);
  
},500 * i);
}

// for (const char of sentence) {
//   process.stdout.write(char);
//   // console.log(char);
// }
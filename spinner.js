
const callitself = function (st,interval) {
  setTimeout(() => {
    process.stdout.write(st);
  }, interval);
}

callitself('\r|   ',100);
callitself('\r/   ',300);
callitself('\r-   ',500);
callitself('\r\\   ',700);
callitself('\r|   ',900);
callitself('\r/   ',1100);
callitself('\r-   ',1300);
callitself('\r\\   ',1500);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);
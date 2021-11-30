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

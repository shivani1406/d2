const callitself = function (st,interval) {
  setTimeout(() => {
    process.stdout.write(st);
    process.stdout.write('\x07');
  }, interval);
}


callitself('3 sec   ',300);
callitself('5 sec   ',500);
callitself('9 sec   ',900);
callitself('10 sec  ',1000);
callitself('15 sec  ',1500);

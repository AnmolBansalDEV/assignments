let count = 0;
const timer = () => {
  setTimeout(() => {
    count++;
    console.log(count);
    timer();
  }, 1000);
}
timer();

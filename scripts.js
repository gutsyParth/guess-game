const num = Math.floor(Math.random() * 20) + 1;

console.log(num);

fun = () => {
  const x = Number(document.getElementById('myInput').value);
  const t = document.getElementById('state');
  const p = document.getElementById('points');

  const pp = document.querySelector('#points');

  console.log(p, pp);

  console.log(x, num);

  if (x === num) {
    t.textContent = 'WIN 🎊';
    p.textContent = `Your score is ${p.textContent}`;
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (x < num) {
    t.textContent = 'LOW 📉';
    p.textContent = Number(p.textContent) - 1;
  } else {
    t.textContent = 'HIGH 📈';

    p.textContent = Number(p.textContent) - 1;
  }
};

document.querySelector('#again').addEventListener('click', function () {
  window.location.reload();
});

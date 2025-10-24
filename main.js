const out = document.getElementById('out');
const btn = document.getElementById('btn');
let n = Number(localStorage.getItem('clicks') || 0);
out.textContent = n;
btn.addEventListener('click', () => {
  n += 1;
  localStorage.setItem('clicks', n);
  out.textContent = n;
});

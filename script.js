// Floating hearts animation
document.addEventListener('click', function(e) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = (e.clientX - 14) + 'px';
  heart.style.top = (e.clientY - 14) + 'px';
  document.getElementById('hearts-container').appendChild(heart);
  setTimeout(() => heart.remove(), 2800);
});
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('theme-toggle');
  btn && btn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
  // 초기 테마 설정
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
}); 
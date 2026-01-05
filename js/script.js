/* PAGE SWITCH */
const links=document.querySelectorAll('.nav a[data-page]');
const sections=document.querySelectorAll('section');

links.forEach(link=>{
  link.onclick=()=>{
    links.forEach(l=>l.classList.remove('active'));
    sections.forEach(s=>s.classList.remove('active'));
    link.classList.add('active');
    document.getElementById(link.dataset.page).classList.add('active');
  }
});

/* DARK MODE TEXT */
const toggle=document.getElementById('themeToggle');
function updateText(){
  toggle.textContent=document.body.classList.contains('dark')
    ? 'Light Mode'
    : 'Dark Mode';
}
if(localStorage.theme==="dark") document.body.classList.add("dark");
updateText();
toggle.onclick=()=>{
  document.body.classList.toggle("dark");
  localStorage.theme=document.body.classList.contains("dark")?"dark":"light";
  updateText();
};
const close = document.querySelectorAll('span');
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener('click', ()=> {
    close[i].parentElement.style.opacity = 0;
    setTimeout(() => {
      close[i].parentElement.style.display = "none";
      close[i].parentElement.remove();
    }, 500);
  })
}
export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const k = Math.floor(total / 100);
      let i = 0
      const timer = setInterval(() => {
        i = i + k;
        numero.innerText = i
        if (i > total) {
          clearInterval(timer)
          numero.innerText = total

        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const observeTarget = document.querySelector('.numeros')
  const observer = new MutationObserver(handleMutation)

  observer.observe(observeTarget, { attributes: true });
}

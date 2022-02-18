export default class AnimaNumeros{
  constructor(numeros, observerTarget, observerClass){
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    // bind do handle mutation

    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do DOM
  // com número em seu texto
  // incrementa a partir de 0 até o final.
   static incrementarNumero(numero){
    const total = +numero.innerText;
      const k = Math.floor(total / 100);
      let i = 0;
      const timer = setInterval(() => {
        i += k;
        numero.innerText = i
        if (i > total) {
          numero.innerText = total
          clearInterval(timer)
        }
      }, 25 * Math.random());
  }


  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  // função que ocorre quando a mutação acontece
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // adiciona o mutationObserver quando a classe 'ativo'
  // é adicionada ao elemento target

  addMutationObserver(){
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init(){
    if(this.numeros.length && this.observerTarget){
      this.addMutationObserver();
    }
    return this;
  }
}


const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //const today = "27/02"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  /*O localStorage é um objeto que guarda na memória do browser informações.*/

  /*Para salvar é preciso transformar o objeto em string, e pra isso utilizaos o JSON.stringify*/
  /*Utilizamos o localStorage sempre que houver modificações no formulário*/
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }

/**
 * Aqui são pegas as informações que estão em texto, e é transformado para objeto
 */
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()

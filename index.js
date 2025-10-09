/*function showResult(response){
const chatResponse = response.data.answer
new Typewriter('#contents', {
  strings: [chatResponse],
  autoStart: true,
  delay:10,
  cursor:"",
});
}*/

const formElement = document
  .getElementById("form-generate")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    new Typewriter("#contents", {
      strings: ["damilola osyemi"],
      autoStart: true,
      delay: 10,
      cursor: "",
    });

    /*const input = document.querySelector("input").value

const apiKey =""
const prompt =""
const context =""
const apiUrl =""

axios.get().then(showResult)*/
  });

function showResult(response) {
  const chatResponse = response.data.answer;
  new Typewriter("#contents", {
    strings: [chatResponse],
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

const formElement = document
  .getElementById("form-generate")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("input").value;

    const apiKey = "ft2ff28777530dba3dddb311o0464bef";
    const prompt = `Generate anything that has to do with Beauty tips  ${input}`;
    const context =
      "Give three precise answers and be accurate. let it be in basic HTML and separate each answer with a <br/> let the answer start from another paragraph, make the title bold and sign by Damsel Nails AI inside <strong> element at the end of the sentense NOT at the begining in a new paragraph";
    const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let contentElements = document.getElementById("contents");
    contentElements.classList.remove("hidden");
    contentElements.innerHTML = `<div class="blink">Generating.. ${input}</div>`;
    axios.get(apiUrl).then(showResult);
  });

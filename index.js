function generatedMessage(response){
   
    new Typewriter('#message', {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor: "",
      });    

      
}


function generateMotivation(event){
    event.preventDefault();

    let apiKey = "ee030ced13bec32faetaa24oa4e6af48";
      let prompt = "Motivate Rafa to go through his fitness routine, his friend Lou (Lou is a woman) will be waiting at the finish line";
      let context = "You are a energetic and fun AI assist, I need you to help me motivate my friend Rafa. He needs inspirational and yet short messages about his fitness and skin care. Your answer must be in basic HTML, no css, please follow the instructions. Your answer must be in Portuguese";
      let apiURL =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
      let messageElement = document.querySelector("#message");
      messageElement.innerHTML = "Espera querido.."
      messageElement.classList.remove("hidden")


      axios.get(apiURL).then(generatedMessage);

}

let button = document.querySelector("#motivation-generator");
button.addEventListener("click", generateMotivation);




function choosePath(path){
    const output = document.getElementById('output')
    const pathButtons = document.getElementById('path-buttons')
    const titulo = document.getElementById('titulo')

    titulo.style.display ='none'

    pathButtons.style.display='none'
    output.innerHTML='';

    if(path==='frontend'){
      
        output.innerHTML = ` <p>Legal! Você escolheu desenvolvimento Front-End.</p>
        <p>Agora escolha um framework:</p>
        <button onclick="chooseFramework('React')">React</button>
        <button onclick="chooseFramework('Vue')">Vue</button>
      `
    }

    else if (path === 'backend'){
        output.innerHTML = ` <p>Bacana! Você escolheu desenvolvimento Back-end.</p>
        <p>Escolha uma linguagem:</p>
        <button onclick="chooseLanguage('C#')">C#</button>
        <button onclick="chooseLanguage('Java')">Java</button>`
    }
}

function chooseFramework(framework){

    const output = document.getElementById( 'output' )
    const pathButtons = document.getElementById('path-buttons')
    const titulo = document.getElementById('titulo')

    titulo.style.display ='none'
    pathButtons.style.display='none'
    output.innerHTML=`<p>Muito bem, você escolheu: ${framework}.</p>
    <p>Você gostaria de se especializar em ${framework} ou gostaria de ser um dev fullstack?</p>
    <button onclick="specialize()">Especializar</button>
    <button onclick="fullstack()">Fullstack</button>
  `;
}

function chooseLanguage(language){
    const output = document.getElementById( 'output' )
    const pathButtons = document.getElementById('path-buttons')

    pathButtons.style.display='none'
    output.innerHTML=`<p> Que legal, você escolheu: ${language}.</p>
    <p>Você gostaria de se especializar em ${language} ou gostaria de ser um dev fullstack?</p>
    <button onclick="specialize()">Especializar</button>
    <button onclick="fullstack()">Fullstack</button>
  `;}

  function specialize(){
    const output = document.getElementById( 'output' )
    const pathButtons = document.getElementById('path-buttons')

    const subtitulo = document.getElementById('subtitulo')

    subtitulo.style.display ='none'


    pathButtons.style.display='none'
    output.innerHTML=` <h1> Jornada Tech!</h1>
    <p>Que incrivel!</p>
    <p>Quais outras tecnologias você gostaria de se especializar?:</p>
    <input type="text" id="techInput" placeholder="Insira a tecnologia...">
    <button onclick="addTechnology()">adicionar tecnologia</button>
    <div id="techList"></div>
    
    <button onclick="finish()" id='finalizar'> Finalizar</button>
  `
}

function fullstack(){
  const output = document.getElementById( 'output' )
  const pathButtons = document.getElementById('path-buttons')

  const subtitulo = document.getElementById('subtitulo')

  subtitulo.style.display ='none'

  pathButtons.style.display='none'
  output.innerHTML=` <h1> Jornada Tech!</h1>
  <p>UAU!</p>
  <p>Você tem um longo caminho pela frente, dev's <span>fullstack</span> são incriveis! Boa sorte na sua caminhada!!!</p>
  </div>
  
`
}




function addTechnology(){
    const techInput = document.getElementById('techInput')
    const techList = document.getElementById('techList')

    const technology = techInput.value
    techList.innerHTML+=`<p>${technology}</p>`
    techInput.value = ''}

    function finish() {
      const output = document.getElementById('output');
      const pathButtons = document.getElementById('path-buttons');
      const techList = document.getElementById('techList');
  
      pathButtons.style.display = 'none';
      output.innerHTML = '';
  
      output.innerHTML += `<h1> Jornada Tech!</h1>
      <p>Parabéns! Você fez ótimas escolhas!!!</p>
                           <p>Estas são as tecnologias que você escolheu se especializar:</p>`;
  
      const techItems = techList.querySelectorAll('p');  
      const technologies = [];
  
      techItems.forEach(item => {
          technologies.push(item.textContent);
      });
  
      output.innerHTML += technologies.join('<br>'); 
  }
  
  
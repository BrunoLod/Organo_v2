
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario';
import Times from './Componentes/Times';
import Footer from './Componentes/Footer/Footer';

//OBS:

{/*

O v4, apelidado como uuidv4, é uma biblioteca criada, 
que cria id's aleatórios, como forma de gerar uma identificação
única aos itens passados. 

*/}

// Entendendo o código: 

{/* 

Irei adicionar tanto aqui quanto em outras partes 
minhas anotações sobre o código / explicações, com o objetivo
de entendê-lo e, assim, aprender. 

*/}

{/* 

Aqui estou importando o css do App.js, bem como 
os componentes Reacts que formam a página. Além disso, 
estou importando um pacote React, o useState, que se
trata de um "hook", utilizado para adicionar estado 
a componente de função do React. Ele permite que eu 
adicione estado a um componente sem a necessidade de
ter de o transformar em uma classe. 

A função useState retorna dois valores, sendo o estado 
e o setEstado, sendo algum valor inicial qualquer atribuido 
ao estado, a qual é sobreescrita por meio do setEstado

Mas o que são os estados ? 

Os estados são a forma como estão (ou está) os dados 
em um determinado instante. Nesse sentido, quando utilizo
de tal função assumo que irei precisar armazenar os dados 
em uma forma e tempo, permitindo que esse, porém, possa
ser alterado pelo usuário conforme o seu desejo. 

*/}

function App() {

  {/* 
  
  Utilizando useState para criar uma variável estado, "colaboradores", 
  que no primeiro momento assume valor de um array vazio, seguido
  pelo "setColaboradores", que permite sobrescrever novas entradas
  na aplicação, conforme o interesse do usuário. 

  Podemos compreender que o primeiro - que é o estado - é o que é lido
  ou lê, enquanto que o segundo é o que escreve o novo estado do 
  objeto que foi passado na entrada pelo usuário. 

  */}

  {/* 

  Para fins dessa aplicação, desejo que mediante ao 
  input de informações de usuário, essas sejam armazenadas
  e produzam uma alteração no estado da aplicação, produzindo
  novos efeitos. 
        
  Em termos de contexto, as informações contraídas
  via input objetivam criar o nome do membro do time, 
  seu breve resumo, o time a que pertence e sua foto. 
    
  Para isso, eu precisso criar um hook que interliga 
  a entrada do usuário com a variável interna da aplicação. 
  
  */}

  /* 
  
  Na atual etapa do código, desejo poder a partir de uma
  entrada do tipo cor alterar a cor dos times. Para que 
  qualquer coisa possa ser alterado no React precisa
  estar envolto sob uma "égide" de estado, então no que 
  era uma variável constante, transformo para uma de 
  estado, a partir do uso do useState( )
  
  */

  
  const [times, setTimes] = useState(
    [{
      id: uuidv4(),
      favorito : false,
      nome: 'Programação',
      corTime: '#133B51 ',
    },
    {
      id: uuidv4(),
      favorito : false,
      nome: 'Front-End',
      corTime: '#35B6FE',
    },
    {
      id: uuidv4(),
      favorito : false,
      nome: 'Data Science',
      corTime: '#1EE0B1',
    },
    {
      id: uuidv4(),
      favorito : false,
      nome: 'Devops',
      corTime: '#F34441',
    },
    {
      id: uuidv4(),
      favorito : false,
      nome: 'UX e Design',
      corTime: '#EE22CE',
    },
    {
      id: uuidv4(),
      favorito : false,
      nome: 'Mobile',
      corTime: '#FFBA05',
    },
    {
      id: uuidv4(),
      favorito : false,
      nome: 'Inovação e Gestão',
      corTime: '#FF8A29',
    },
    {
      id: uuidv4(),
      favorito : false,
      nome: 'Inteligência Artificial',
      corTime: '#7B71FF',
    }]
  );

  
  const inicial = [
    {
      id: uuidv4(),
      nome: 'Victor Nemoto',
      cargo: 'Desenvolvedor fullstack e fazedor de opinião',
      imagem: 'https://imgur.com/NlpHcvt.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Bruno Loducca',
      cargo: 'Desenvolvedor de IA, interfaces, poeta e emo',
      imagem: 'https://github.com/BrunoLod.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'JPeg',
      cargo: 'Designer, artista visual, escritora e dark indie',
      imagem: 'https://imgur.com/zwioG3F.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Diego Picasso',
      cargo: 'Otaku fedido, produtor de conteúdo, foi ao Japão e filmmaker',
      imagem: 'https://imgur.com/wREgNbX.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Victor Nemoto',
      cargo: 'Desenvolvedor fullstack e fazedor de opinião',
      imagem: 'https://imgur.com/NlpHcvt.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Bruno Loducca',
      cargo: 'Desenvolvedor de IA, interfaces, poeta e emo',
      imagem: 'https://github.com/BrunoLod.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'JPeg',
      cargo: 'Designer, artista visual, escritora e dark indie',
      imagem: '	https://imgur.com/zwioG3F.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Diego Picasso',
      cargo: 'Otaku fedido, produtor de conteúdo, foi ao Japão e filmmaker',
      imagem: 'https://imgur.com/wREgNbX.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Victor Nemoto',
      cargo: 'Desenvolvedor fullstack e fazedor de opinião',
      imagem: 'https://imgur.com/NlpHcvt.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Bruno Loducca',
      cargo: 'Desenvolvedor de IA, interfaces, poeta e emo',
      imagem: 'https://github.com/BrunoLod.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'JPeg',
      cargo: 'Designer, artista visual, escritora e dark indie',
      imagem: '	https://imgur.com/zwioG3F.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Diego Picasso',
      cargo: 'Otaku fedido, produtor de conteúdo, foi ao Japão e filmmaker',
      imagem: 'https://imgur.com/wREgNbX.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Victor Nemoto',
      cargo: 'Desenvolvedor fullstack e fazedor de opinião',
      imagem: 'https://imgur.com/NlpHcvt.png',
      time: times[3].nome
    },
    {
      nome: 'Bruno Loducca',
      cargo: 'Desenvolvedor de IA, interfaces, poeta e emo',
      imagem: 'https://github.com/BrunoLod.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'JPeg',
      cargo: 'Designer, artista visual, escritora e dark indie',
      imagem: '	https://imgur.com/zwioG3F.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Diego Picasso',
      cargo: 'Otaku fedido, produtor de conteúdo, foi ao Japão e filmmaker',
      imagem: 'https://imgur.com/wREgNbX.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Victor Nemoto',
      cargo: 'Desenvolvedor fullstack e fazedor de opinião',
      imagem: 'https://imgur.com/NlpHcvt.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Bruno Loducca',
      cargo: 'Desenvolvedor de IA, interfaces, poeta e emo',
      imagem: 'https://github.com/BrunoLod.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'JPeg',
      cargo: 'Designer, artista visual, escritora e dark indie',
      imagem: '	https://imgur.com/zwioG3F.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Diego Picasso',
      cargo: 'Otaku fedido, produtor de conteúdo, foi ao Japão e filmmaker',
      imagem: 'https://imgur.com/wREgNbX.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Victor Nemoto',
      cargo: 'Desenvolvedor fullstack e fazedor de opinião',
      imagem: 'https://imgur.com/NlpHcvt.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'Bruno Loducca',
      cargo: 'Desenvolvedor de IA, interfaces, poeta e emo',
      imagem: 'https://github.com/BrunoLod.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'JPeg',
      cargo: 'Designer, artista visual, escritora e dark indie',
      imagem: '	https://imgur.com/zwioG3F.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'Diego Picasso',
      cargo: 'Otaku fedido, produtor de conteúdo, foi ao Japão e filmmaker',
      imagem: 'https://imgur.com/wREgNbX.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'Victor Nemoto',
      cargo: 'Desenvolvedor fullstack e fazedor de opinião',
      imagem: 'https://imgur.com/NlpHcvt.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      nome: 'Bruno Loducca',
      cargo: 'Desenvolvedor de IA, interfaces, poeta e emo',
      imagem: 'https://github.com/BrunoLod.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      nome: 'JPeg',
      cargo: 'Designer, artista visual, escritora e dark indie',
      imagem: '	https://imgur.com/zwioG3F.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      nome: 'Diego Picasso',
      cargo: 'Otaku fedido, produtor de conteúdo, foi ao Japão e filmmaker',
      imagem: 'https://imgur.com/wREgNbX.png',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      nome: 'Victor Nemoto',
      cargo: 'Desenvolvedor fullstack e fazedor de opinião',
      imagem: 'https://imgur.com/NlpHcvt.png',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      nome: 'Bruno Loducca',
      cargo: 'Desenvolvedor de IA, interfaces, poeta e emo',
      imagem: 'https://github.com/BrunoLod.png',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      nome: 'JPeg',
      cargo: 'Designer, artista visual, escritora e dark indie',
      imagem: '	https://imgur.com/zwioG3F.png',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      nome: 'Diego Picasso',
      cargo: 'Otaku fedido, produtor de conteúdo, foi ao Japão e filmmaker',
      imagem: 'https://imgur.com/wREgNbX.png',
      time: times[7].nome
    },
  ]

    // Criando o hook:

  {/* 

    Cria o hook por meio do useState, sendo o prefixo "use", 
    uma referência ao Hook. Ele cria duas variáveis que são 
    armazenadas num array - matriz -, sendo uma para a leitura, 
    valor, e outra para escrever, setValor. 

  */}

  const [colaboradores, setColaboradores] = useState(inicial)

  
  function deletarColaborador(id) { 
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.corTime = cor;
      }
      return time;
    }));
  }

    {/* 

  Função recebe um colaborador como entrada, imprimindo-o no 
  console para depuração, utilizando a função setColaboradores, 
  proveniente do useState, para atualizar o estado de colaboradores, 
  adicionando um novo colaborador na lista. 
  
  */}

  const colaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])

  }

  {/* 

  Se eu quisesse fazer a função de baixo explicitando 
  tanto o nome do time quanto a sua respectiva cor, eu
  deveria fazer o seguinte: 

  function cadastrarTime(nomeTime, cor) {
    const novoTime = { nome: nomeTime, cor: cor, id: uuidv4() };
    setTimes([...times, novoTime]); 
  }

  Perguntar ao professor, amanhã, se isso está correto. 

  */}

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  /* 
  
  Função que resolve as questões dos favoritos, isto é, 
  se tal colaborador é considerado ou não favorito. Para isso, 
  a função aplica um valor x para favorito, que em um momento 
  será "de sim", com o coração preenchido, e em outro "de não", 
  com o coração vazio. 
  
  */

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map( colaborador => {
      if(colaborador.id === id) colaborador.favorito =! colaborador.favorito;
      return colaborador
    }))
  }

  {/* 
  
  Esse trecho representa a renderização do componente App. 
  Cria um elemento "<div>" com um nome de classe "App", por meio da 
  qual, posteriormente, permitirá estilizá-la via css. 
   
  Da mesma forma, renderiza o componente <Banner/> e <Formulario/>, 
  ambos componentes React. No componente Formulario há uma prop, que 
  significa properties, ou propriedades, sendo no caso o "colaboradorCadastrado", 
  cuja função é atualizar o estado de colaboradores, por meio da função
  colaboradorAdicionado.  

  */}

  return (

    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        nomesDosTimes={times.map(time => time.nome)}
        colaboradorCadastrado={colaborador => colaboradorAdicionado(colaborador)} />

      {/* 
      
      Criando uma "tag" Times por meio  da qual eu crio 
      o conjunto dos times, sem que eu precise manualmente 
      criar os times um a um, segundo esse formato:
      
      <Times>
            Programação
      <Times/>

      A criação dos times, desse modo, é realizado por meio do 
      método map, que mapeia os elementos presentes em times, 
      um array composto por dicionário, iterando cada elemento, 
      na medida em que cada iteração é passada para o termo "time", 
      o primeiro termo após o "(", que se trata de uma fução de callback
      posta num formato de arrow function, a qual se refere ao 
      componente React "Times". 
      
      O componente "Times" é então renderizado para cada elemento do array
      "times", definido acima. 

      Entendendo uma função de callback:

      A função de callback se refere a uma função que "o seu nome" é 
      passado como argumento para uma função, ao mesmo tempo que
      armazena a sua saída, podendo ser chamado novamente para uma
      atualização de novas entradas com as quais, posteriormente, 
      o componente react poderá renderizar a informação.  

      Entendendo os demais parâmetros:

      key :   chave que armazena o nome de cada time. Trata-se de uma 
              medida de diferenciação para cada time, que será salutar 
              para a manipulação desses, informando ao React quando 
              atualizar um time, renderizando-o e afins. Ela é passada
              ao componente Times.  

      nome :  A propriedade nome é passado ao componente Times, mediante à iteração 
              inicialmente realizada pelo método map, que "armazena", através
              do mapeamento do array, o valor de cada elemento em que passou 
              inclusive a variável nome, referente aos nomes de cada time. 

      corDosCards: propriedade que armazena a cor de cada time, as quais são 
                   passadas posteriormente ao componente React, para que 
                   renderize cada time com a sua respectiva cor. 
      
      */}

      {times.map(time =>

        <Times
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          time={time}
          key={time.nome}
          nome={time.nome}
          
          /*
          
          O trecho abaixo filtra os colaboradores 
          com base no nome do time, retornando apenas
          aqueles cujo time é iguao ao nome especificado. 
          
          Entendendo o código:
          
          O filter é um método array em JavaScript que cria 
          um novo array com todos os elementos que passaram num 
          teste implementado pela função fornecida, retornando apenas
          os elementos que atenderam determinada condição. 
          
          O teste implementado é sobre se o time do colaborador
          é equivalente ao nome do time, que, se for, retorna
          o time, que será armazenado na variável colaboradores. 
          
          */

          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}

        />)}

      <Footer />

    </div>
  );
}

export default App;

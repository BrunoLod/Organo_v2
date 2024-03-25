import './Formulario.css'
import TextField from '../TextField/TextField'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'


{/* Definie um parâmetro props na função Formulario.*/ }

const Formulario = (props) => {

    {/* 
    
    Cria quatro hooks, responsáveis por 
    receber o valor de cada item e sobreescrevo 
    à medida que é alterado pelo usuário. 

    */}

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')


    {/* 

    Função chamada quando o formulário é submetido, 
    cadastrando os elementos pertinentes através da 
    função colaboradorCadastrado, chamada pelo recurso prop. 

    */}

    const aoSalvar = (evento) => {

        {/* Note que estou interceptando o evento JavaScript, que 
            é o submeter do botão, impedindo, em sequência, que ele
            utilize o seu comportamento padrão, que seria recarregar 
            a página, por meio do comando abaixo. */}

        evento.preventDefault()

        props.colaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })

        /* 
        
        Forma com a qual ao clicar no botão e
        adicionar o colaborador ao time, o formulário 
        é resetado, de modo que as informações 
        passadas não permanecem. */

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')


    }

    const aoSubmeterTime = (evento) => {

        {/* Note que estou interceptando o evento JavaScript, que 
            é o submeter do botão, impedindo, em sequência, que ele
            utilize o seu comportamento padrão, que seria recarregar 
            a página, por meio do comando abaixo. */}

        evento.preventDefault()

        props.cadastrarTime({
            nome : nomeTime, 
            cor : corTime
        })

        /* 
        
        Forma com a qual ao clicar no botão e
        adicionar o time, o formulário 
        é resetado, de modo que as informações 
        passadas não permanecem. */

        setNomeTime('')
        setCorTime('')

        /* Dúvida acima: perguntar ao professor porque devo 
           passar ambos os 'sets', e não apenas setTimes, conforme
           a função cadastrarTime em App.js. */


    }

    return (


        <section className='formulario-container'>
            <div className='formulario'>

                {/* 
    
            Meu objetivo é fazer com que a aplicação escute 
            as ações do usuário, de modo que mediante a uma 
            inserção de informação, produza um comportamento
            correspondente a intenção desse. 
    
            Como fazer isso ? Existem alguns recursos possíveis, 
            porém o que irei utilizar será o onSubmit: 

            */}


                <form onSubmit={aoSalvar}>

                    <h2>Crie o card dos membros</h2>

                    {/* Estou 'setando' como obrigatório determinados itens, por meio dos quais
                    crio um tipo de dupla validação, na forma que, além de submerter o formulário, 
                    defino que tais parâmetros precisam ser obrigatóriamente fornecidos, de modo que 
                    na ausência desses o submite não é realizado. */}

                    <TextField
                        obrigatorio={true}
                        label="Nome"
                        placeholder="Digite seu nome"
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />

                    <TextField
                        obrigatorio={true}
                        label="Cargo"
                        placeholder="Digite seu cargo"
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />

                    <TextField
                        obrigatorio={true}
                        label="Imagem"
                        placeholder="Endereço da imagem em formato : ' link.png ' "
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label="Time"
                        itens={props.nomesDosTimes}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />

                    <Botao>
                        Criar card
                    </Botao>

                </form>
            </div>
            <div className='formulario'>
                <form onSubmit={aoSubmeterTime}>

                    <h2>Crie um novo time</h2>

                    {/* Estou 'setando' como obrigatório determinados itens, por meio dos quais
                    crio um tipo de dupla validação, na forma que, além de submerter o formulário, 
                    defino que tais parâmetros precisam ser obrigatóriamente fornecidos, de modo que 
                    na ausência desses o submite não é realizado. */}

                    <TextField
                        obrigatorio={true}
                        label="Nome do time"
                        placeholder="Digite o nome do time"
                        valor={nomeTime}
                        aoAlterado={valor => setNomeTime(valor)}
                    />

                    <TextField
                        obrigatorio={true}
                        type="color"
                        label="Cor"
                        placeholder="Informe a cor do time"
                        valor={corTime}
                        aoAlterado={valor => setCorTime(valor)}
                    />

                    <Botao className='botao'>
                        Crie um novo time
                    </Botao>

                </form>
            </div>

        </section>
    )

}

export default Formulario
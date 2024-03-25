import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Colaboradores.css'

/* 

Guardando na respectiva variável os seguintes parâmetros. 

Ao invés de eu usar o recurso "props", por meio do qual 
posteriormente passaria "props.parâmetro" um a um, utilizei
de um recurso do JavaScript, que me permite "explodir" o 
props, assemelhando, desse modo, a dinâmica de uma função 
em Python, na qual passo os parâmetros que internamente
serão usados nela. 


Note também que estou passando um recurso de estilo no próprio
js, e não no css, por quê ? Isso se justifica, pois quero tornar
a aplicação interativa, de modo que o cabeçalho tenha uma cor
equivalente ao time no qual ela se encontra. Assim, eu passo, 
conforme abaixo, a atribuição style, chaves duplas e os respectivos
parâmetros. 

*/

/* 

Ctrl + espaço = abre o conjunto de possibilidades, como className, size 
e etc, que o VSCode nos permite. Como já citei o size, irei aproveitar o 
ensejo: size se refere ao tamanho de um objeto que estou utilizando. No caso, 
tal objeto está vindo da biblioteca AiFillCloserCircle, que se trata de um 
ícone de "x", expressando a ideia de deletar. Ao passar o size entre chaves 
indico o tamanho que desejo que fique o ícone. 

*/

/* 

Amanhã entender melhor o trecho a seguir e, com o caderno "reconfigurado"
realizar as pertinentes anotações. Trecho: onClick={() => aoDeletar(colaborador.id)}. 

*/

const Colaborador = ({ colaborador, corCard, aoDeletar, aoFavoritar}) => {

    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    const propsfavorito = {

        size: 25, 
        onclick: favoritar
    }

    return (

        <li className='lista-colaboradores'>
            <div className='colaborador'>

                <AiFillCloseCircle 
                    size={25} 
                    className='deletar' 
                    onClick={() => aoDeletar(colaborador.id)} 
                />
                <div className='cabecalho' style={{background : corCard}}>
                    <img src={colaborador.imagem} alt={colaborador.nome} />
                </div>
                <div className='rodape'>
                    <h4>{colaborador.nome}</h4>
                    <h5>{colaborador.cargo}</h5>

                    {/* 
                    
                    Criando uma <div> que me trará um ícone de 
                    favorito, criando um condicional ternário. 
                    
                    */}

                    <div className="favorito">
                        {colaborador.favorito 
                            ? <AiFillHeart size={25} onClick={favoritar} color="ff0000"/> 
                            : <AiOutlineHeart size={25} onClick={favoritar}/>}
                    </div>
                </div>

            </div>
        </li>

    )

}

export default Colaborador
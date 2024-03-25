import './Botao.css'

const Botao = (props) => {

    {/* Recebendo o parâmetro "props" associado ao children, 
        termo que referencia ao item passado entre a tag button, 
        proveniente do index.js da pasta Formulario */}

    return(<button className='botao'>
        {props.children}
    </button>)

}

export default Botao
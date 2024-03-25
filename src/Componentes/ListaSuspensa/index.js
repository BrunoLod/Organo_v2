import './ListaSuspensa.css'; // Importa o arquivo CSS para estilização do componente

const ListaSuspensa = (props) => { // Define o componente ListaSuspensa

    return (

        <div className='lista__suspensa'> {/* Contêiner principal do componente */}

            {/* Rótulo para descrever o nome da lista suspensa */}
            <label>

                {/* Exibe o texto passado via props */}
                {props.label}

            </label>

            {/* 
            
            Elemento select criado, que se trata da prórpria lista em si, 
            a qual armazana três parâmetros, por assim dizer. 
            
            onChange reage a uma alteração do usuário, assim que algum 
            elemento da lista é selecionado. 
            
            required verifica se passagem é obrigatória. 
            
            value é o valor do elemento da lista, seu nome. 
            
            */}
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.required}
                value={props.valor}> {/* Valor do elemento da lista suspensa */}
                <option value={""}></option>
                {/* Mapeia os itens para criar opções na lista */}

                {props.itens.map(item => {
                    return <option
                                key={item}>{item}
                            </option> 
                // Cria uma opção para cada item por meio do recurso key, que garante 
                // aos itens uma identificação própria. 
                
                })}
            </select>

        </div>
    );
};

export default ListaSuspensa; // Exporta o componente ListaSuspensa

import Colaborador from '../Colaboradores';
import './Times.css';


const Times = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {


    return (

        /* 
        
        Criando um condicional que me retorna os times, 
        caso eles apresentam um valor de array maior que 0, 
        ilustrando a presença do card de algum colaborador. 
        
        */

        colaboradores.length > 0 &&
        <section className='time' style={{backgroundImage: 'url(/images/fundo.png)'}}>
            <input type='color' className='input-color' value={time.corTime}  onChange={evento => mudarCor(evento.target.value, time.id)} />
            <h3 style={{ borderBottomColor: time.corTime }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {

                    return (
                        <Colaborador 
                            corCard={time.corTime} 
                            key={colaborador.nome} 
                            colaborador={colaborador} 
                            aoDeletar={aoDeletar} 
                            aoFavoritar={aoFavoritar}
                        />);
                }
                )
                }
            </div>
        </section>

    )

}

export default Times
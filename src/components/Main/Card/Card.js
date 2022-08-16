import React from "react";
import Map from "./Map";
import map from "./map.png"
import "./Card.css"



export default function Card(props){

    const [showPosto, setShowPosto] = React.useState()

    async function getPosto(){
        const response = await fetch(`https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/GetDadosPosto?id=${props.Id}`,)
        const data = await response.json()
        const posto = await data.resultado

        setShowPosto(
            <div className="">
            <section className="hero is-info blue-section">
                <div className="hero-body">
                    <p className="title is-5">
                        {posto.Nome} - {posto.Marca}
                    </p>
                    <p className="subtitle">
                        {posto.Morada.Morada}
                    </p>
                </div>
            </section>
            
            <section className="horario">
                <p className="horario--title">Horário</p>
                <p className="horario--text">Dias Uteis: {posto.HorarioPosto.DiasUteis}h</p>
                <p className="horario--text">Sábado: {posto.HorarioPosto.Sabado}h</p>
                <p className="horario--text">Domingo: {posto.HorarioPosto.Domingo}h</p>
                <p className="horario--text">Feriados: {posto.HorarioPosto.Feriado}h</p>
            </section>
            <section>
                <p className="pagamento--title">Meio pagamento:</p>
                {posto.MeiosPagamento.map(el => {
                    return(<p className="pagamento--text">{el.Descritivo}</p>)
                })}
            </section>
            {posto.Servicos &&    <section>
                    <p className="pagamento--title">Serviços:</p>
                    {posto.Servicos.map(el => {
                        return(<p className="pagamento--text">{el.Descritivo}</p>)
                    })}
                </section>}
            <div>
                <p className="pagamento--title">Link para o Google Maps</p>
                <a className="pagamento--text" target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${posto.Morada.Latitude},${posto.Morada.Longitude}`}>Google Maps <span><img src={map} style={{height:"20px"}}></img></span></a>
                {/* <a className="pagamento--text" href={`https://www.google.com/maps`}>Google Maps <span><img src={map} style={{height:"20px"}}></img></span></a> */}

            </div>
            <footer className="card-footer">
                <p className="footer-title">Última Atualização</p>
                <p>{posto.Combustiveis[0].DataAtualizacao.slice(0,10)}</p>
            </footer>
        </div>
        )
    }

    React.useEffect(()=>{getPosto()},[])


    return(
        <div id="modal-js-example" className="modal is-active background-container">
            <div className="modal-background"></div>

            <div className="modal-content">
                <div className="box pop-up-container">
                    {showPosto}
                </div>
            </div>

            <button className="modal-close is-large" aria-label="close" onClick={props.changeMostrarPosto}></button>
        </div>
    )
}
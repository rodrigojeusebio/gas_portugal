import React from "react"
import Form from "./Form/Form"


export default function Main(){
    const [distrito, setDistrito] = React.useState("")
    const [municipio, setMunicipio] = React.useState("")
    const [bomba, setBomba] = React.useState("2101")

    const [municipios, setMinicipios] = React.useState([])
    const [bombas, setBombas] = React.useState([])
    const [showComb, setShowComb] = React.useState([])
    React.useEffect(()=>{
        
        async function getMuni(){
            if (distrito !== ""){
                  const response = await fetch(`https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/GetMunicipios?idDistrito=${distrito}`,)
                  const data = await response.json()
                  await setMinicipios(data.resultado)
                }
        }
        getMuni()


    },[distrito])

    function onDistricChange(e){
        setDistrito(e.target.value)
    }

    function onMunicipioChange(e){
        setMunicipio(e.target.value)
    }

    function onCombustivelChange(e){
        setBomba(e.target.value)
    }

    const elements = municipios === [] ? <option value="">Selecione</option> : municipios.map( el =>{
        return (<option key={el.Id} value={el.Id}>{el.Descritivo}</option>)
    })




    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
    function success(pos) {
        const crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
      
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
    navigator.geolocation.getCurrentPosition(success, error, options);
      







    function handleSubmit(e){
        e.preventDefault();
        async function getBombas(){
            console.table(
                {
                    bomba,
                    distrito,
                    municipio

                }
            )
            console.log(`https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/PesquisarPostos?idsTiposComb=${bomba}&idMarca=&idTipoPosto=&idDistrito=${distrito}&idsMunicipios=${municipio}&qtdPorPagina=50&pagina=1`)
            const response = await fetch(`https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/PesquisarPostos?idsTiposComb=${bomba}&idMarca=&idTipoPosto=&idDistrito=${distrito}&idsMunicipios=${municipio}&qtdPorPagina=50&pagina=1`,)
            const data = await response.json()
            // await setBombas(data.resultado)
            await console.log(data.resultado)
            const example = data.resultado[0]
            await setShowComb(
                <>
                <br></br>
                <div className="hero is-small is-primary margin">
                <div className="hero-body">
                    <p className="title is-5">
                    {example.Municipio} - {example.Combustivel}
                    </p>
                    <p className="subtitle is-5">
                    {example.Distrito}
                    </p>
                </div>
                </div>
                <table className='table is-bordered is-narrow is-fullwidth'>
                <thead>
                    <tr>
                    <th>Nome do Posto</th>
                    <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                {data.resultado.map(el =>{
                    return(
                        <tr>
                            <td>{el.Nome}</td>
                            <td classNameName="m">{el.Preco}</td>
                        </tr>
                    )})}
                </tbody>
                </table>
                </>
            )
        }
        getBombas()
        
        
    }



    return(
        <div className="container is-max-desktop">
            <div className="container is-fluid">
            <Form 
            handleSubmit={handleSubmit}
            onCombustivelChange={onCombustivelChange}
            onDistricChange={onDistricChange}
            onMunicipioChange={onMunicipioChange}
            elements={elements}/>
            </div>
            <div>
                {showComb && showComb}
            </div>
        </div>
    )
}



import React from "react"
import Form from "./Form/Form"
import Card from "./Card/Card"
import click from "./click.png"
import "./Main.css"

export default function Main(){
    
    const [bomba, setBomba] = React.useState(()=>{
        const saved = localStorage.getItem("bomba")
        const initialValue = JSON.parse(saved)
        return initialValue || "2101";
      })

    React.useEffect(()=>{
        localStorage.setItem("bomba", JSON.stringify(bomba))
    },[bomba])
    
    
    const [distrito, setDistrito] = React.useState(()=>{
        const saved = localStorage.getItem("distrito")
        const initialValue = JSON.parse(saved)
        return initialValue || "";
      })

    React.useEffect(()=>{
        localStorage.setItem("distrito", JSON.stringify(distrito))
    },[distrito])

    
    const [municipio, setMunicipio] = React.useState(()=>{
        const saved = localStorage.getItem("municipio")
        const initialValue = JSON.parse(saved)
        return initialValue || "";
      })

    React.useEffect(()=>{
        localStorage.setItem("municipio", JSON.stringify(municipio))
    },[municipio])


    const [municipios, setMinicipios] = React.useState([])
    const [bombas, setBombas] = React.useState([])
    const [showComb, setShowComb] = React.useState([])
    React.useEffect(()=>{
        
        async function getMuni(){
            if (distrito !== ""){
                  const response = await fetch(`https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/GetMunicipios?idDistrito=${distrito}`,)
                  const data = await response.json()
                  console.log(data.resultado)
                  console.log(data.resultado.sort((a, b) => a.Descritivo.localeCompare(b.Descritivo)))
                  setMinicipios(data.resultado.sort((a, b) => a.Descritivo.localeCompare(b.Descritivo)))
                }
        }
        getMuni()


    },[distrito])

    React.useEffect(()=>{distrito && municipio ? getBombas() : console.log("Hello")},[])

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
        return (<option key={el.Id} value={el.Id} selected={el.Id === parseInt(municipio) }>{el.Descritivo}</option>)
    })

    async function getBombas(){
        const response = await fetch(`https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/PesquisarPostos?idsTiposComb=${bomba}&idMarca=&idTipoPosto=&idDistrito=${distrito}&idsMunicipios=${municipio}&qtdPorPagina=50&pagina=1`,)
        const data = await response.json()
        // await setBombas(data.resultado)
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
                <th className="price-column"><span className="table--head">Nome do Posto<img src={click} style={{height:"20px"}}/></span></th>
                <th>Preço</th>
                </tr>
            </thead>
            <tbody style={{cursor:"pointer"}}>
            {data.resultado.map(el =>{
                return(
                    <tr key={el.Id} onClick={() => changeMostrarPostoId(el.Id)}>
                        <td>{el.Nome}</td>
                        <td className="table--price">{el.Preco}</td>
                    </tr>
                )})}
            </tbody>
            </table>
            </>
        )
    }



    const [mostrarPosto, setMostrarPosto] = React.useState({
        show: false,
        id: ""
    })

    function changeMostrarPosto(){
        setMostrarPosto(prev =>{
            return{
                ...prev,
                show: !mostrarPosto.show
            }
        })
    }

    function changeMostrarPostoId(postoId) {
        setMostrarPosto({
                show:true,
                id: postoId
            }
        )
    }

    

    function handleSubmit(e){
        e.preventDefault();
        getBombas()        
    }
    return(
        <div className="container is-max-desktop center-content">
            <div className="container is-fluid">
                <Form 
                handleSubmit={handleSubmit}
                onCombustivelChange={onCombustivelChange}
                onDistricChange={onDistricChange}
                onMunicipioChange={onMunicipioChange}
                elements={elements}
                districtSelected={distrito}
                municipioSelected={municipio}
                selectedBomba={bomba}/>
            </div>
            <div>
                {showComb && showComb}
            </div>
            {mostrarPosto.show && <Card Id={mostrarPosto.id} changeMostrarPosto={changeMostrarPosto} />}

        </div>
    )
}



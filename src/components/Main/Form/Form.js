export default function Form(props){
    
    const distritos = [
        {value:"1",distrito:"Aveiro"},
        {value:"2",distrito:"Beja"},
        {value:"3",distrito:"Braga"},
        {value:"4",distrito:"Bragança"},
        {value:"5",distrito:"Castelo Branco"},
        {value:"6",distrito:"Coimbra"},
        {value:"7",distrito:"Évora"},
        {value:"8",distrito:"Faro"},
        {value:"9",distrito:"Guarda"},
        {value:"10",distrito:"Leiria"},
        {value:"11",distrito:"Lisboa"},
        {value:"12",distrito:"Portalegre"},
        {value:"13",distrito:"Porto"},
        {value:"14",distrito:"Santarém"},
        {value:"15",distrito:"Setúbal"},
        {value:"16",distrito:"Viana"},
        {value:"17",distrito:"Vila"},
        {value:"18",distrito:"Viseu"},
    ]

    const arrayCombustiveis = [
        {value:"2101", tipo:"Gasóleo Simples"},
        {value:"2105", tipo:"Gasóleo Aditivado"},
        {value:"3400", tipo:"98"},
        {value:"3405", tipo:"98 Especial"},
        {value:"3201", tipo:"95"},
        {value:"3205", tipo:"95 Especial"},
    ]
    
    return(<form onSubmit={props.handleSubmit}>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Combustível</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select defaultValue={props.selectedBomba} onChange={props.onCombustivelChange}>
                                    {arrayCombustiveis.map(el => <option key={el.value} value={el.value}>{el.tipo}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Distrito</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select defaultValue={props.districtSelected} onChange={props.onDistricChange}>
                                    <option value="">Selecione</option>
                                    {distritos.map(el => <option key={el.value} value={el.value}>{el.distrito}</option>)}
                                    </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Município</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                        <div className="control">
                            <div className="select is-fullwidth">

                                <select defaultValue={String(props.municipioSelected)} onChange={props.onMunicipioChange}>
                                    <option value="">Selecione</option>
                                    {props.elements}
                                </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="control">
                    <button className="button is-primary p-sm">Procurar</button>
                </div>

            </form>)
}

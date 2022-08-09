export default function Form(props){
    return(<form onSubmit={props.handleSubmit}>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Combustivel</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow">
                        <div class="control">
                            <div className="select is-fullwidth">
                                <select name="combustivel" id="combustivel" onChange={props.onCombustivelChange}>
                                    <option name="combustivel" id="combustivel" value="2101">Gasóleo Simples</option>
                                    <option name="combustivel" id="combustivel" value="2105">Gasóleo Aditivado</option>
                                    <option name="combustivel" id="combustivel" value="3400">98</option>
                                    <option name="combustivel" id="combustivel" value="3405">98 Especial</option>
                                    <option name="combustivel" id="combustivel" value="3201">95</option>
                                    <option name="combustivel" id="combustivel" value="3205">95 Especial</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Distrito</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow">
                        <div class="control">
                            <div className="select is-fullwidth">
                                <select name="distrito" id="distrito" onChange={props.onDistricChange}>
                                    <option value="">Selecione</option>
                                    <option value="1">Aveiro</option>
                                    <option value="2">Beja</option>
                                    <option value="3">Braga</option>
                                    <option value="4">Bragança</option>
                                    <option value="5">Castelo Branco</option>
                                    <option value="6">Coimbra</option>
                                    <option value="7">Évora</option>
                                    <option value="8">Faro</option>
                                    <option value="9">Guarda</option>
                                    <option value="10">Leiria</option>
                                    <option value="11">Lisboa</option>
                                    <option value="12">Portalegre</option>
                                    <option value="13">Porto</option>
                                    <option value="14">Santarém</option>
                                    <option value="15">Setúbal</option>
                                    <option value="16">Viana do Castelo</option>
                                    <option value="17">Vila Real</option>
                                    <option value="18">Viseu</option>
                                    </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Municipio</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow">
                        <div class="control">
                            <div className="select is-fullwidth">

                                <select id="municipio"onChange={props.onMunicipioChange}>
                                    <option value="">Selecione</option>
                                    {props.elements}
                                </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="control">
                    <button class="button is-primary p-sm">Submit</button>
                </div>

            </form>)
}

import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto
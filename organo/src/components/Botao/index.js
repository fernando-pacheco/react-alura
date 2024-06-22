import './Botao.css'

const Botao = (props) => {

    const handleSubmit = () => {
        
    }

    return (
        <button className='botao' submit={handleSubmit}>
            {props.children}
        </button>
    )
}

export default Botao
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {

    const times = [
        '',
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (e) => {
        e.preventDefault()
        console.log('Opa')
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto required={true} label={'Nome'} placeholder={'Digite seu nome'} />
                <CampoTexto required={true} label={'Cargo'} placeholder={'Digite seu cargo'} />
                <CampoTexto required={true} label={'Imagem'} placeholder={'Informe o endereço da imagem'} />
                <ListaSuspensa required={true} label={'Times'} itens={times} placeholder='Seleção de times' />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
import Banner from './components/Banner/Banner';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    <>
      <Banner />
      <CampoTexto
        label={'Nome'}
        placeholder={'Digite seu nome'}
      />
      <CampoTexto
        label={'Cargo'}
        placeholder={'Digite seu cargo'}
      />
      <CampoTexto
        label={'Imagem'}
        placeholder={'Informe o endereço da imagem'}
      />
    </>
  )
}

export default App;

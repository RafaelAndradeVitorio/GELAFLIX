import React from 'react';
import Menu from './componetes/Menu/index';
import DadosIniciais from './data/dados_iniciais.json';
import BanerMain from './BannerMain';
import Carrousel from './Carousel';
import Footer from './Footer';

function App() {
  return (
    <div style={{background: "#37039f"}}>
      <Menu/>
      <BanerMain
      videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
      url={DadosIniciais.categorias[0].videos[0].url}
      videoDescription={'Pastor Adriano da Lolo'}
      />

      <Carrousel 
      ignoreFirstVideo
      category={DadosIniciais.categorias[0]}
      />

<Carrousel 
      ignoreFirstVideo
      category={DadosIniciais.categorias[1]}
      />

<Carrousel 
      ignoreFirstVideo
      category={DadosIniciais.categorias[2]}
      />

<Carrousel 
      ignoreFirstVideo
      category={DadosIniciais.categorias[3]}
      />
    </div>
  );
}

export default App;

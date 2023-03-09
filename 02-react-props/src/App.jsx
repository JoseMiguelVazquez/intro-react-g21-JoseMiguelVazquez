import './App.css'
import ilustracion from './assets/img/ilustracion.svg'
import HeaderHero from './components/HeaderHero'
import LearnMore from './components/LearnMore'
import Info from './components/Info'
import Services from './components/Services'
import Work from './components/Work'
import ilustracion1 from './assets/img/ilustracion1.svg'
import Footer from './components/Footer'

function App () {
  return (
    <div className='App'>
      <HeaderHero
        title='Bienvenido a Website'
        desc='Creamos el mejor sitio web para ti'
        button='Contáctame'
      />

      <LearnMore
        title='Title of Section'
        desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit nostrum expedita quasi odio architecto laudantium sunt nemo dicta atque?'
        cta='Learn More'
        img={ilustracion1}
        last={false}
      />

      <Info />

      <Services />

      <Work />

      <LearnMore
        title='Title of section'
        desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum reprehenderit nostrum expedita quasi odio architecto laudantium sunt nemo dicta atque?'
        cta='Learn More'
        img={ilustracion}
        last
      />

      <Footer />
    </div>
  )
}

export default App

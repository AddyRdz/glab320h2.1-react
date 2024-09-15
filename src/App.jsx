import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  

  return (
    <main>
      <Header/>
      <Content color="black"  text="The Tumbler is a radically reimagined version of the Batmobile, designed to reflect the grounded, militaristic aesthetic of Christopher Nolan’s Batman universe. It moves away from the sleek, traditional Batmobiles seen in previous iterations and adopts a more aggressive, utilitarian form, resembling a hybrid between a tank and an off-road vehicle." />
      <Footer/>
    </main>
  )
}

export default App

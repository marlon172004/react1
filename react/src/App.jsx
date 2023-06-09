import Header from "./Componentes/Header" 
import Message from "./Componentes/Message"
import Counter from "./Componentes/Counter"
import Main from "./Componentes/Main" 
import Footer from "./Componentes/Footer"

function App(){
  return(
    <>
      <Header></Header>
      <h1>Boton</h1>
      <Message text="Desde un boton"/>
      <Message text="Otro boton"/>
      <Counter></Counter>
      <Main></Main>
      <h1>Footer</h1>
      <Footer></Footer>
    </>
  )
}

export default App
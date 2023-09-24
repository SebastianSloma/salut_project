
import './App.css'
import { Message } from './Message'


function App() {
  

  return (
   <div>
    <h1>Salut</h1>
    <Message author='Merlin'>TypeScript</Message>
    <Message author='Julio' variant='LEFT'><span style={ {color:"red"} }>JavaScript</span></Message>
   </div>
  )
}

export default App

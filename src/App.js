import {useState} from "react"
import {BoxSection,Header,Sidebar,Resume,TextMin,TextAll,SecPost,Form,Posts,Footer} from "./components";

function App() {
  
  const [show,setShow] = useState(true)
  const [send,setSend] = useState(true)

  function HandleShowChange(){
    setShow(show => !show)
  }

  function HandleSendChange(){
    setSend(send => !send)
  }

  return (
    <>
    <Sidebar/>
    <div id="corpo">
      <Header/>
      <div>
        <BoxSection/>
        <Resume title="Resumo">
          {show &&  (<TextMin handleTransform={HandleShowChange} text="Ver Mais"/>)}
          {show === false  &&  (<TextAll handleTransform={HandleShowChange} text="Ver Menos"/>)}          
        </Resume>
        <Resume title="Discussões">
          {send && (<SecPost handleChange={HandleSendChange}/>)}
          {send === false && (<Form show={show}/>)}
          <Posts/>
        </Resume>
        <Footer/>
      </div>
    </div>
    </>
  );
}

export default App;

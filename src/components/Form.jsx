import { useState } from "react"
import SubForm from "./SubForm"

export default function Form() {
    
  const [topic,setTopic] = useState(false)

  function HandleTopicChange(e){
    e.preventDefault()
    setTopic(topic => !topic)
  }

  return (
      <>
        {topic === false && (
          <SubForm handle={HandleTopicChange}></SubForm>
        )}
        {topic && (
          <div className="CreateForm">
            <h2>Seu Topíco Foi enviando com sucesso! :D</h2>
            <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
            <p id="discovery">Descubra outros trabalhos!</p>
            <div>
              <button className="newTopic" onClick={HandleTopicChange}>
                + criar tópico
              </button>
            </div>
            <div className="row"></div>
          </div>
        )}
      </>
    )
}
  
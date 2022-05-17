import Icon1 from "../img/icon1.svg" 
import Icon2 from "../img/icon2.svg"
import Icon3 from "../img/icon3.svg"

export default function SecPost({handleChange}) {
  return (
    <div id="SecPost">
      <h2>Compartilhe suas ideias ou dúvidas com os autores!</h2>
      <section className="icons">
        <img src={Icon1} alt="Icone 1" />
        <img src={Icon2} alt="Icone 2" />
        <img src={Icon3} alt="Icone 3" />
      </section>
      <p>Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus <br/> questionamentos ou sugestões para o autor!</p>
      <div className="topic">
        <button className="newTopic" onClick={handleChange}>
          <i className="bi bi-plus-lg"></i>
          &nbsp;
          criar tópico
        </button>
      </div>
      <div className="bord"></div>
    </div>
  )
}

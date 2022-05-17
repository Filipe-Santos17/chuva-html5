export default function SubForm({handle}) {
  return (
    <form onSubmit={handle}>
        <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>

        <div id="form">
            <h2>Assunto</h2>
            <input type="text" 
            placeholder="Defina um tópico sucinto para notificar os autores..."
            />
            <h2>Contéudo</h2>
            <textarea rows="10"></textarea>
            <div className="backColor">
                <div>
                    <p>B</p>
                    <p>I</p>
                </div>
                <button id="topicSend" className=" -my-2 py-2 rounded  items-center" type="submit" onClick={handle}>
                    Enviar
                </button>
            </div>
            <div className="row"></div>
        </div>
      </form>
  )
}

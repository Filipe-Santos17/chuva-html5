import { useState } from "react";
import Comments from "./Comments";

export default function Posts() {

  const [showComments,setShowComments] = useState(false)

  function HandleShowComments(){
    setShowComments(showComments => !showComments)
  }

  return (
    <>
      <div id="post" className="shadow  ">
        <h3>Assunto da pergunta aparece aqui</h3>
        <h4>Filipe Marques dos Santos</h4>
        <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
        <div className="tips space-x-3">
          <i className="bi bi-three-dots-vertical"></i>
          <button><i className="bi bi-heart"></i></button>
          <p>1 like</p>
          <p>1 Resposta</p>
        </div>
      </div>
      <div id="post" className="shadow  shadow-slate-500">
        <h3>Assunto da pergunta aparece aqui</h3>
        <h4>Filipe Marques dos Santos</h4>
        <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
        <div className="tips space-x-3">
          <i className="bi bi-three-dots-vertical" onClick={HandleShowComments}></i>
          <button><i className="bi bi-heart"></i></button>
          <p>1 like</p>
          <p>1 Resposta</p>
        </div>
      </div>
      {showComments && (<Comments/>)}
    </>
  )
}

import logo from "../img/logo.svg"

export default function Sidebar() {
  return (
    <section id="sidebar">
    <div className="BoxTitle">
        <h1 className="title">Slaca 2019</h1>    
    </div>        
    <figcaption>
        <img src={logo} alt="logo of company"/>
    </figcaption>
    <nav>
        <ul>
            <li>Apresentação</li>
            <li>Comité</li>
            <li>Autores</li>
            <li>Eixos Tématicos</li>
            <li className="selected"><div></div>Trabalhos</li>
            <li>Contato</li>
        </ul>
    </nav>
</section>
  )
}

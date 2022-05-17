import avatar from "../img/avatar.jpg"

export default function Header() {
  return (
    <header>
        <hgroup className="titles">
            <h3>Anais do Simpósio Latino Americano de Ciências de Alimentos</h3>     
            <h2>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos</h2>
            <p>Issn: 1234-5678</p>
        </hgroup>
        <button className="burger"><i className="bi bi-list"></i></button>
        <button>
            <i className="bi bi-globe"></i>
            <p>PT, BR</p>
            <i className="bi bi-caret-down-fill"></i>
        </button>
        <section className="BoxAvatar">
            <hgroup>
              <p>Bem Vindo!</p>
              <p>filipe@galoascience.com</p>
            </hgroup>
            <div className="ImgIcon">
              <img src={avatar} alt="user profile" className="avatar"/>
              <span className="Icon">2</span>
            </div>
        </section>
    </header>
  )
}

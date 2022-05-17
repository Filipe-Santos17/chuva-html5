import doi from "../img/doi.svg"
import BgImg from "../img/img-bg.svg"
import ManVideo from "../img/ManOfVideo.svg"

export default function BoxSection() {
  return (
    <section id="BoxSection">
        <div className="TextTitle">
            <h1 className="titulo">Análise sensorial de preparações funcionais desenvolvidas para escolares <br/> entre 09 e 15 anos, do município de Campinas/SP </h1>
            <section className="buttons">{/*pl36*/}
                <div className="itemsButtons">
                    <button>
                        <i className="bi bi-download"></i>
                        &nbsp;
                        <p>Download</p>
                    </button>
                    <button>
                        <i className="bi bi-star-fill"></i>
                    </button>
                    <button>
                        <img src={doi} alt="doi"/>
                    </button>
                </div>
                <h2>Como citar esse trabalho?</h2>
            </section>
        </div>
        <div className="ImageArticle">
            <section className="Image">
                <figure>
                    <figcaption>
                        <h2>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP </h2>
                        <div>
                            <img id="man" src={ManVideo} alt="Man"/>
                            <hgroup>
                                <h3>Beatriz Christiane Melo</h3>
                                <h3>FCA / Universidade Estadual de Campinas</h3>
                            </hgroup>
                        </div>
                        <img src={BgImg} alt="Waves in the Beach"/>
                    </figcaption>
                </figure>
            </section>
            <section id="Article">
                <div className="titleBox">
                    <h2>Detalhes</h2>
                </div>
                <hgroup>
                    <p>Tipo de Apresentação: <span>Pôster</span></p>
                    <p>Eixo temático: <span>Alimentação e saúde (AS)</span></p>
                    <p>Palavras-chaves: <span>Alimentos funcionais, alimentação escolar.</span></p>
                </hgroup>
                <br/>
                <h3>Autores:</h3>
                    <ul>
                        <li>Galileo Galilei<sup>1</sup></li>
                        <li>Berta Lange de Morretes<sup>2</sup></li>
                        <li>Isaac Newton<sup>3</sup></li>
                        <li>Cesar Lattes<sup>1</sup></li>
                        <li>Stephen Hawking<sup>4</sup></li>
                    </ul>
                    <br/>    
                    <ul className="universitys">
                        <li><sup>1</sup>Universidade Estadual de Campinas</li>
                        <li><sup>2</sup>Universidade de São Paulo</li>
                        <li><sup>3</sup>Instituto Nacional de Pesquisas Espaciais</li>
                        <li><sup>4</sup>Universidade Federal do Rio de Janeiro</li>
                    </ul>
            </section>
            </div>
    </section>
  )
}

export default function Resume({title,children}){
  return (
    <section id="Resume">
        <div className="titulo">
            <h4>{title}</h4>
        </div> 
        <div>
          {children}
        </div>
    </section>
  )
}
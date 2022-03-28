import Part from "./Part"

export default function Content({parts}){
    return(
      <>
        {
          parts.map((part, i) => <Part key={i} part={part} />)
        }
      </>
    )
}
export default function Total({parts}){
    return(
        <p>Number of exercises {
            parts.reduce((prev,cur) => prev + cur.exercises, 0)  
        }</p>
    )
}
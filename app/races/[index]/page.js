export default async function Class({params}) {
    const res = await fetch(`https://www.dnd5eapi.co/api/races/${params.index}`)
    const raceInfo = await res.json()
    return(
        <>
        <h1>Hello {params.index}</h1>
        <pre>{JSON.stringify(raceInfo,null,2)}</pre>
        </>
    )
        
        
   
    
}
export default async function Class({params}) {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${params.index}`)
    const classInfo = await res.json()
    return(
        <>
        <h1>Hello {params.index}</h1>
        <pre>{JSON.stringify(classInfo,null,2)}</pre>
        </>
    )
        
        
   
    
}
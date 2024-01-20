import Link from "next/link"

export default async function Classes() {

    const res = await fetch("https://www.dnd5eapi.co/api/classes")
    const allClasses = await res.json()
    return(
        <>
        <h1 className="text-2xl text-red-500">Classes!</h1>
        <div className="grid-cols-3 grid gap-4">
        {
                allClasses.results.map(
                    s=>(<div key={s.index}>{s.name}</div>)
                )
            }
        </div>
        
        
        </>
    )
}
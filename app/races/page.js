import Link from "next/link"

export default async function Races() {

    const res = await fetch("https://www.dnd5eapi.co/api/races")
    const allRaces = await res.json()
    return(
        <>
        <h1 className="text-2xl text-red-500">Races!</h1>
        <div className="grid-cols-3 grid gap-4">
        {
                allRaces.results.map(
                    s=>(<div key={s.index}>{s.name}</div>)
                )
            }
        </div>
        
        
        </>
    )
}
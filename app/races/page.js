import Link from "next/link"

export default async function Races() {

    const res = await fetch("https://www.dnd5eapi.co/api/races")
    const allRaces = await res.json()
    return(
        <>
        <h1 className="text-2xl text-red-500">Races!</h1>
        <div className="grid-cols-2 grid gap-4 lg:grid-cols-3">
        {
                allRaces.results.map(
                    s=>(<div><Link key={s.index} href={`/races/${s.index}`} className="hover:text-red-500">{s.name}</Link></div>)
                )
            }
        </div>
        
        
        </>
    )
}
import Link from "next/link"

export default async function Spells() {

    const res = await fetch("https://www.dnd5eapi.co/api/spells")
    const allSpells = await res.json()
    return(
        <>
        <h1 className="text-2xl text-red-500">Spells!</h1>
        <ul>
            {
                allSpells.results.map(
                    s=>(<li key={s.index}>{s.name}</li>)
                )
            }
        </ul>
        
        </>
    )
}
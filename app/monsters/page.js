import Link from "next/link"

export default async function Spells() {

    const res = await fetch("https://www.dnd5eapi.co/api/monsters")
    const allMonsters = await res.json()
    return(
        <>
        <Link href={'/'}>Home</Link>
        <h1 className="text-2xl text-red-500">Monsters!</h1>
        <ul>
            {
                allMonsters.results.map(
                    s=>(<li key={s.index}>{s.name}</li>)
                )
            }
        </ul>
        
        </>
    )
}
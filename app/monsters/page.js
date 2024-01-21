import Link from "next/link"
import ComboBox from "../components/combo-box/combo-box"

export default async function Monsters() {

    const res = await fetch("https://www.dnd5eapi.co/api/monsters")
    const allMonsters = await res.json()
    return(
        <>
        <h1 className="text-2xl text-red-500">Monsters!</h1>
        <ComboBox data={allMonsters.results} title={"Monster Name"} selectedItem={allMonsters?.results[0]}/>
        
        
        </>
    )
}
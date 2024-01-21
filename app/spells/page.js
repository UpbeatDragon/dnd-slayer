import ComboBox from "../components/combo-box/combo-box"

export default async function Spells() {

    const res = await fetch("https://www.dnd5eapi.co/api/spells")
    const allSpells = await res.json()
    return(
        <>
        <h1 className="text-2xl text-red-500">Spells!</h1>
        <ComboBox data={allSpells.results} title={"Spell Name"} selectedItem={allSpells?.results[0]}/>
        
        
        </>
    )
}
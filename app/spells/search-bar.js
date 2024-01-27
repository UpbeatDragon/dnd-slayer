import ComboBox from "../components/combo-box/combo-box"
import SearchBox from "./search-box"

export default async function SearchBar() {

    const res = await fetch("https://www.dnd5eapi.co/api/spells")
    const allSpells = await res.json()

    return(
        <SearchBox spells={allSpells.results}/>
    )

}
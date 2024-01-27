import ComboBox from "../components/combo-box/combo-box"
import Heading1 from "../components/heading1/heading1"
import Heading2 from "../components/heading2/heading2"
import Heading3 from "../components/heading3/heading3"

export default async function Spells({searchParams}) {

    const res = await fetch(`https://www.dnd5eapi.co/api/spells`)
    const allSpells = await res.json()

    const selectedSpell = searchParams.spell?allSpells.results.find(s=>s.name.toUpperCase()===searchParams.spell.toUpperCase()):allSpells.results[0]
    const res2 = await fetch(`https://www.dnd5eapi.co/api/spells/${selectedSpell.index}`)
    const spellInfo = await res2.json()
    console.log(searchParams)
    return(        
        <>
            <Heading1>{selectedSpell.name}</Heading1>
            <Heading2>Spell info:</Heading2>
            <div className="flex flex-col md:flex-row">
                <Heading3>Level:</Heading3>
                <div>{spellInfo.level}</div>
        </div>
            <Heading3>Description:</Heading3>
            <div>{spellInfo.desc}</div>
        </>

    )
}
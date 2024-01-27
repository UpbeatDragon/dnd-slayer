'use client'

import { useRouter, useSearchParams } from "next/navigation"
import ComboBox from "../components/combo-box/combo-box"

export default function SearchBox({spells}) {

    const router = useRouter()

    const queryParams = useSearchParams()
    const selectedSpell = queryParams.has("spell")?spells.find(s=>s.name.toUpperCase()===queryParams.get("spell").toUpperCase()):spells[0]
    if(!selectedSpell){
        router.push(`/spells`)
        return(<div></div>)
    }

    const handleSelectionChange = (spell) => {
        router.push(`/spells?spell=${spell}`)
    }

    return(
        <>
            <h1 className="text-2xl text-red-500">Spells!</h1>
            <ComboBox
                data={spells} 
                title={"Spell Name"} 
                selectedItem={selectedSpell}
                onChange={handleSelectionChange}
            />
        </>
    )
}
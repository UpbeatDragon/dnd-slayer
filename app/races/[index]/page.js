import Heading1 from "@/app/components/heading1/heading1"
import Heading2 from "@/app/components/heading2/heading2"

export default async function Class({params}) {
    const res = await fetch(`https://www.dnd5eapi.co/api/races/${params.index}`)
    const raceInfo = await res.json()
    return(
        <>
        <Heading1>{raceInfo.name}</Heading1>
        <Heading2>Race Description</Heading2>
        <div className="flex flex-col md:flex-row">
                <div className="font-semibold pr-1">Alignment:</div>
                <div>{raceInfo.alignment}</div>
        </div>
        <div className="flex flex-col md:flex-row">
                <div className="font-semibold pr-1">Age:</div>
                <div>{raceInfo.age}</div>
        </div>
        <div className="flex flex-col md:flex-row">
                <div className="font-semibold pr-1 pb-3">Size:</div>
                <div>{raceInfo.size_description}</div>
        </div>
        <Heading2>Race Proficiencies</Heading2>
        <div className="flex flex-col md:flex-row">
                <div className="font-semibold pr-1 pb-3">Languages:</div>
                <div>{raceInfo.language_desc}</div>
        </div>
        <div className="flex flex-col md:flex-row">
                <div className="font-semibold pr-1 pb-3">Traits:</div>
                <div></div>
        </div>
        <pre>{JSON.stringify(raceInfo,null,2)}</pre>
        </>
    )
        
        
   
    
}
import Heading1 from "@/app/components/heading1/heading1"
import Heading2 from "@/app/components/heading2/heading2"
import Heading3 from "@/app/components/heading3/heading3"

export default async function Class({params}) {
    const res = await fetch(`https://www.dnd5eapi.co/api/races/${params.index}`)
    const raceInfo = await res.json()
    return(
        <>
        <Heading1>{raceInfo.name}</Heading1>
        <Heading2>Race Description</Heading2>
        <div className="flex flex-col md:flex-row">
                <Heading3>Alignment:</Heading3>
                <div>{raceInfo.alignment}</div>
        </div>
        <div className="flex flex-col md:flex-row">
                <Heading3>Age:</Heading3>
                <div>{raceInfo.age}</div>
        </div>
        <div className="flex flex-col md:flex-row pb-3">
                <Heading3>Size:</Heading3>
                <div>{raceInfo.size_description}</div>
        </div>
        <Heading2>Race Proficiencies</Heading2>
        <div className="flex flex-col md:flex-row">
                <Heading3>Languages:</Heading3>
                <div>{raceInfo.language_desc}</div>
        </div>
        <div className="flex flex-col md:flex-row">
                <Heading3>Traits:</Heading3>
                <div></div>
        </div>
        <pre>{JSON.stringify(raceInfo,null,2)}</pre>
        </>
    )
        
        
   
    
}
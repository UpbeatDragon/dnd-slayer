import Heading1 from "@/app/components/heading1/heading1"
import Heading2 from "@/app/components/heading2/heading2"

export default async function Class({params}) {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes/${params.index}`)
    const classInfo = await res.json()
    return(
        <>
            <Heading1>{classInfo.name}</Heading1>
            <Heading2>Class features</Heading2>
            <p className="pb-2">As a {classInfo.name.toLowerCase()}, you gain the following class features.</p>
            <h3 className="font-semibold text-lg">Hit Points</h3>
            <div className="flex flex-col md:flex-row">
                <div className="font-semibold pr-1">Hit Dice:</div>
                <div>1d{classInfo.hit_die} per {classInfo.name.toLowerCase()} level.</div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="font-semibold pr-1">Hit points at 1st Level:</div>
                <div>{classInfo.hit_die} + your constitution modifier</div>
            </div>
            <div className="flex flex-col md:flex-row pb-4">
                <div className="font-semibold pr-1">Hit points at Higher Levels:</div>
                <div>1d{classInfo.hit_die} + your constitution modifier per {classInfo.name.toLowerCase()} level after 1st</div>
            </div>
        </>
    )   
}
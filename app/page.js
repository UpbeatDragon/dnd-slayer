import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <ul>
    <li><Link href={'/spells'}>Spells</Link></li>
    <li><Link href={'/monsters'}>Monsters</Link></li>
    </ul>
    
    </>
  )
}

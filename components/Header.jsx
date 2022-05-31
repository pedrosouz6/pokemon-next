import Link from 'next/link';
import styled from '../styles/Header.module.css'

export function Header() {
    return (
        <header className={styled.header}>
            <div>
                <h2><Link href='/'>Pokémon</Link></h2>
            </div>

            <nav>
                <ul>
                    <li className={styled.li}><Link href='/'><a className={styled.link}> Home </a></Link></li>
                </ul>
            </nav>
        </header>
    )
}
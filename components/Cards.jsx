import styled from '../styles/Cards.module.css';
import { useRouter } from 'next/router';

import Image from 'next/image'

export default function Cards({ pokemon }) {

    const router = useRouter();

    return (
        <article className={styled.article}>
            <div className={styled.imagePokemon}>
                <Image 
                className={styled.img} 
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
                width='160px'
                height='180px'
                alt="Imagem do Pokémon" />
            </div>
            <h4 className={styled.name}>{ pokemon.name }</h4>
            <button className={styled.button} onClick={() => router.push(`/pokemon/${pokemon.id}`)}>Ver mais</button>
        </article>
    )
}
import { instance } from "../../services"; 
import { useRouter } from "next/router";

import Image from "next/image";

import styled from '../../styles/Pokemon.module.css';

export default function Pokemon({ pokemon }) {

    const { isFallback } = useRouter();
    
    if(isFallback) {
        return <p>Carregando</p>
    }

    const abilitiesPokemon = pokemon.abilities.map(item => item.ability.name);

    return (
        <article className={styled.pokemon}>
            <Image 
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width='200px'
            height='250px'
            alt='Pokemon' />

            <h3>{ pokemon.name }</h3>

            <div className={styled.abilities}>
                {
                    abilitiesPokemon.map((item, key) => (
                        <p key={key}>{ item }</p>
                    ))
                }
            </div>

            <div className={styled.heightWeight}>
                <p><strong>Altura:</strong> { pokemon.height * 10 } cm</p>
                <p><strong>Peso:</strong> { pokemon.weight / 10 } kg</p>
            </div>

        </article>
    )
}

export async function getStaticPaths() {
    const response = await fetch(`${instance}/pokemon`);
    const json = await response.json();
    
    const paths = json.results.map((item, index) => {
        return {
            params: { id: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    const response = await fetch(`${instance}/pokemon/${id}`);
    const datas = await response.json();

    return {
        props: {
            pokemon: datas
        }
    }
}
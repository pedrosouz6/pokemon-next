import { instance } from '../services/index';
import Cards from '../components/Cards';

import styled from '../styles/Home.module.css';

export default function Home({ datas }) {
  return (
    <main className={styled.main}>
      <section className={styled.section}>
        {
          datas.results.map((item, index) => (
            <Cards key={index} pokemon={item} />
          ))
        }
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${instance}/pokemon`);
  const json = await response.json();
  json.results.forEach((item, index) => {
    item.id = index + 1
  })
  
  return {
    props: {
      datas: json
    }
  }
} 
import type { NextPage, GetStaticProps } from 'next';
// import { Button, Card, Grid, Row, Text, Image } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { pokeApi } from '../api';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  return (
    <Layout title="Listado de Pokemons">
      <>
        {/* <h1>Hola Mundo</h1> */}
        {/* <Button color="gradient">
          Hola Mundo
        </Button> */}

        {/* <Image
          src='/img/banner.png'
          width={ 200 }
          height={ 150 }
        ></Image> */}

        <Grid.Container gap={ 2 } justify='flex-start'>
          {
            pokemons.map( (pokemon) => (
              // <li key={ id }> #{ id } - { name } </li>
              // <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
              //   <Card hoverable clickable>
              //     <Card.Body css={{ p: 1 }}>
              //       <Card.Image
              //         src={ img }
              //         width='100%'
              //         height={ 140 }
              //       />
              //     </Card.Body>
              //     <Card.Footer>
              //       <Row justify='space-between'>
              //         <Text transform='capitalize'>{ name }</Text>
              //         <Text>#{ id }</Text>
              //       </Row>
              //     </Card.Footer>
              //   </Card>
              // </Grid>
              <PokemonCard key={ pokemon.id } pokemon={ pokemon }/>
            ))
          }
          
        </Grid.Container>
      </>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  // Nada de lo que aparezca aqui pasara al cliente, se queda en el servidor
  // Se pueden colocar fileSystem, Base de datos

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=55');
  
  const pokemons: SmallPokemon[] = data.results.map( (pokemon, index) => {
    return { 
      ...pokemon,
      id:   index + 1,
      img:  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png` 
    }
  });

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;

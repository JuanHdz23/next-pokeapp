import React, { FC } from 'react';
import Head from 'next/head';
import { PropsChildren } from '../../interfaces';
import { Navbar } from '../ui';

const origin = ( typeof window == 'undefined') ? '' : window.location.origin;

export const Layout: FC<PropsChildren> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name='author' content='Juan Carlos Hernández' />
            <meta name='description' content={`Información sobre el pokemon ${ title }`}/>
            <meta name='keywords' content={`${ title }, pokemon, pokedex`}/>
            <meta property="og:title" content={`Información sobre el pokemon ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}

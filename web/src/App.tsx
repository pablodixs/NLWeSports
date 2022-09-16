import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { GameBanner } from './components/GameBanner';
import { Banner } from './components/Banner';
import logoImage from './assets/logo-nlw.svg';

import './styles/main.css';
import { Modal } from './components/Modal';

interface Game {
   id: string,
   title: string,
   bannerUrl: string,
   _count: {
      ads: number,
   }
};

export default function App() {
   const [games, setGames] = useState<Game[]>([]);

   useEffect(() => {
      fetch('http://localhost:3333/games')
         .then(response => response.json())
         .then(data => {
            setGames(data)
         });
   }, [])

   return (
      <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
         <img className='alig' src={logoImage} />
         <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui</h1>
         <div className='grid grid-cols-6 gap-6 mt-16'>
            {games.map(game => {
               return <GameBanner
                  key={game.id}
                  bannerUrl={game.bannerUrl}
                  title={game.title}
                  adsCount={game._count.ads}
               />
            })}
         </div>
         <Dialog.Root>
            <Banner />
            <Dialog.Portal>
               <Modal />
            </Dialog.Portal>
         </Dialog.Root>
      </div>
   )
}
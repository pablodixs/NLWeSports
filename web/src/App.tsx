import './styles/main.css'
import { MagnifyingGlassPlus } from 'phosphor-react'
import logoImage from './assets/logo-nlw.svg'

export default function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img className='alig' src={logoImage}/>
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game1.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game2.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game3.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS:G0</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game4.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game5.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game6.png" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-2 self-stretch bg-card-gradient mt-8 rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 rounded-lg flex justify-between items-center'>
          <div>
            <h2 className='text-white text-2xl font-bold'>Não encontrou seu duo?</h2>
            <p className='text-zinc-400'>Publique um anúncio para encontrar novos players!</p>
          </div>
          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}
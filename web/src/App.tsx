import './styles/main.css'
import logoImage from './assets/logo-nlw.svg'

export default function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img className='alig' src={logoImage}/>
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="">
          <img src="/game1.png" />
        </a>
        <a href="">
          <img src="/game2.png" />
        </a>
        <a href="">
          <img src="/game3.png" />
        </a>
        <a href="">
          <img src="/game4.png" />
        </a>
        <a href="">
          <img src="/game5.png" />
        </a>
        <a href="">
          <img src="/game6.png" />
        </a>
      </div>
    </div>
  )
}
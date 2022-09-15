import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

export function Banner() {
  return (
    <div className='pt-2 self-stretch bg-card-gradient mt-8 rounded-lg overflow-hidden'>
      <div className='bg-[#2A2634] px-8 py-6 rounded-lg flex justify-between items-center'>
        <div>
          <h2 className='text-white text-2xl font-bold'>Não encontrou seu duo?</h2>
          <p className='text-zinc-400'>Publique um anúncio para encontrar novos players!</p>
        </div>
        <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}
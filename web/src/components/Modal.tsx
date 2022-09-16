import { CaretDown, Check, GameController } from 'phosphor-react';
import { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Toogle from '@radix-ui/react-toggle-group';

import { Input } from '../components/Form/Input';

interface Game {
   id: string,
   title: string,
};

export function Modal() {
   const [games, setGames] = useState<Game[]>([]);
   const [weekDays, setWeekDays] = useState<string[]>([]);
   const [check, setCheck] = useState(false);
   const [selectGame, setSelectGame] = useState('');

   async function handleCreateAd(event: FormEvent) {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);
      const data = Object.fromEntries(formData);

      if(data.name) {
         return;
      }

      try {
         await axios.post(`http://localhost:3333/games/${setSelectGame}/ads`, {
               name: data.name,
               yearsPlayed: Number(data.yearsPlayed),
               discord: data.discord,
               weekDays: weekDays.map(Number),
               hourStart: data.hourStart,
               hourEnd: data.hourEnd,
               useVoiceChannel: check,
            })
            alert('Anúncio criado com sucesso!')
      } catch (error) {
         alert('Não foi possível criar um anúncio.')
         console.log(error)
      };
   };

   return (
      <>
         <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
         <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black'>
            <Dialog.Title className='text-3xl font-bold'>Publique um anúncio</Dialog.Title>
            <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
               <div className="flex flex-col gap-2">
                  <label className='font-semibold' htmlFor="game">Qual o game?</label>
                  <Select.Root 
                     onValueChange={setSelectGame}
                     value={selectGame}
                  >
                     <Select.Trigger
                        className="bg-zinc-900 py-3 px-4 rounded text-small flex justify-between"
                        aria-label='Games'
                     >
                        <Select.Value
                           className='font-semibold placeholder:text-zinc-500'
                           placeholder="Selecione o game que deseja jogar"
                           defaultValue=""
                        />
                        <Select.Icon>
                           <CaretDown size={24} />
                        </Select.Icon>
                     </Select.Trigger>
                     <Select.Portal>
                        <Select.Content>
                           <Select.Viewport className='bg-zinc-900 rounded p-1 border border-zinc-700'>
                              <Select.Group className=''>
                                 {games.map(game => {
                                    return (
                                       <Select.Item key={game.id} className='text-white hover:bg-zinc-800 bg-zinc-900 py-3 px-4 rounded flex justify-between cursor-pointer' value={game.id}>
                                          <Select.ItemText>{game.title}</Select.ItemText>
                                          <Select.SelectItemIndicator>
                                             <Check size={24} />
                                          </Select.SelectItemIndicator>
                                       </Select.Item>
                                    )
                                 })}
                              </Select.Group>
                           </Select.Viewport>
                        </Select.Content>
                     </Select.Portal>
                  </Select.Root>
               </div>
               <div className="flex flex-col gap-2">
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input name='name' id="name" placeholder='Como te chamam dentro do game?' />
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                     <label htmlFor="yearsPlayed">Joga há quantos anos?</label>
                     <Input name='yearsPlayed' id="yearsPlayed" type="number" placeholder='Tudo bem ser zero' />
                  </div>
                  <div className="flex flex-col gap-2">
                     <label htmlFor="discord">Qual o seu Discord?</label>
                     <Input name='discord' id="discord" placeholder='Usuário#0000' />
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                     <label htmlFor="weekDays">Quando costuma jogar?</label>
                     <Toogle.ToggleGroup
                        type='multiple'
                        className='grid grid-cols-4 gap-2'
                        value={weekDays}
                        onValueChange={setWeekDays}
                     >
                        <Toogle.Item value='0' className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Domingo'>D</Toogle.Item>
                        <Toogle.Item value='1' className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Segunda'>S</Toogle.Item>
                        <Toogle.Item value='2' className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`} title='Terça'>T</Toogle.Item>
                        <Toogle.Item value='3' className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`} title="Quarta">Q</Toogle.Item>
                        <Toogle.Item value='4' className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`} title="Quinta">Q</Toogle.Item>
                        <Toogle.Item value='5' className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`} title="Sexta">S</Toogle.Item>
                        <Toogle.Item value='6' className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`} title="Sábado">S</Toogle.Item>
                     </Toogle.ToggleGroup>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                     <label htmlFor="hourStart">Qual horário do dia?</label>
                     <div className="grid grid-cols-2 flex-2 gap-2">
                        <Input name='hourStart' id='hourStart' type="time" placeholder='De' />
                        <Input name='hourEnd' id='hourEnd' type="time" placeholder='De' />
                     </div>
                  </div>
               </div>
               <label className="mt-2 flex gap-2 text-small">
                  <Checkbox.Root
                     className='w-6 h-6 p-1 bg-zinc-900 rounded'
                     checked={check}
                     onCheckedChange={(checked) => {
                        if(checked === true) {
                           setCheck(true);
                        } else {
                           setCheck(false);
                        }
                     }}
                     >
                     <Checkbox.Indicator>
                        <Check size={16} className="text-emerald-400" />
                     </Checkbox.Indicator>
                  </Checkbox.Root>
                  Costumo me conectar ao chat de voz
               </label>
               <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close
                     className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                     Cancelar
                  </Dialog.Close>
                  <button
                     type='submit'
                     className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                     <GameController size={24} />
                     Encontrar duo
                  </button>
               </footer>
            </form>
         </Dialog.Content>
      </>
   )
}
import React from 'react';

export default function Additional({ n1, n2, n3, trending, top, info }) {
  return (
    <article className='grid grid-cols-3 gap-8'>
      <div className='grid'>
        <h1 className='font-spaceMono text-xl font-bold leading-10 capitalize xl:text-2xl'>{n1}</h1>
        <p className='text-sm text-start leading-6 xl:text-xl'>{trending}</p>
      </div>
      <div className='grid'>
        <h1 className='font-spaceMono text-xl font-bold leading-10 capitalize xl:text-2xl'>{n2}</h1>
        <p className='text-sm text-start leading-6 xl:text-xl'>{top}</p>
      </div>
      <div className='grid'>
        <h1 className='font-spaceMono text-xl font-bold leading-10 capitalize xl:text-2xl'>{n3}</h1>
        <p className='text-sm text-start leading-6 xl:text-xl'>{info}</p>
      </div>
    </article>
  );
}

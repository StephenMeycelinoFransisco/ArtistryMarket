import React from 'react'

export default function Info({img}) {
  return (
	<div className="bg-black-secondary rounded-xl h-[9.813rem] w-[19.688rem] items-center md:w-[13.125rem] md:h-[21.063rem] xl:w-[20.625rem] xl:h-[27.438rem] text-white mx-auto">
		<div className="p-[1.25rem] flex gap-[1.25rem] md:grid md:text-center">
			<img src={ img } className='w-[6.25rem] h-[6.25rem] md:w-[10rem] md:h-[10rem] xl:w-[15.625rem] xl:h-[15.625rem]' alt="" />
			<div className="grid gap-[0.625rem] ">
				<h3 className='font-workSans text-[1rem] font-semibold leading-[140%] xl:text-[1.375rem] '>Setup Your wallet</h3>
				<caption className='font-workSans text-[0.75rem] leading-[140%] md:text-center xl:text-[1rem]'>Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</caption>
			</div>
		</div>
	</div>
  )
}

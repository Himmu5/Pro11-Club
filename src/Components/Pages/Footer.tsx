import { FC } from 'react'
import { BsQuote } from 'react-icons/bs'

type P = object
const Footer: FC<P> = () => {
    return <div className='flex flex-col items-center  space-y-3'>
        <h1 className='text-3xl font-bold'>FAQs</h1>
        <div className='flex overflow-scroll gap-4 w-full px-2 my-10 no-scrollbar '>
            {
                [...Array(5)].map(() => {
                    return <div className='flex flex-col py-2 min-w-[200px] px-4 space-y-3 w-64  border-2 border-[#111111] rounded-2xl'>
                        <div className='text-white p-2 bg-[#111111] self-start rounded-full '>
                            <BsQuote />
                        </div>
                        <h1>What is Fantasy Sport?</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis impedit, unde perferendis magni ab repellendus iusto aperiam obcaecati commodi iste quod quaerat beatae nam exercitationem voluptas magnam perspiciatis odio.</p>
                    </div>
                })
            }
        </div>

    </div>
}
export default Footer;
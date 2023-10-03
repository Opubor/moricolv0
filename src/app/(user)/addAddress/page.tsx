import Image from 'next/image'

export default function Home() {
  return (
    <div>
        <div className='flex justify-between items-center pt-8 px-4'>
            <a href='/shippingAddress'>
                <Image
                    src="/leftarrow.png"
                    alt="Arrow"
                    className="w-4"
                    width={100}
                    height={0}
                    priority
                />
            </a>
            <h1 className='text-lg font-semibold'>Add new Address</h1>
            <p className='font-bold'>...</p>
        </div>

        {/* ===Form=== */}
        <div className='p-4'>
            <div className='flex flex-col'>
                <label className='text-sm'>Fullname*</label>
                <input type="text" className='border border-themeColor px-4 py-1 rounded-md' />
            </div>
            
            <div className='flex flex-col mt-2'>
                <label className='text-sm'>Phone Number*</label>
                <input type="text" className='border border-themeColor px-4 py-1 rounded-md' />
            </div>

            <div className='flex flex-col mt-2'>
                <label className='text-sm'>E-Mail*</label>
                <input type="text" className='border border-themeColor px-4 py-1 rounded-md' />
            </div>

            <div className='flex flex-col mt-2'>
                <label className='text-sm'>Apt/Suite/Others *</label>
                <input type="text" className='border border-themeColor px-4 py-1 rounded-md' />
            </div>

            <div className='flex flex-col mt-2'>
                <label className='text-sm'>Zipcode *</label>
                <input type="text" className='border border-themeColor px-4 py-1 rounded-md' />
            </div>

            <div className='flex flex-col mt-2'>
                <label className='text-sm'>City *</label>
                <input type="text" className='border border-themeColor px-4 py-1 rounded-md' />
            </div>

            <div className='flex flex-col mt-2'>
                <label className='text-sm'>State *</label>
                <input type="text" className='border border-themeColor px-4 py-1 rounded-md' />
            </div>

            <div className='flex flex-col mt-2'>
                <label className='text-sm'>Country</label>
                <input type="text" className='border border-themeColor px-4 py-1 rounded-md' />
            </div>

            <div className='flex items-center gap-1'>
                <input type="checkbox" />
                <p>Save this as primary address</p>
            </div>

            <div className='mt-4 flex justify-center'>
                <button className='bg-themeColor px-8 py-2 text-white text-sm rounded-md'>Submit</button>
            </div>
        </div>
    </div>
  )
}

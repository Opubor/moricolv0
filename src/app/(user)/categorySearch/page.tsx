import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
        {/* ===Header=== */}
            <div className='pt-2'>
            {/* ===Navbar=== */}
            <div className="flex justify-between px-4"> 
            <div className='flex items-center gap-2'>
                <Image
                    src="/logo.jpeg"
                    alt="Moricol Logo"
                    className="w-12"
                    width={100}
                    height={24}
                    priority
                    />
                <h1 className='font-bold text-lg'>Moricol Organic Shop</h1>
            </div>
            <div className='flex items-center gap-2'>
                <Image
                    src="/cart.png"
                    alt="Shopping Cart"
                    className="w-4"
                    width={100}
                    height={0}
                    priority
                />
                <Image
                    src="/bell.png"
                    alt="Notification"
                    className="w-4"
                    width={100}
                    height={0}
                    priority
                />
                <Image
                    src="/user-01.png"
                    alt="Notification"
                    className="w-8 h-8"
                    width={100}
                    height={0}
                    priority
                />
            </div>
            </div>
            {/* ===Second Navbar=== */}
            <div className='flex justify-between items-center px-2 py-2 mt-1 bg-pageBackground'>
            <div className='flex items-center gap-2'>
                <Image
                    src="/bar.png"
                    alt="Bar"
                    className="w-6"
                    width={100}
                    height={0}
                    priority
                />
                <div className='flex items-center gap'>
                <Image
                    src="/phone.png"
                    alt="Phone"
                    className="w-4"
                    width={100}
                    height={0}
                    priority
                />
                <h1 className='text-xs'>09139124809</h1>
                </div>
            </div>
            <div className='text-xs'>
                <ul className='flex items-center gap-2'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/order'>My orders</a></li>
                    <li><a href='/aboutUs'>About Us</a></li>
                </ul>
            </div>
            </div>  
        </div> 

         {/* ===Current Category=== */}
         <div className='px-4'>
            <h1 className='font-bold text-lg'>Men's Health</h1>
            <p className='font-light text-xs'>Best collection for optimum health</p>
         </div>

         {/* ===Search bar=== */}
         <div className='px-2 flex items-center justify-between gap-2 py-1'>
          <input type="search" className='px-4 py-1 border-2 border-themeColor focus:outline-lightThemeColor w-full text-xs text-black rounded-lg'/>
          <a href='/searchResult' className='bg-lightThemeColor rounded-xl p-2 hover:bg-themeColor'>
            <Image
              src="/search.png"
              alt="Search"
              className="w-4 h-4"
              width={100}
              height={0}
              priority
            />
          </a>
        </div>

        {/* ===Category Results=== */}
        <div className=''>
            <div className='pb-4'>
                <div className='grid grid-cols-2 gap-4 px-4 py-4'>
                    <a href='/productDetails'>
                        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 border border-gray-100 pb-4">
                        <div className="bg-[url('/item2.jpg')] bg-cover w-full h-48 rounded-t-lg">
                            <div className='w-full flex justify-end items-center p-4'>
                            <Image
                                src="/heartplus.png"
                                alt="plus sign"
                                className="w-6"
                                width={100}
                                height={0}
                                priority
                            />
                            </div>
                        </div>
                        <div className='px-4'>
                            <h1 className='text-sm text-gray-500'>125ml Organic Tea</h1>
                            <h2 className='text-lg font-extrabold text-themeColor'>&#8358;120</h2>
                        </div>
                        <div className='bg-white hover:bg-themeColor border border-themeColor rounded-sm mx-2 flex justify-center items-center py-1'>
                        <p className='text-xs'>Add to Cart</p>
                        
                        </div>
                        </div>
                    </a>
                    <a href='/productDetails'>
                        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 pb-4">
                        <div className="bg-[url('/item2.jpg')] bg-cover w-full h-48 rounded-t-lg">
                            <div className='w-full flex justify-end items-center p-4'>
                            <Image
                                src="/heartplus.png"
                                alt="plus sign"
                                className="w-6"
                                width={100}
                                height={0}
                                priority
                            />
                            </div>
                        </div>
                        <div className='px-4'>
                            <h1 className='text-sm text-gray-500'>125ml Organic Tea</h1>
                            <h2 className='text-lg font-extrabold text-themeColor'>&#8358;120</h2>
                        </div>
                        <div className='bg-white hover:bg-themeColor border border-themeColor rounded-sm mx-2 flex justify-center items-center py-1'>
                        <p className='text-xs'>Add to Cart</p>
                        
                        </div>
                        </div>
                    </a>
                    <a href='/productDetails'>
                        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 pb-4">
                        <div className="bg-[url('/item2.jpg')] bg-cover w-full h-48 rounded-t-lg">
                            <div className='w-full flex justify-end items-center p-4'>
                            <Image
                                src="/heartplus.png"
                                alt="plus sign"
                                className="w-6"
                                width={100}
                                height={0}
                                priority
                            />
                            </div>
                        </div>
                        <div className='px-4'>
                            <h1 className='text-sm text-gray-500'>125ml Organic Tea</h1>
                            <h2 className='text-lg font-extrabold text-themeColor'>&#8358;120</h2>
                        </div>
                        <div className='bg-white hover:bg-themeColor border border-themeColor rounded-sm mx-2 flex justify-center items-center py-1'>
                        <p className='text-xs'>Add to Cart</p>
                        
                        </div>
                        </div>
                    </a>
                    <a href='/productDetails'>
                        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 pb-4">
                        <div className="bg-[url('/item2.jpg')] bg-cover w-full h-48 rounded-t-lg">
                            <div className='w-full flex justify-end items-center p-4'>
                            <Image
                                src="/heartplus.png"
                                alt="plus sign"
                                className="w-6"
                                width={100}
                                height={0}
                                priority
                            />
                            </div>
                        </div>
                        <div className='px-4'>
                            <h1 className='text-sm text-gray-500'>125ml Organic Tea</h1>
                            <h2 className='text-lg font-extrabold text-themeColor'>&#8358;120</h2>
                        </div>
                        <div className='bg-white hover:bg-themeColor border border-themeColor rounded-sm mx-2 flex justify-center items-center py-1'>
                        <p className='text-xs'>Add to Cart</p>
                        
                        </div>
                        </div>
                    </a>       
                    <a href='/productDetails'>
                        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 pb-4">
                        <div className="bg-[url('/item2.jpg')] bg-cover w-full h-48 rounded-t-lg">
                            <div className='w-full flex justify-end items-center p-4'>
                            <Image
                                src="/heartplus.png"
                                alt="plus sign"
                                className="w-6"
                                width={100}
                                height={0}
                                priority
                            />
                            </div>
                        </div>
                        <div className='px-4'>
                            <h1 className='text-sm text-gray-500'>125ml Organic Tea</h1>
                            <h2 className='text-lg font-extrabold text-themeColor'>&#8358;120</h2>
                        </div>
                        <div className='bg-white hover:bg-themeColor border border-themeColor rounded-sm mx-2 flex justify-center items-center py-1'>
                        <p className='text-xs'>Add to Cart</p>
                        
                        </div>
                        </div>
                    </a>       
                    <a href='/productDetails'>
                        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 pb-4">
                        <div className="bg-[url('/item2.jpg')] bg-cover w-full h-48 rounded-t-lg">
                            <div className='w-full flex justify-end items-center p-4'>
                            <Image
                                src="/heartplus.png"
                                alt="plus sign"
                                className="w-6"
                                width={100}
                                height={0}
                                priority
                            />
                            </div>
                        </div>
                        <div className='px-4'>
                            <h1 className='text-sm text-gray-500'>125ml Organic Tea</h1>
                            <h2 className='text-lg font-extrabold text-themeColor'>&#8358;120</h2>
                        </div>
                        <div className='bg-white hover:bg-themeColor border border-themeColor rounded-sm mx-2 flex justify-center items-center py-1'>
                        <p className='text-xs'>Add to Cart</p>
                        
                        </div>
                        </div>
                    </a>       
                    <a href='/productDetails'>
                        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 pb-4">
                        <div className="bg-[url('/item2.jpg')] bg-cover w-full h-48 rounded-t-lg">
                            <div className='w-full flex justify-end items-center p-4'>
                            <Image
                                src="/heartplus.png"
                                alt="plus sign"
                                className="w-6"
                                width={100}
                                height={0}
                                priority
                            />
                            </div>
                        </div>
                        <div className='px-4'>
                            <h1 className='text-sm text-gray-500'>125ml Organic Tea</h1>
                            <h2 className='text-lg font-extrabold text-themeColor'>&#8358;120</h2>
                        </div>
                        <div className='bg-white hover:bg-themeColor border border-themeColor rounded-sm mx-2 flex justify-center items-center py-1'>
                        <p className='text-xs'>Add to Cart</p>
                        
                        </div>
                        </div>
                    </a>       
                    <a href='/productDetails'>
                        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 pb-4">
                        <div className="bg-[url('/item2.jpg')] bg-cover w-full h-48 rounded-t-lg">
                            <div className='w-full flex justify-end items-center p-4'>
                            <Image
                                src="/heartplus.png"
                                alt="plus sign"
                                className="w-6"
                                width={100}
                                height={0}
                                priority
                            />
                            </div>
                        </div>
                        <div className='px-4'>
                            <h1 className='text-sm text-gray-500'>125ml Organic Tea</h1>
                            <h2 className='text-lg font-extrabold text-themeColor'>&#8358;120</h2>
                        </div>
                        <div className='bg-white hover:bg-themeColor border border-themeColor rounded-sm mx-2 flex justify-center items-center py-1'>
                        <p className='text-xs'>Add to Cart</p>
                        
                        </div>
                        </div>
                    </a>       
                </div> 
                <div className='mt-4 flex justify-center'>
                    <button className='px-8 py-2 rounded-md text-white font-bold bg-themeColor text-xs'>Load More...</button>
                </div>
            </div>
        </div>

        {/* ===Other Categories=== */}
        {/* <div className='p-4'>
            <h1 className='font-md font-bold'>Other Categories</h1>
        </div> */}
    </div>
  )
}

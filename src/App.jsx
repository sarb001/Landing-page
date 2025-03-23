
import { Avatar } from 'flowbite-react';
import { ArrowRight, ChevronDown, Eye, FileText, Hash, Lightbulb, PartyPopper, Plus, Search, ThumbsUp, X  } from 'lucide-react';

function App() {

  const AllLogos = [
    { id : 1 , image : "/fox.png"   , alt : "fox-image"  , width : "w-20"},
    { id : 1 , image :  "/lonely-planet-1.png"    , alt : "lonely-planet" },
    { id : 3 , image : "/intuit-1.png"  , alt : "intuit" },
    { id : 4 , image :  "/carvana-1.png"  , alt : "carvana" },
    { id : 5 , image : "/kiva_logo-1.png"   , alt : "kiva_logo"  , width : "w-20" },
    { id : 6 , image : "/red-taget-1.png"  , alt : "red-target" , width : "w-20" },
    { id : 7 , image :  "/Deva_curl-1.png"  , alt : "deva_curl" },
  ]


  return (
    <div  className ='bg-[#f4f0e6]'>

        <div className='mx-48 cursor-pointer'>

          <section id = "header" className='grid grid-cols-2 gap-[10px] py-4  items-center '>

            <div className='grid grid-cols-5 gap-[10px] text-[14px]  font-semibold'> 
              
                    <div className='w-[70px]'>
                      <img src = "/Slack-main.svg"  className=''  alt = "slack-logo" />
                    </div>

                <div className='flex gap-1 items-center '> 
                  <div> Product </div>
                  <div> <ChevronDown  /> </div>
                </div> 

                  <div> Enterprise </div> 
                  <div> Resources </div> 
                  <div> Pricing </div> 
            </div>

            <div className='grid grid-cols-[0.5fr_0.5fr_1fr_1fr]  gap-4'>
              <div> <Search  /> </div>
              <div className='font-semibold'>  Signin  </div>
              <button className='text-[14px] border-2 border-[#944c9e] text-[#6d3475] font-semibold p-[2px] rounded-[3px] '> TALK TO SALES </button>
              <button className='text-[14px] bg-[#944c9e] text-white rounded-[3px] font-semibold'> TRY FOR FREE </button>
            </div>

          </section>

          <section id = "add-popup" className='text-[13px] grid grid-cols-[6fr_0.5fr] gap-[10px] text-white bg-[#2a74d4] p-4 rounded-4xl '>
            <div  className='flex flex-row'>
                <div> Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world . 
                </div>
                <div className='flex flex-row'>
                   <div> Let's go </div>
                   <div >
                      <a href="/" target="_blank" >  <ArrowRight  /> </a>
                   </div>
                </div>
            </div>
            <div> <X /> </div>
          </section>

          <section id = "mainsection" className='p-2 my-4 grid grid-cols-2 gap-16'>

            <div>
              <div className='text-4xl font-bold'> Slack is where the future works </div>
              <div className='text-[15px] my-4'> Transform the way you work with one place for everyone and everything you need to get stuff done </div>
              <div className='grid grid-cols-[2.5fr_4fr] gap-2'>
                <button className='bg-[#6d3475] p-2 py-3 text-xs text-white rounded-[3px] '> TRY FOR FREE </button>

                <button className='bg-[#2a74d4] rounded-[3px] py-1 px-1 grid grid-cols-[0.5fr_3fr] gap-2 text-xs items-center text-white'> 
                  <div className='w-[32px] h-6'>
                     <img src = "/google-g-logo.png" className='h-7'  alt = "google-logo" />
                  </div>
                  SIGN UP WITH GOOGLE </button>

              </div>
            </div>

            <div className='relative'>
              
                <div className='rounded-xl  w-full h-60 grid grid-rows-[1fr_6fr] '>

                  <div>
                      <div className='bg-[#43126a] flex  gap-1 w-full h-full rounded-t-[10px] pl-2 pt-2 '>
                        <div className='bg-pink-900 rounded-xl w-[12px] h-[2vh]'>  </div>
                        <div className='bg-yellow-500 rounded-xl w-[12px] h-[2vh]'>  </div>
                        <div  className='bg-green-700 rounded-xl w-[12px] h-[2vh]'>  </div>
                      </div>
                  </div>

                  <div className=' grid grid-cols-[2fr_5fr]'>
                      
                      <div className='bg-[#944c9e] text-xs  text-white font-bold rounded-bl-[10px] '>

                        <div className='my-4'>

                          <div className='grid grid-cols-[0.5fr_2fr_0.5fr] py-1 gap-2 items-center px-1 '>  
                            <div> <ChevronDown  size={14} /> </div>  
                            <div> Channels </div>
                            <div> <Plus  size={14} /> </div>  
                          </div>

                          <div className='grid grid-cols-[1fr_5fr] gap-1 px-1 bg-[#2a74d4] p-1 '> 
                            <div> <Hash size  = {15}  />  </div> 
                            <div className='text-[10px] flex items-center '>  project-unicorn  </div>
                            </div>
                        </div>

                      </div>

                      <div className='bg-white rounded-br-[10px] px-6 py-2 '>

                        <div className='grid grid-cols-2 gap-4'>
                          <div className='text-[13px] font-bold flex items-center'>  #project-unicorn </div>
                          <div>  

                          <Avatar.Group>
                              <Avatar img="/men-1.webp"  stacked />
                              <Avatar img="/men2.webp"  stacked />
                              <Avatar img="/men-3.webp"  stacked />
                              <Avatar img="/men-4.jpg"  stacked />
                              <Avatar img="/men-5.webp"  stacked />
                            </Avatar.Group>
                          </div>
                        </div>

                        <div>
                          
                            <div className='grid grid-cols-[1fr_5fr] gap-1'>
                                <div> 
                                  <Avatar img = "white-female.jpg" bordered />
                                </div>
                                <div className='text-[10px]'>
                                  <div className='text-[11px] font-bold'> Zoe Maxwell </div>
                                  <div> Are we ready for launch ? </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-[1fr_5fr] gap-1 py-2'>
                                <div> 
                                    <Avatar img = "male-img.jpg" bordered />
                                </div>
                                <div className='text-[10px]'>
                                  <div className='text-[11px] font-bold'> Matt Brewer </div>
                                  <div> Here's the run of show: </div>
                                </div>
                            </div>

                            <div className='grid ml-12 grid-cols-[0.5fr_5fr] w-40  gap-1 p-1 border-2 border-gray-300 rounded-[5px] '>
                              <div>  <FileText /> </div>
                              <div className='grid grid-rows-2 gap-[1px] py-1'>  
                                <div className='bg-gray-200 w-22 h-[5px] rounded-2xl '>  </div>
                                <div className='bg-gray-200 w-13 h-[5px] rounded-2xl '>  </div>
                              </div>
                            </div>

                        </div>

                      
                      </div>
                    
                  </div>
                </div>
                
            </div>

          </section>

          <section id = "logo-section">
            <div className='grid grid-cols-7 gap-4 items-center '>
               {AllLogos?.map(i => {
                return (
                  <div key = {i?.id} className = {` ${i?.width ? i?.width : "w-30" } `}>
                      <img src = {i?.image} alt = {i?.alt} />
                  </div>
                )
               })}
            </div>
          </section>
          
          <section id = "future-section" className='grid grid-cols-2 gap-2'>

            <div className='w-full h-[30vh]'>  
              <img src = "/future-img.PNG" className='h-[25vh]'  alt = "future" />
            </div>

            <div>
                <div className='font-bold text-3xl'> Now is your moment to build a better tomorrow </div>
                <div className='text-[16px] py-2'> We've seen what the future can be . Now it's time to decide what it will be </div>
                <div className='py-2'>
                    <button className='border-2 rounded-[3px] text-[#944c9e] font-semibold px-4 py-2'> WATCH VIDEO </button>
                </div>
            </div>

          </section>


          <div section = "emoji-section">
              <button  className='bg-gray-100 p-1 px-2 rounded-2xl absolute top-32 right-115 '>  👍 3  </button>
              <button  className='bg-gray-100 p-1 px-2 rounded-2xl absolute top-60 right-45 '>  💡  8  </button>
              <button  className='bg-gray-100 p-1 px-2 rounded-2xl absolute top-65 right-142 '>  🎉 5  </button>
              <button  className='bg-gray-100 p-1 px-2 rounded-2xl absolute top-85 right-60 '> 👀 5   </button>
          </div>

        </div>
        
    </div>
  )
}
export default App

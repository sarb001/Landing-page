
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

        <div className='mx-48'>

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

            <div>
                <div>
                  <div> 3 </div> 
                  <div>  <ChevronDown  /> Channels <Plus  /> </div>
                  <div> <Hash  /> project-unicorn </div>
                </div>
                <div>
                  <div> #project-unicorn </div>
                  <div>
                        <ThumbsUp  />
                        <Lightbulb />
                        <PartyPopper  />
                        <FileText  />
                        <Eye  />
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
          
          <section id = "future-section">
            <div>  </div>
            <div>
                <div> Now is your moment to build a better tomorrow </div>
                <div> We've seen what the future can be . Now it's time to decide what it will be </div>
                <div>
                    <button> WATCH VIDEO </button>
                </div>
            </div>
          </section>

          <section id = "toast-section">
            <div> This website uses cookies to enhane user experience and to analyze performance and traffic on our website . We also share information about your use of our site with our social media, adverstising and analytic partners <span> More Info </span> </div>
            <div>
              <button> ACCEPT ALL COOKIES </button>
            </div>
            <div> Hey there /  Want to know something cool ? </div>
            <div>
              hand sign
            </div>
            <div> /\ </div>
          </section>

        </div>
        
    </div>
  )
}

export default App

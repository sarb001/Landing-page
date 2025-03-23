
import { ArrowRight, ChevronDown, Eye, FileText, Hash, Lightbulb, PartyPopper, Plus, Search, ThumbsUp, X  } from 'lucide-react';

function App() {

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

          <section id = "add-popup">
            <span> Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world 
              <span> Let's go  <ArrowRight  /> </span>
              <span> <X /> </span>
            </span>
          </section>

          <section id = "mainsection">
            <div>
              <div> Slack is where the future works </div>
              <div> Transform the way you work with one place for everyone and everything you need to get stuff done </div>
              <div>
                <button> TRY FOR FREE </button>
                <button> SIGN UP WITH GOOGLE </button>
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

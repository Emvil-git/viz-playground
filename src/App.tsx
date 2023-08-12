import { HeartIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

function App() {

  const [heartClick, setHeartClick] = useState<boolean>(false)

  return (
    <main className="w-screen h-screen bg-gray-800 flex overflow-x-hidden justify-center py-8">
      <div className="grid grid-cols-2 gap-12 font-space">
        <div className="h-[620px] w-[400px] overflow-hidden rounded-tr-full rounded-tl-full rounded-bl-full bg-slate-50 bg-[url('https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/345038901_1440837113325471_4497753968688532158_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGGS00iR6JbjP-V7V8g-RfWaJn3j2sAymxomfePawDKbLaKNsfGhPg0nxE2a_dQvVF3-BhnMT3Gs_QvX2BHWXvz&_nc_ohc=mrgxgIxOM7YAX92p1W7&_nc_ht=scontent.fmnl9-3.fna&_nc_e2o=f&oh=00_AfDvp2_E8_Yx0veHPSoV__6vZ5doKNL8ADiQ9fdj5zz-UA&oe=64DBC90B')] bg-center bg-cover transition-all shadow-xl">
          <div
            className="relative h-full w-full backdrop-blur-md p-6 opacity-0 hover:opacity-100 transition bg-pink-800/25 drop-shadow-lg text-amber-100/75 cursor-pointer duration-500 ease-out"
          >
            <div className="h-full w-full  rounded-tr-full rounded-tl-full rounded-bl-full blur-[5px] opacity-50">
              <div className="pt-8 flex flex-col items-center drop-shadow-lg rounded-t-full border-2 border-amber-100/50 pb-12 box-border border-b-0 ">
                <HeartIcon className="h-24 mb-4"/>
                <span className="text-2xl font-bold">피피우</span>
                <h1 className="font-light text-[124px] leading-[100px] font-bagel font-extrabold  flex flex-col items-center">
                  케이시
                </h1>
              </div>
              <div className="flex -mt-4 justify-between">
                <div className="border-b-2 border-amber-100/50 w-1/3 h-[17.5px]"></div>
                <div className="text-center text-2xl font-bold">사랑해</div>
                <div className="border-b-2 border-amber-100/50 w-1/3 h-[17.5px]"></div>
              </div>
              <span className="flex -mt-[2px] font-bold border-t-0 border-2 border-amber-100/50 h-12 justify-center items-center p-2 py-6 pt-[36px] korean-span-thing">
                너무 사랑해 <HeartIcon className="h-3 mx-2"/>
                너무 사랑해 <HeartIcon className="h-3 mx-2"/>
                너무 사랑해
              </span>

              <div className="flex w-full h-[186px] -mt-[2px]">
                <div className="w-2/3 border-l-2 border-b-2 h-full rounded-bl-[11rem] border-amber-100/50"></div>
                <div className="flex flex-col justify-end h-full items-end w-1/3 text-right ">
                  <span className="w-2/3 leading-[18px] -mb-1 font-bold">로켘불됴약 니앙굷 췡바이꿻노기</span>
                  <span className="text-[44px] font-barcode -mb-[29.5px]">Casey</span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 p-6 h-full w-full  rounded-tr-full rounded-tl-full rounded-bl-full">
              <div className="pt-8 flex flex-col items-center drop-shadow-lg rounded-t-full border-2 border-amber-100/50 pb-12 box-border border-b-0 ">
                <HeartIcon onClick={() => {setHeartClick(!heartClick)}} className={`h-24 mb-4 transform hover:scale-125 transition-all duration-100 ease-[cubic-bezier(.5,1.12,.78,1.38)] ${heartClick ? 'text-rose-500 scale-110' : ''}`}/>
                <span className="text-2xl font-bold">피피우</span>
                <h1 className="font-light text-[124px] leading-[100px] font-bagel font-extrabold  flex flex-col items-center">
                  케이시
                </h1>
              </div>
              <div className="flex -mt-4 justify-between">
                <div className="border-b-2 border-amber-100/50 w-1/3 h-[17.5px]"></div>
                <div className="text-center text-2xl font-bold">사랑해</div>
                <div className="border-b-2 border-amber-100/50 w-1/3 h-[17.5px]"></div>
              </div>
              <span className="flex -mt-[2px] font-bold border-t-0 border-2 border-amber-100/50 h-12 justify-center items-center p-2 py-6 pt-[36px] korean-span-thing">
                <span className="hover:underline underline-offset-2 hover:text-rose-300">너무 사랑해</span> <HeartIcon className="h-3 mx-2"/>
              <span className="hover:underline underline-offset-2 hover:text-rose-300">너무 사랑해</span> <HeartIcon className="h-3 mx-2"/>
                <span className="hover:underline underline-offset-2 hover:text-rose-300">너무 사랑해</span> 
              </span>

              <div className="flex w-full h-[186px] -mt-[2px]">
                <div className="w-2/3 border-l-2 border-b-2 h-full rounded-bl-[11rem] border-amber-100/50"></div>
                <div className="flex flex-col justify-end h-full items-end w-1/3 text-right ">
                  <span className="w-2/3 leading-[18px] -mb-1 font-bold">로켘불됴약 니앙굷 췡바이꿻노기</span>
                  <span className="text-[44px] font-barcode -mb-[29.5px]">Casey</span>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        <div
          id="seen-on-pinterest"
          className="relative h-[620px] w-[400px] bg-amber-50/25 rounded-3xl overflow-hidden ease-[cubic-bezier(.14,1.07,.88,1)] transition-all hover:p-8 cursor-default drop-shadow-lg border-2 border-slate-50/50 border-b-0 border-r border-r-slate-50/25">
          <div
            className="h-full w-full opacity-75 hover:opacity-25 transition-all duration-[350ms] p-8 pb-24 flex flex-col justify-between text-xl ease-[cubic-bezier(.14,1.07,.88,1)]"
          >
            
          </div>
          <section className="absolute h-full w-full top-0 left-0 flex flex-col gap-24 p-8">
            <span>I saw this effect</span>
            <span className="text-right text-4xl">on Pinterest</span>
            <span className="text-[48px] leading-[56px]">I thought it was cool.</span>
          </section>
          <span className="absolute bottom-0 left-0 text-xs p-4 text-justify">** I had to use css on this one, so that the blue part maintains its shape even if the mouse is outside of it</span>
        </div>

        <div className="flex justify-center h-[620px] w-[400px] relative">
          <div className="h-full w-1/2 flex flex-col gap-2">
            <div className="h-2/3 w-full bg-amber-50 rounded-t-full p-4 pb-8 relative shadow-lg">
              <img src="https://i.pinimg.com/564x/06/2d/52/062d522d78436469ec22375c47c1d7b7.jpg" className="h-full w-full object-cover rounded-t-full shadow" alt="" />
              <div className="h-6 w-6 border-l-2 border-l-cyan-900/75  border-b-2 border-b-cyan-900/75 absolute bottom-6 left-2"></div>
              <div className="h-4 w-24  bg-cyan-900/75 absolute bottom-2 right-4"></div>
            </div>
            <div className="h-1/3 w-full bg-cyan-900 rounded-b-full flex flex-col justify-end items-center pb-2 px-2 shadow-lg">
              <div className="flex flex-col rounded-b-full justify-between w-full h-full border border-t-0 border-amber-50/25">
                <div>
                  <div className="bg-amber-50/75 h-5 w-2 ms-2"></div>
                  <div className="bg-amber-50/75 h-[2px] w-2 ms-2 mt-[2px]"></div>

                  <p className="text-xs text-amber-50/75 mt-[2px] ms-2 w-[12px] leading-[12px]">R C M</p>

                  <div className="bg-amber-50/75 h-4 w-2 ms-2 mt-[2px]"></div>
                </div>
                <div className="w-full text-center">
                  <p className="text-amber-50/75 -mb-6">PRECINCT</p>
                  <p  className="text-[72px] font-bold text-amber-50">
                    41
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden flex text-end justify-end items-end h-[200px] w-[200px] backdrop-blur-sm absolute top-[240px] left-[200px] rounded shadow-lg shadow-gray-900/25 border-t border-t-slate-50/50 border-l border-l-slate-50/50 rounded-bl-[4rem] rounded-tr-[4rem] p-4 bg-slate-50/25">
            <span className="text-white font-light text-xs w-1/3 leading-[14px]">bro you're not the thinker</span>
            <div className="w-2 h-6 bg-slate-50/75 mb-[1.5px] ms-[12px]"></div>
            <span className="text-white font-light absolute bottom-[56px] left-[8px] text-xs rotate-[-90deg] origin-top-left">LT-2Y Dubois, H.</span>
          </div>

          <div className="absolute w-4 h-4 rounded-full bg-white top-[64px] left-[172px] outline outline-4 outline-blue-300 outline-offset-4 drop-shadow">

          </div>

          <span className="absolute bg-gray-900 text-slate-50 text-center overflow-hidden h-6 w-[160px]">I *THINK* I am.</span>
        </div>

        <div className="h-[620px] w-[400px] flex gap-4">
          <div className="bg-[url(https://i.pinimg.com/564x/d3/4a/74/d34a74a734cf92eca8d88ad1a830dba8.jpg)] bg-cover w-1/2 rounded-bl-[3rem] rounded-tr-[3rem] relative overflow-hidden shadow-xl shadow-rose-900">
            <div className="bg-amber-100 w-full h-1/3 absolute bottom-0">

            </div>
          </div>

          <div className="bg-amber-50 bg-cover w-1/2 rounded-bl-[3rem] rounded-tr-[3rem] relative overflow-hidden shadow-xl shadow-rose-900 p-2">
            <img src="https://i.pinimg.com/564x/d3/4a/74/d34a74a734cf92eca8d88ad1a830dba8.jpg" alt="" className="h-2/3 object-cover w-full rounded-tr-[2.5rem]"/>
          </div>
        </div>

      </div>
    </main>
  )
}

export default App

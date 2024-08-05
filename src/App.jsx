import { useEffect, useState } from "react";
import "./App.css";
import logo from "../public/svg/Twitter-Logo.svg"

function App() {
  const [startup, setStartup] = useState(true)
  useEffect(()=> {
    const time = setTimeout(()=>{
      setStartup(false)
    },1000)

    return () => {
      clearTimeout(time)
    }
  },[])

  return (
    <>
      <div className=" vs:px-0 h-screen w-full flex flex-row justify-center  bg-black text-[#e6e9e8] px-5 ">
       { startup && <div className={` flex justify-center items-center bg-black h-full w-full absolute  z-10`}>
          <img
            className="invert absolute h-[90px]" src="public/svg/Twitter-Logo.svg" alt=""/>
        </div>}

        <div className="vs:w-[15%]  invert no-scrollbar lg:w-[18%] lg:min-w-[250px] pt-3 lg:items-start sm:flex sm:flex-col sm:items-end sm:pr-3 sm:pl-0 overflow-scroll ">
          <div
            className="vs:w-full vs:flex vs:justify-center vs:px-0 vs:pl-0 vs:pr-2
          rounded-full w-fit pl-2 pr-4 py-2 hover:bg-[#dfdfdd]"
          >
            <img
              className="h-9 pl-2 vs:pl-0  cursor-pointer"
              src={logo}
              alt="logo"
            />
          </div>

          <div
            className="  cursor-pointer vs:px-0 
          flex items-center justify-center vs:justify-center vs:w-full vs:items-end
          rounded-full w-fit pl-2 pr-4 py-2   hover:bg-[#dfdfdd] 
           text-black text-xl gap-[18px] font-semibold "
          >
            <img className="h-6 " src="./public/svg/home.svg" alt="" />
            <span className="flex smm:hidden ">Home</span>
          </div>

          <div
            className="  cursor-pointer vs:px-0 
          flex items-center justify-center vs:justify-center vs:w-full vs:items-end
          rounded-full w-fit pl-2 pr-4 py-2   hover:bg-[#dfdfdd] 
           text-black text-xl gap-[18px] font-semibold "
          >
            <img className="h-6 " src="./public/svg/search.svg" alt="" />
            <span className="lg:flex smm:hidden">Explore</span>
          </div>

          <div
            className="  cursor-pointer vs:px-0 
          flex items-center justify-center vs:justify-center vs:w-full vs:items-end
          rounded-full w-fit pl-2 pr-4 py-2   hover:bg-[#dfdfdd] 
           text-black text-xl gap-[18px] font-semibold "
          >
            <img className="h-6 " src="./public/svg/Notification.svg" alt="" />
            <span className="lg:flex smm:hidden">Notification</span>
          </div>

          <div
            className="  cursor-pointer vs:px-0 
          flex items-center justify-center vs:justify-center vs:w-full vs:items-end
          rounded-full w-fit pl-2 pr-4 py-2   hover:bg-[#dfdfdd] 
           text-black text-xl gap-[18px] font-semibold "
          >
            <img className="h-6 " src="./public/svg/Message.svg" alt="" />
            <span className="lg:flex smm:hidden">Messages</span>
          </div>

          <div
            className="  cursor-pointer vs:px-0 
          flex items-center justify-center vs:justify-center vs:w-full vs:items-end
          rounded-full w-fit pl-2 pr-4 py-2   hover:bg-[#dfdfdd] 
           text-black text-xl gap-[18px] font-semibold "
          >
            <img className="h-6 " src="./public/svg/Grok.svg" alt="" />
            <span className="lg:flex smm:hidden">Grok</span>
          </div>

          <div
            className="  cursor-pointer vs:px-0 
          flex items-center justify-center vs:justify-center vs:w-full vs:items-end
          rounded-full w-fit pl-2 pr-4 py-2   hover:bg-[#dfdfdd] 
           text-black text-xl gap-[18px] font-semibold "
          >
            <img className="h-6 " src="./public/svg/Communities.svg" alt="" />
            <span className="lg:flex smm:hidden">Communities</span>
          </div>

          <div
            className="  cursor-pointer vs:px-0 
          flex items-center justify-center vs:justify-center vs:w-full vs:items-end
          rounded-full w-fit pl-2 pr-4 py-2   hover:bg-[#dfdfdd] 
           text-black text-xl gap-[18px] font-semibold "
          >
            <img className="h-6 " src="./public/svg/Twitter-Logo.svg" alt="" />
            <span className="lg:flex smm:hidden">Premium</span>
          </div>

          <div
            className="  cursor-pointer vs:px-0 
          flex items-center justify-center vs:justify-center vs:w-full vs:items-end
          rounded-full w-fit pl-2 pr-4 py-2   hover:bg-[#dfdfdd] 
           text-black text-xl gap-[18px] font-semibold "
          >
            <img className="h-6 " src="./public/svg/Profile.svg" alt="" />
            <span className="lg:flex smm:hidden">Profile</span>
          </div>

          <div
            className="  cursor-pointer vs:px-0 
          flex items-center justify-center vs:justify-center vs:w-full vs:items-end
          rounded-full w-fit pl-2 pr-4 py-2   hover:bg-[#dfdfdd] 
           text-black text-xl gap-[18px] font-semibold "
          >
            <img className="h-6 " src="./public/svg/More.svg" alt="" />
            <span className="lg:flex smm:hidden">More</span>
          </div>
<div className="flex vs:justify-center ">

          <button className="vs:h-8 vs:w-fit vs:text-xs vs:px-1  bg-orange-600 lg:px-[100px] h-[50px] rounded-full text-black font-extrabold mt-[16px] sm:px-2 sm:mx-1">
            Post
          </button>
</div>

          <div className="lg:gap-2 flex vs:justify-center sm:gap-0 lg:mr-2 sm:mr-0 lg:mt-8 sm:mt-5 rounded-full lg:p-1 ms:p-0 lg:pl-2 sm:pl-0 lg:flex lg:justify-between lg:items-center cursor-pointer h-[65px] hover:bg-[#dfdfdd] ">
            <div className="flex my-4">
              <img
                className="h-12 mr-2 invert flex rounded-full "
                src="./public/svg/DP.jpg"
                alt="DP"
              />

              <div className="vs:hidden sm:hidden lg:flex flex-col justify-center">
                <p className="text-black text-sm font-bold">Mohammed Khan</p>
                <p className="text-black text-xs">@_MohdShadab_</p>
              </div>
            </div>

            <div>
              <img
                className=" vs:hidden sm:hidden lg:flex mr-1"
                src="./public/svg/N-Dots.svg"
                alt=""
              />
            </div>
          </div>

          {/* ---------------------------------------- */}
          {/* <div className="h-10">khan</div>*/}
        </div>

        {/* ------------ section-2------------------------- */}

        <div className="no-scrollbar w-[45%] h-screen+[50px] overflow-scroll vs:w-[85%] vs-px-2 mb-1 border-x border-gray-700 s:w-[80%]">
          <div className=" sticky flex h-10 pr-4 bg-black opacity-80 backdrop-blur-3xl  top-0 justify-between border-b border-gray-700 ">
            <div className="flex items-center justify-between w-[70%] xxs:pl-[10%] pl-[20%] text-[#fafafa] ">
              <p>For you
          <div className="bg-blue-500 rounded h-[6px] w-[53px] font-bold absolute bottom-[0px]">
            
          </div>


              </p>
              <p className="text-[#9e9c9c]" >Following</p>
            </div>
            <div className="invert items-center flex">
              <img className="h-5 " src="public/svg/setting.svg" alt="" />
            </div>
          </div>

          {/* <p className=" h1 w-5 bg-blue-400"></p> */}

          <div className="pl-4 flex xxs:flex-col p-3 min-h-[100px] justify-between pr-5 border-b border-gray-700">
            <div className="flex">
              <div className="w-fit h-full">
                <img
                  className="h-10 min-w-10 rounded-full "
                  src="public/svg/DP.jpg"
                  alt=""
                />
              </div>
              <div>
                <input
                  className=" text-[#666666] bg-black p-3 rounded-3xl"
                  type="search"
                  onChange={Text}
                  placeholder="What is happening?!"
                />
                <div className=" flex gap-2 mt-1">
                  <span class="material-symbols-outlined text-blue-400">
                    image
                  </span>
                  <span class=" text-blue-400 material-symbols-outlined">
                    gif_box
                  </span>
                  <span class=" text-blue-400 material-symbols-outlined ">
                    event_list
                  </span>
                  <span class=" text-blue-400 material-symbols-outlined">
                    sentiment_satisfied
                  </span>
                  <span class=" text-blue-400 material-symbols-outlined">
                    event
                  </span>
                  <span class=" text-blue-400 material-symbols-outlined">
                    location_on
                  </span>

                  {/* <img className="h-6" src="public/svg/image.svg " alt="" />
                  <img className="h-6" src="public/svg/gif.svg " alt="" />
                  <img className="h-6 text-blue-400" src="public/svg/list.svg " alt="" />
                  <img className="h-6" src="public/svg/smily.svg " alt="" />
                  <img className="h-6" src=" public/svg/Calender.svg " alt="" />
                  <img className="h-6" src=" public/svg/location.svg " alt="" /> */}
                </div>
              </div>
            </div>
            <div className="flex items-end xxs:pl-10">
              <button className="bg-[#00a7ff] px-[20px] h-[35px] rounded-full text-white font-extrabold mt-[16px] ">
                Post
              </button>
            </div>
          </div>

          <div className="border-b border-gray-800">
            <p className="hover:cursor-pointer hover:underline flex justify-center items-center py-2 font-semibold text-[#42b5f4]">
              Show 455 posts
            </p>
          </div>

          {/* ---------------- Posts --------------- */}


          <div className=" w-[100%] p-2 border-b border-gray-800">
            <div className="flex">
              <div className="w-[40px]">
                <img
                  className="max-h-10 rounded-full"
                  src="public/svg/rahulGandhiDP.jpg"
                  alt=""
                />
              </div>
              <div className="w-[85%]">
                <div className="flex items-center gap-1 px-2">
                  <div className="flex gap-1 xxs:flex-col xxs:gap-0 ">
                    <div className="flex items-center gap-1">
                      {/* name */}
                      <h4 className="font-bold">Rahul Gandhi</h4>
                      <img
                        className="h-[14px]"
                        src="public/svg/VerrfiedTick.png"
                        alt=""
                      />
                    </div>

                    {/* username */}
                    <p className=" text-sm font-semibold text-[#666666]">
                      @rahulgandhi
                    </p>
                  </div>
                  <div className="xxs:flex xxs:h-10  h-6">
                    {/* post-Time */}
                    <p className=" text-sm font-semibold text-[#666666]">
                      -1h
                    </p>
                  </div>
                </div>
                <p className="text-xs text-left px-2 xxs:mt-2">
                  The Education Minister - far removed from India’s ground
                  reality - claims there have been no paper leaks in the last 7
                  years. The unfortunate truth is that the Indian examination
                  system is up for sale to the rich, causing millions of
                  students to suffer. The issue is systemic and should be
                  addressed with sincerity, rather than resorting to political
                  spin laden with lies.
                </p>
              </div>

              <div className="w-[8%]">
                <img className="invert" src="public/svg/N-Dots.svg" alt="" />
              </div>
            </div>
            <div className="flex m-auto mt-6 rounded-2xl overflow-hidden w-[80%]">
              <video autoPlay src="public/video/RAHULG~1.MP4"></video>
            </div>

            <div className="flex justify-between items-center w-[80%] m-auto mt-3 h-8 ">
              <div className="flex  text-gray-500 gap-1 hover:text-blue-400 ">
                <span class="material-symbols-outlined xxs:text-sm ">chat_bubble</span>
                <span className="xxs:text-xs ">20.7k</span>
              </div>

              <div className="flex text-gray-500 hover:text-green-400">
                <span class="material-symbols-outlined xxs:text-sm">repeat</span>
                <span className="xxs:text-xs ">63.5k</span>
              </div>

              <div className="flex text-gray-500 hover:text-pink-400">
                <span class="material-symbols-outlined xxs:text-sm">favorite</span>
                <span className="xxs:text-xs ">459k</span>
              </div>

              <div className="flex text-gray-500 hover:bg-gray-90 hover:text-blue-600">
                <span class="material-symbols-outlined xxs:text-sm">bar_chart</span>
                <span className="xxs:text-xs ">4M</span>
              </div>

              <div className="flex gap-1 text-gray-500">
                <span class="material-symbols-outlined xxs:text-sm hover:text-purple-400">
                  bookmark
                </span>
                <span class=" material-symbols-outlined xxs:text-sm hover:text-orange-400">
                  ios_share
                </span>
              </div>
            </div>
          </div>

          <div className=" w-[100%] p-2 border-b border-gray-800">
            <div className="flex">
              <div className="w-[40px]">
                <img
                  className="max-h-10 rounded-full"
                  src="public/svg/elonMuskDP.jpg"
                  alt=""
                />
              </div>
              <div className="w-[85%]">
                <div className="flex items-center gap-1 px-2">
                  <div className="flex gap-1 xxs:flex-col xxs:gap-0 ">
                    <div className="flex items-center gap-1">
                      {/* name */}
                      <h4 className="font-bold">Elon Musk</h4>
                      <img
                        className="h-[14px]"
                        src="public/svg/VerrfiedTick.png"
                        alt=""
                      />
                    </div>

                    {/* username */}
                    <p className=" text-sm font-semibold text-[#666666]">
                      @elonmusk
                    </p>
                  </div>
                  <div className="xxs:flex xxs:h-10  h-6">
                    {/* post-Time */}
                    <p className=" text-sm font-semibold text-[#666666]">
                      -2h
                    </p>
                  </div>
                </div>
                <p className="text-xs text-left px-2 xxs:mt-2">
                High time for an AI fashion show
                </p>
              </div>

              <div className="w-[8%]">
                <img className="invert" src="public/svg/N-Dots.svg" alt="" />
              </div>
            </div>
            <div className="flex m-auto mt-6 rounded-2xl overflow-hidden w-[80%]">
              <video autoPlay src="public/video/elonMuskVideo.MP4"></video>
            </div>

            <div className="flex justify-between items-center w-[80%] m-auto mt-3 h-8 ">
              <div className="flex  text-gray-500 gap-1 hover:text-blue-400 ">
                <span class="material-symbols-outlined xxs:text-sm ">chat_bubble</span>
                <span className="xxs:text-xs ">70.2k</span>
              </div>

              <div className="flex text-gray-500 hover:text-green-400">
                <span class="material-symbols-outlined xxs:text-sm">repeat</span>
                <span className="xxs:text-xs ">163.2k</span>
              </div>

              <div className="flex text-gray-500 hover:text-pink-400">
                <span class="material-symbols-outlined xxs:text-sm">favorite</span>
                <span className="xxs:text-xs ">991k</span>
              </div>

              <div className="flex text-gray-500 hover:bg-gray-90 hover:text-blue-600">
                <span class="material-symbols-outlined xxs:text-sm">bar_chart</span>
                <span className="xxs:text-xs ">10M</span>
              </div>

              <div className="flex gap-1 text-gray-500">
                <span class="material-symbols-outlined xxs:text-sm hover:text-purple-400">
                  bookmark
                </span>
                <span class=" material-symbols-outlined xxs:text-sm hover:text-orange-400">
                  ios_share
                </span>
              </div>
            </div>
          </div>
          

          
        </div>

        {/* ------------ section-3 ------------------------- */}

        <div className=" no-scrollbar max-h-screen overflow-scroll s:hidden md:inline-flex flex-col w-[20%] min-w-[350px] ">
          <input
            className=" pl-5 mt-3 ml-5 bg-[#202226] rounded-full h-9 w-[90%]"
            type="search"
            name="Search"
            id="searchTab"
            placeholder="Search"
          />

          <div className=" border border-gray-700  mt-5 rounded-xl px-4  pt-1 pb-2 pl-5 w-[90%]   ml-5">
            <h1 className=" font-bold">Subscribe to Premium</h1>
            <p className=" text-sm max-w-[250px] mt-[4px] text-[#a4a5a6] ">
              Subscribe to unlock new features and if eligible, recieve a share
              of ads revenue.
            </p>
            <button className="mt-[5px] bg-[#00a7ff] px-4 py-[3px]  font-semibold rounded-full hover:underline">
              Subscribe
            </button>
          </div>

          <div className="mt-5 border border-gray-700 rounded-xl pt-1 pb-2 pl-5 w-[90%] ml-5 ">
            <h1 className=" font-bold mb-5">What's happening</h1>
            <div>
              <div className=" flex flex-row justify-between pr-2 ">
                <div className=" flex flex-col items-start">
                  <h3 className="font-semibold text-sm ">
                    Menswear Fashion Weeks
                  </h3>
                  <p className=" text-[#666666] text-xs mt-1 ">
                    Fashion - LIVE
                  </p>
                </div>

                <div className="flex justify-end mb-2">
                  <img
                    className="h-[65px] rounded-lg"
                    src="./public/svg/image.png"
                    alt="img"
                  />
                </div>
              </div>

              <div className=" pr-4 mt-1 flex flex-row justify-between mb-2">
                <div>
                  <p className=" text-[#666666] text-xs">Trending on India</p>
                  <p>#ArrestAbhinavSingh</p>
                  <p className=" text-[#666666] text-xs">7812 posts</p>
                </div>
                <img
                  className="invert pl-2 cursor-pointer"
                  src="./public/svg/N-Dots.svg"
                  alt=""
                />
              </div>

              <div className=" pr-4 mt-1 flex flex-row justify-between mb-2">
                <div>
                  <p className=" text-[#666666] text-xs">Trending on India</p>
                  <p>#MissileAttack</p>
                  <p className=" text-[#666666] text-xs">41.1k posts</p>
                </div>
                <img
                  className="invert pl-2 cursor-pointer"
                  src="./public/svg/N-Dots.svg"
                  alt=""
                />
              </div>

              <div className=" pr-4 mt-1 flex flex-row justify-between mb-2">
                <div>
                  <p className=" text-[#666666] text-xs">Trending on India</p>
                  <p>इकरा हसन</p>
                  <p className=" text-[#666666] text-xs">13.9k posts</p>
                </div>
                <img
                  className="invert pl-2 cursor-pointer"
                  src="./public/svg/N-Dots.svg"
                  alt=""
                />
              </div>

              <div className="text-[#00a7ff] text-sm">
                <p className="hover:underline hover:cursor-pointer hover:text-gray-200">
                  Show more
                </p>
              </div>
            </div>
          </div>

          {/* Who to Follow Container----- */}
          <div className="my-5 border border-gray-700 rounded-xl pt-1 pb-2 pl-5 w-[90%] ml-5 ">
            <p className="font-bold">Who to follow</p>

            <div className="  flex justify-between mr-2 my-2">
              <div className="flex">
                <div className=" mr-2">
                  <img
                    className="h-[39px] rounded-full cursor-pointer"
                    src="public/svg/ADREW,s DP.jpg"
                    alt=""
                  />
                </div>

                <div className="">
                  <h2 className="cursor-pointer">Andrew Tate</h2>
                  <p className="hover:underline cursor-pointer text-[#666666] text-xs">
                    @Cobratate
                  </p>
                </div>

                <div className="pt-[7px] ">
                  <img
                    className="h-[14px] px-1"
                    src="public/svg/VerrfiedTick.png"
                    alt=""
                  />
                </div>

                <div className="pt-[7px] ">
                  <img
                    className="h-[14px] px-1 "
                    src="public/svg/Tate'sCrown.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center ">
                <button className="hover:bg-[#00a1ff] hover:text-white bg-white h-8 w-20 text-black rounded-full">
                  Follow
                </button>
              </div>
            </div>

            {/* ------------------------------ */}

            <div className="  flex justify-between mr-2 my-2">
              <div className="flex">
                <div className=" mr-2">
                  <img
                    className="h-[39px] rounded-full cursor-pointer"
                    src="public/svg/CodeWithHarryDP.png"
                    alt=""
                  />
                </div>

                <div className="">
                  <h2 className="cursor-pointer">Haris Ali Khan</h2>
                  <p className="over:underline cursor-pointer hover:underline text-[#666666] text-xs">
                    @codewithharry
                  </p>
                </div>

                <div className="pt-[7px] ">
                  <img
                    className="h-[14px] px-1"
                    src="public/svg/VerrfiedTick.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center ">
                <button className=" hover:bg-[#00a1ff] hover:text-white  bg-white h-8 w-20 text-black rounded-full">
                  Follow
                </button>
              </div>
            </div>

            {/* ------------------------------ */}

            <div className="  flex justify-between mr-2 my-2">
              <div className="flex">
                <div className=" mr-2">
                  <img
                    className="cursor-pointer h-[39px] rounded-full"
                    src="public/svg/ChaiOrCodeDP.jpg"
                    alt=""
                  />
                </div>

                <div>
                  <h2 className="cursor-pointer">Hitesh Choudhary</h2>
                  <p className="over:underline cursor-pointer hover:underline text-[#666666] text-xs">
                    @Hiteshdotcom
                  </p>
                </div>

                <div className="pt-[7px] ">
                  <img
                    className="h-[14px] px-1"
                    src="public/svg/VerrfiedTick.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center ">
                <button
                  className="bg-white h-8 w-20 cursor-pointer text-black rounded-full
                
                hover:bg-[#00a1ff] hover:text-white 
                "
                >
                  Follow
                </button>
              </div>
            </div>
            {/* ---------------nav bar---------------------- */}
          </div>

          {/* Who to Follow Container----- */}
          <div className="my-5  rounded-xl pb-2 pl-5 w-[90%] ml-5 ">
            <a
              href="#"
              class="text-gray-500 hover:underline text-sm visited:text-purple-600 mr-2 ..."
            >
              Terms of Services
            </a>

            <a
              href="#"
              class="text-gray-500 hover:underline text-sm visited:text-purple-600 mr-2 ..."
            >
              Privacy Policy
            </a>

            <a
              href="#"
              class="text-gray-500 hover:underline text-sm visited:text-purple-600 mr-2 ..."
            >
              Coockie Policy
            </a>

            <a
              href="#"
              class="text-gray-500 hover:underline text-sm visited:text-purple-600 mr-2 ..."
            >
              Accesibility
            </a>

            <a
              href="#"
              class="text-gray-500 hover:underline text-sm visited:text-purple-600 mr-2 ..."
            >
              More ...
            </a>

            <a
              href="#"
              class="text-gray-500 hover:underline text-sm visited:text-purple-600 mr-2 ..."
            >
              &#169; 2024 X Corp.
            </a>
          </div>
          {/* ends here-- */}
        </div>
      </div>
    </>
  );
}

export default App;

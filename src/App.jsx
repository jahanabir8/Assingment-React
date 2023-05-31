import admin from "./assets/icon/admin.svg";
import mikeactive from "./assets/icon/mikeActive.svg";
import mikedeactive from "./assets/icon/mikeDeact.svg";
import Call from "./assets/icon/call.png";
import callLeave from "./assets/icon/callLeave.png";
import soundOn from "./assets/icon/soundOn.png";
import soundOff from "./assets/icon/soundOff.png";
import camera from "./assets/icon/camera.svg";
import fullscreen from "./assets/icon/fullscreen.svg";
import audio from "./assets/icon/audio.png";
import settings from "./assets/icon/settings.svg";
import logo from "./assets/Logo/logo.svg";
import menu from "./assets/Logo/menu.png";
import cross from "./assets/icon/cross.svg";
import { useEffect, useRef, useState } from "react";

function App() {

  const [clicked, setClicked] = useState(false);
  const [mike, setMike] = useState(true)
  const [call, setCall] = useState(true)
  const [sound, setSound] = useState(true)
  const [show, setShow] = useState(false)
  const [close, setClose] = useState(false)

  const floatRef = useRef(null)

 

  const [Range, setRange] = useState(false)
  const [soundInc, setSoundInc] = useState(true)

  const [SideBar, setSideBar] = useState(false)


  useEffect(()=>{
 document.addEventListener("click",handleClickOutside)
return()=>{
  document.removeEventListener("click", handleClickOutside)
}
  },[])
  const handleClickOutside=(event)=>{
if(floatRef.current && !floatRef.current.contains(event.target)){
setClose(true)
}
 }


  return (
    <div >
      <main className="main__body" >
        <div className="admine  absolute top-[257px] flex">
          <div className="adminImg w-[49px] h-[57px] flex justify-center items-center bg-[#000c] cursor-pointer" onClick={()=>setClicked(!clicked)}>
            <img className="" src={admin} alt="icon" />
          </div>

          <div  className={`admin__logs bg-[#000c] w-[330px] ${clicked &&"transform" }`} >
            <ul className="ps-[24px] pb-[24px] pt-[10px] pe-[10px]">
              <li className="flex items-center justify-between h-[60px] border-b-[1px] border-[#ccc]">
                <div className="text-[#fff]">
                  <span className="text-[16px] leading-[20px]">USERNAME1</span>{" "}
                  <br />
                  <span>(Host)</span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <div>
                    <span className="mike mikeAct" onClick={()=>setMike(false)}>
                      {mike===true&&<img src={mikeactive} alt="icon" />}
                    </span>
                    <span className="mike mikeDeact" onClick={()=>setMike(true)}>
                      {mike===false&& <img src={mikedeactive} alt="icon" />}
                    </span>
                  </div>
                  <div>
                    <span className="call callOn" onClick={()=>setCall(false)}>
                      {call===true&& <img src={Call} alt="icon" />}
                    </span>
                    <span className="call callOf" onClick={()=>setCall(true)}>
                      {call===false&& <img src={callLeave} alt="icon" />}
                    </span>
                  </div>
                  <div>
                    <span className="sound soundOn" onClick={()=>setSound(false)}>
                      {sound===true&& <img src={soundOn} alt="icon" />}
                    </span>
                    <span className="sound soundOff" onClick={()=>setSound(true)}>
                      {sound===false&&<img src={soundOff} alt="icon" />}
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between h-[60px] border-b-[1px] border-[#ccc]">
                <div className="text-[#fff]">
                  <span className="text-[16px] leading-[20px]">USERNAME1</span>{" "}
                  <br />
                  <span>(You)</span>
                </div>
                <div className="flex items-center gap-[20px] hidden">
                  <div>
                    <span className="mike mikeAct">
                      <img src={mikeactive} alt="icon" />
                    </span>
                    <span className="mike mikeDeact hidden">
                      <img src={mikedeactive} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="call callOn">
                      <img src={call} alt="icon" />
                    </span>
                    <span className="call callOf hidden">
                      <img src={callLeave} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="sound soundOn">
                      <img src={soundOn} alt="icon" />
                    </span>
                    <span className="sound soundOff hidden">
                      <img src={soundOff} alt="icon" />
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between h-[60px] border-b-[1px] border-[#ccc]">
                <div className="text-[#fff]">
                  <span className="text-[16px] leading-[20px]">USERNAME1</span>{" "}
                  <br />
                  {/* <!-- <span>(Host)</span> --> */}
                </div>
                <div className="flex items-center gap-[20px] hidden">
                  <div>
                    <span className="mike mikeAct">
                      <img src={mikeactive} alt="icon" />
                    </span>
                    <span className="mike mikeDeact hidden">
                      <img src={mikedeactive} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="call callOn">
                      <img src={call} alt="icon" />
                    </span>
                    <span className="call callOf hidden">
                      <img src={callLeave} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="sound soundOn">
                      <img src={soundOn} alt="icon" />
                    </span>
                    <span className="sound soundOff hidden">
                      <img src={soundOff} alt="icon" />
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between h-[60px] border-b-[1px] border-[#ccc]">
                <div className="text-[#fff]">
                  <span className="text-[16px] leading-[20px]">USERNAME1</span>{" "}
                  <br />
                  {/* <!-- <span>(Host)</span> --> */}
                </div>
                <div className="flex items-center gap-[20px] hidden">
                  <div>
                    <span className="mike mikeAct">
                      <img src={mikeactive} alt="icon" />
                    </span>
                    <span className="mike mikeDeact hidden">
                      <img src={mikedeactive} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="call callOn">
                      <img src={call} alt="icon" />
                    </span>
                    <span className="call callOf hidden">
                      <img src={callLeave} alt="icon" />
                    </span>
                  </div>
                  <div>
                    <span className="sound soundOn">
                      <img src={soundOn} alt="icon" />
                    </span>
                    <span className="sound soundOff hidden">
                      <img src={soundOff} alt="icon" />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="float__set flex flex-row items-center md:flex-col absolute right-[0px] bottom-[30px]">
          <div className={ Range?  "sound_range h-[48px] md:w-[100%] bg-[#000c] rounded-[5px] flex justify-center" : "hidden sound_range h-[48px] bg-[#000c] rounded-[5px] flex justify-center"}>
            <input type="range" min="1" max="100" value="50" />
          </div>
          <div className="float flex flex-col md:flex-row gap-[26px] p-[14px] bg-[#000c] w-[50px] md:w-[192px] ">
            <img className="capture" src={camera} alt="icon" />
            <img className="square" src={fullscreen} alt="icon" />
            <span>
              <span onClick={()=>setSoundInc(false)}>
                {soundInc===true&&<img onClick={()=>setRange(true)} className="setSound" src={soundOn} alt="icon" />}
              </span>
              <span onClick={()=>setSoundInc(true)}>
                {soundInc===false&&<img onClick={()=>setRange(false)} className="setSound" src={audio} alt="icon" />}
              </span>
            </span>
            <img onClick={()=>setSideBar(!SideBar)} className="sidebarBtn" src={settings} alt="icon" />
          </div>
        </div>
        <div ref={floatRef} className={close&&"hidden"}>
          <div onClick={()=>setShow(true)}
        
          
          className={show ? 'float__com bg-[#000c] max-w-[300px] sm:w-[423px] h-[76px] overflow-hidden absolute right-[16px] top-[20px] p-[12px] text-[#ccc] leading-[28px] grid gap-[] justify-between cmtHeight' : 'float__com bg-[#000c] max-w-[300px] sm:w-[423px] h-[76px] overflow-hidden absolute right-[16px] top-[20px] p-[12px] text-[#ccc] leading-[28px] grid gap-[] justify-between' }

          >
            <span>
              Lorem ipsum dolor sit amet. Et recusandae neque eum voluptate
              delectus qui reiciendis molestiae! Sit aliquam quisquam sit libero
              commodi 33 distinctio illo eum ipsa laudantium. Id placeat
              necessitatibus sed tenetur iste aut optio culpa.
            </span>
            <span onClick={()=>setClose(true)}>
              <img
                id="cross"
                className="ms-auto cursor-pointer"
                src={cross}
                alt="icon"
              />
            </span>
          </div>
        </div>

        <div className ={SideBar?  "sideOff xOn sidebar xOff py-[17px] px-[15px] w-[300px] bg-[#000c] text-[#fff] text-[18px]" : "sidebar xOff py-[17px] px-[15px] w-[300px] bg-[#000c] text-[#fff] text-[18px]"}>
          <div className="flex gap-[20px] justify-between items-center mb-[45px]">
            <a href="#!">
              <img src={logo} alt="logo" />
            </a>
            <img onClick={()=>setSideBar(!SideBar)}
              className="h-[18px] w-[18px] cursor-pointer"
              src={menu}
              alt="icon"
            />
          </div>
          <ul>
            <li>
              <button>Open URL</button>
            </li>
            <li>
              <button>Open Mail App</button>
            </li>
            <li>
              <button>Open Call</button>
            </li>
            <li>
              <button>Open Keyboard</button>
            </li>
            <li>
              <button>Toggle Browser Mouse</button>
            </li>
            <li>
              <button>Increase Session Timer</button>
            </li>
            <li>
              <button>Get User Info</button>
            </li>
            <li>
              <button>Get User Device Info</button>
            </li>
            <li>
              <button>Video Player</button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const [isclick, setisclick] = useState(false)
    const togglebtn = () => {
        if (isclick === false) {
            setisclick(true)

        }
        else {
            setisclick(false)
        }
    }
    return (
        <div className={`flex bg-${props.bgcolor} flex-row p-2 justify-around md:justify-between w-fill h-16`}>
            <div className={`justify-evenly flex gap-5 ms-5 mr-14 p-3 border-2 border-${props.color} text-${props.color} h-fit`}>
                <Link to="/">Logo</Link>
            </div>
            <div>
                <ul className=' flex gap-5 p-3  flex-row hidden md:inline-flex  w-64' >
                    <li><Link to="/" className={`hover:underline underline-offset-8 decoration-2 text-${props.color} flex`}>Link 1</Link></li>
                    <li><Link to="/about" className={`hover:underline underline-offset-8 decoration-2 text-${props.color} flex`}>Link 2</Link></li>
                    <li><Link to="/contact" className={`hover:underline underline-offset-8 decoration-2 text-${props.color} flex`}>Link 3</Link></li>
                    <li><svg width="30px" height="30px" viewBox="0 0 48 55" xmlns="http://www.w3.org/2000/svg" onClick={props.togglebtn} fill={props.color}>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Icons">
                                <g>
                                    <rect width="48" height="48" fill="none" />
                                    <g>
                                        <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z" />
                                        <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg></li>
                </ul>
            </div>
            <div>
                <ul className='justify-center flex  gap-5 ms-5 mr-8 p-3 align-right items-end hidden md:inline-flex'>
                    <li><Link to="/" className={`hover:bg-blue-400 hover:rounded-lg hover:text-black p-3 text-${props.color}`} >Login</Link></li>
                    <li><Link to="/" className={`hover:bg-blue-400 hover:rounded-lg hover:text-black p-3 text-${props.color}`} >Sign up</Link></li>
                </ul>
            </div>
            <div className='block md:hidden p-3 h-fit text-white'>
                {/* {isclick && <img src={dropdown} alt="icon" className={`block md:hidden  w-[20px] fill-current text-white`} onClick={togglebtn} />} */}
                {isclick && <svg width="30px" height="30px" viewBox="0 0" xmlns="http://www.w3.org/2000/svg" onClick={togglebtn}>
                    <path d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z" fill={props.color} />
                    <path d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z" fill={props.color} />
                    <path d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z" fill={props.color} />
                </svg>}
                {/* {!isclick && <img src={dropdown1} alt="icon" className='block md:hidden  w-[20px]' onClick={togglebtn} />} */}
                {!isclick && <svg fill="white" width="30px" height="30px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" onClick={togglebtn}>
                    <path fill={props.color} d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />
                </svg>}
            </div>
            {

                !isclick && <div className={`flex  block md:hidden absolute mt-14 left-0 bg-${props.bgcolor1}  w-[100%] justify-center items-center top-40% items-center whitespace-nowrap `}>
                    <div className='flex  flex-col items-center pb-3'>
                        <Link to="/" className={`text-${props.color} p-2 `}>Link 1</Link>
                        <Link to="/" className={`text-${props.color} p-2 `}>Link 2</Link>
                        <Link to="/" className={`text-${props.color} p-2 `}>Link 3</Link>
                        <span className={`text-${props.color} p-2 `} onClick={props.togglebtn}>{props.text}</span>
                        <Link to="/" className={`bg-blue-500 rounded-xl mt-1  text-${props.color} p-2 w-fit`} >Login</Link>
                        <Link to="/" className={`bg-blue-500 rounded-xl mt-1  text-${props.color} p-2 w-fit`}>Sign up</Link>

                    </div>
                </div>
            }

        </div>
    )
}
// document.getElementsByClassName('lines').style.fill = 'green'

export default Navbar
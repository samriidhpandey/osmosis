import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, Form, Meta } from "react-router-dom"
import Courses from './Component2/Courses'
import Tutorial from './component3/Tutorial'
import Contact from './component4/Contactt'
import Login from './component4/Login'
import Signup from './component4/Signup'
import Homehtml from './Tutorial-html/Homehtml'
import Part1 from './Component2/Part1'
import Part2 from './Component2/Part2'
import Blog from './Component5/Blog'
import Notes from './Component6/Notes'
import Mongodbblog from "./Component5/Mongodbblog"
import Deploying from "./Component5/Deploying"
import Email from "./Component5/Email"
import Genrate from "./Component5/Genrate"
import Keyinjs from "./Component5/Keyinjs"
import Noargumentpyton from "./Component5/Noargumentpyton"
import PytonInstall from "./Component5/PytonInstall"
import Solvepyton from "./Component5/Solvepyton";
import Stackry from "./Component5/Stackry";
import Zerodivi from "./Component5/Zerodivi"
import Openterminal from "./Component5/Openterminal"
import Algorithem from "./Component5/Algorithem"
import logo from './image/logo.png'
import { Helmet } from 'react-helmet-async';
// import UnderWorking from './UnderWorking'


import './App.css'
import HTMLIntroduction from './Tutorial-html/Introduction/HTMLIntroduction';
import Intro from './Tutorial-html/Introduction/Intro';
import Working from './Tutorial-html/Introduction/Working';
import Install from './Tutorial-html/Introduction/Install';
import Execution from './Tutorial-html/Introduction/Execution';
import Structure from './Tutorial-html/Introduction/Structure';
import Elements from './Tutorial-html/Introduction/Elements';
import Tags from './Tutorial-html/Introduction/Tags';
import Attributes from './Tutorial-html/Introduction/Attributes';
import Comment from './Tutorial-html/Introduction/Comment';
import Idandclasses from './Tutorial-html/Introduction/Idandclasses';
import Homejava from './Tutorial-java/Homejava';
import Inline from './Tutorial-html/Introduction/Inline';
import Block from './Tutorial-html/Introduction/Block';
import List from './Tutorial-html/Introduction/List';
import Unorder from './Tutorial-html/Introduction/Unorder';
import Order from './Tutorial-html/Introduction/Order';
import Definition from './Tutorial-html/Introduction/Definition';
import Tables from './Tutorial-html/Introduction/Tables';
import Mtables from './Tutorial-html/Introduction/Mtables';
import Infoform from './Tutorial-html/Introduction/Infoform';
import Input from './Tutorial-html/Introduction/Input';
import Textarea from './Tutorial-html/Introduction/Textarea';
import Form1 from './Tutorial-html/Introduction/Form1';
import Meta1 from './Tutorial-html/Introduction/Meta1';
import Script from './Tutorial-html/Introduction/Script';
import Video from './Tutorial-html/Introduction/Video';
import Svgs from './Tutorial-html/Introduction/Svgs';
import Iframes from './Tutorial-html/Introduction/Iframes';
import Codetag from './Tutorial-html/Introduction/Codetag';
import Sematic from './Tutorial-html/Introduction/Sematic';




import Homecss from './Tutorial-CSS/Homecss';
import Pagecss from './Tutorial-CSS/Introduction/Pagecss';
import Introandhis from './Tutorial-CSS/Introduction/Introandhis';
import Cssweb from './Tutorial-CSS/Introduction/Cssweb';
import Csswork from './Tutorial-CSS/Introduction/Csswork';
import Syntax from './Tutorial-CSS/Introduction/Csssyntax';
import Csssyntax from './Tutorial-CSS/Introduction/Csssyntax';
import Whystoaddcss from './Tutorial-CSS/Introduction/Whystoaddcss';
import Csscelector from './Tutorial-CSS/Introduction/Csscelector';
import Csscoments from './Tutorial-CSS/Introduction/Csscoments';
import Specificity from './Tutorial-CSS/Introduction/Specificity';
import Boxmodel from './Tutorial-CSS/Introduction/Boxmodel';
import Liststyle from './Tutorial-CSS/Introduction/Liststyle';
import Csscolor from './Tutorial-CSS/Introduction/Csscolor';
import Background from './Tutorial-CSS/Introduction/Cssbackground';
import Cssbackground from './Tutorial-CSS/Introduction/Cssbackground';
import Cssborder from './Tutorial-CSS/Introduction/Cssborder';
import Cssimg from './Tutorial-CSS/Introduction/Cssimg';
import Videoemb from './Tutorial-CSS/Introduction/Videoemb';
import Cssfonts from './Tutorial-CSS/Introduction/Cssfonts';
import Csstext from './Tutorial-CSS/Introduction/Csstext';
import Csspadding from './Tutorial-CSS/Introduction/Csspadding';
import Cssmargin from './Tutorial-CSS/Introduction/Cssmargin';
import Csshover from './Tutorial-CSS/Introduction/Csshover';
import Csscursor from './Tutorial-CSS/Introduction/Csscursor';
import Csslink from './Tutorial-CSS/Introduction/Csslink';
import Comdinators from './Tutorial-CSS/Introduction/Comdinators';
import Pseudo from './Tutorial-CSS/Introduction/Pseudo';
import Cssbutton from './Tutorial-CSS/Introduction/Cssbutton';
import Cssoverflow from './Tutorial-CSS/Introduction/Cssoverflow';
import Cssfloat from './Tutorial-CSS/Introduction/Cssfloat';
import Cssimpo from './Tutorial-CSS/Introduction/Cssimpo';
import Cssmaths from './Tutorial-CSS/Introduction/Cssmaths';
import Csssize from './Tutorial-CSS/Introduction/Csssize';
import Cssposition from './Tutorial-CSS/Introduction/Cssposition';
import Csszindex from './Tutorial-CSS/Introduction/Csszindex';
import Cssforms from './Tutorial-CSS/Introduction/Cssforms';
import Cssnav from './Tutorial-CSS/Introduction/Cssnav';
import Cssdisplay from './Tutorial-CSS/Introduction/Cssdisplay';
import Homejs from './Tutorial-js/Homejs';
import Jswell from './Tutorial-js/Introduction/Jswell';
import JsIntroduction from './Tutorial-js/Introduction/JsIntroduction';
import JsExecution from './Tutorial-js/Introduction/JsExecution';
import RSCITRoadmap from './Component2/RSCITRoadmap';
import MernRoadmap from './Component2/MernRoadmap';
import DigitalMarketingRoadmap from './Component2/DigitalMarketingRoadmap';
import TallyPrimeRoadmap from './Component2/TallyPrimeRoadmap';
import GraphicsDesigningRoadmap from './Component2/GraphicsDesigningRoadmap';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import UnderWorking from './UnderWorking';





function App({ title, description }) {

  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  const nav = {
    backgroundColor: isDark ? "black" : "darkred",
    color: isDark ? "white" : "#ffffff",
  }


  return (
    <>
    <Helmet>
      <title>{title || 'Default Title'}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
      <BrowserRouter>

        <div className="container-fluid">
          <div className="row" style={nav}>
            <div className="col-8 col-sm-7 col-md-5 col-lg-7 col-xl-7 col-xxl-7">
              <div className="row">
                <div className="col-6 col-sm-5 col-md-6 col-lg-3 col-xl-3 col-xxl-3  logo">
                  <h3 className=''>
                    <Link to='/'><img src={logo} className=' ms-1' style={{ width: "140px", }} alt="" /></Link>
                  </h3>
                </div>
                <div className="col-6 col-sm-8 col-md-8 col-lg-9 col-xl-9 col-xxl-9 mt-4 menus mt-1">
                  <Link to='/' className='menu'>Home</Link>
                  <Link to='/Courses' className='menu'>Courses</Link>{""}
                  <Link to='/Tutorial' className='menu'>Tutorials</Link>{""}
                  <Link to='/Blog' className='menu'>Blog</Link>{""}
                  <Link to='/Notes' className='menu'>Notes</Link>{""}
                  <Link to='/Contact' className='menu'>Contact</Link>{""}
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-5 col-md-7 col-lg-5 col-xl-5 col-xxl-5">
              <div className="row mt-4 mb-3">
                <div className="col-12 d-flex justify-content-end">
                  <div className="input-group bg-light rounded serch" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ maxWidth: "250px" }}>
                    <input
                      type="text"
                      className="form-control border-0 bg-light"
                      placeholder="Search..."
                      style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", paddingLeft: '8px', paddingTop: '0px', paddingBottom: '0px' }}
                    />
                    <span className="input-group-text border-0 m-auto pt-1 pb-1 h-75">
                      ⌘ K
                    </span>
                  </div>


                  <i className="fa-solid fa-magnifying-glass fs-4 mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>



                  <div className="modal fade mt-5" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header border-0">
                          <p className="modal-title text-dark" id="exampleModalLabel">Search</p>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="row mt-0 ps-3 pe-3 pb-4">
                          <div className="col-12 text-dark">
                            <input type="text" className='border bg-light ps-2 pt-1 pb-1 w-100 rounded shadow-lg' placeholder='Type to search...' />
                            <button className='border-0 mt-4 ms-2 click-t0-butns'>ALL</button>
                            <button className='border-0 mt-4 ms-2 click-t0-butns'>Courses</button>
                            <button className='border-0 mt-4 ms-2 click-t0-butns'>Tutorials</button>
                            <button className='border-0 mt-4 ms-2 click-t0-butns'>Blog post</button>
                            <p className='text-center mt-5'>Type at least 2 characters to search</p>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>

                  <Link to="/Login" className=' ms-2 res'><button className="border-0 ps-3 pe-3 rounded bg-white p-1 res">Login</button></Link>{""}
                  <Link to="/Signup" className=' ms-2 res'><button className="border-0 ps-3 pe-3 rounded bg-white p-1 res">Signup</button></Link>{""}
                  {/* <button className=" border-0 ps-3 pe-3 rounded bg-white ms-2 res">Signup</button> */}
                  <div className=" border-0 rounded ms-2 me-4 res" >
                    <label className="switch" >
                      <input type="checkbox" id="toggleSwitch" onClick={toggleDark} />
                      <span className="slider"></span>
                    </label>
                  </div>



                  <div className="bars ms-3 mt-1"><i className="fa-solid fa-bars fs-3 me-4 p-0 m-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i></div>


                  <div className="offcanvas offcanvas-end w-75"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                      <h5 id="offcanvasRightLabel" className='text-center w-100 mt-1'>Osmosis</h5>
                      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      <p className='mt-4'><Link to='/' className='menu1'>Home</Link></p>
                      <p className='mt-4'><Link to='/Courses' className='menu1'>Courses</Link>{""}</p>
                      <p className='mt-4'><Link to='/Tutorial' className='menu1'>Tutorials</Link>{""}</p>
                      <p className='mt-4'><Link to='/Blog' className='menu1'>Blog</Link></p>
                      <p className='mt-4'><Link to='/Notes' className='menu1'>Notes</Link></p>
                      <p className='mt-4'><Link to='/Contact' className='menu1'>Contact</Link>{""}</p>
                      <Link to="/Login" className=' ms-1 '><button className="border-0 pe-2 ps-2 rounded bg-light shadow-sm p-1">Login</button></Link>{""}
                      <Link to="/Signup" className=' ms-1'><button className="border-0 ps-2 pe-2  rounded bg-light shadow-sm p-1">Signup</button></Link>{""}
                      {/* <button className=" border-0 ps-3 pe-3 rounded bg-white ms-2 res">Signup</button> */}
                      <span className=" border-0 rounded ms-2  shadow-sm border" >
                        <label className="switch" >
                          <input type="checkbox" id="toggleSwitch" onClick={toggleDark} />
                          <span className="slider"></span>
                        </label>
                      </span>

                    </div>
                  </div>




                </div>

              </div>
            </div>
          </div>
        </div>
        


        <Routes>
          <Route path='/' element={<Hero isDark={isDark} />} />
          <Route path='/Courses' element={<Courses isDark={isDark} />} />
          <Route path='/Tutorial' element={<Tutorial isDark={isDark} />} />
          <Route path='/Contact' element={<Contact isDark={isDark} />} />
          <Route path='/Login' element={<Login isDark={isDark} />} />
          <Route path='/Signup' element={<Signup isDark={isDark} />} />
          {/* <Route path='/Html' element={<Homehtml isDark={isDark} />} /> */}
          <Route path='/part1' element={<RSCITRoadmap isDark={isDark} />} />
          <Route path='/part2' element={<MernRoadmap isDark={isDark} />} />
          <Route path='/part3' element={<DigitalMarketingRoadmap isDark={isDark} />} />
          <Route path='/part4' element={<TallyPrimeRoadmap isDark={isDark} />} />
          <Route path='/part5' element={<GraphicsDesigningRoadmap isDark={isDark} />} />
          <Route path='/Blog' element={<Blog isDark={isDark} />} />
          <Route path="/Blog/Mongodb" element={<Mongodbblog />} />
          <Route path="/Blog/Deploying" element={<Deploying />} />
          <Route path="/Blog/Stackry" element={<Stackry />} />
          <Route path="/Blog/Algorithem" element={<Algorithem />} />
          <Route path="/Blog/Email" element={<Email />} />
          <Route path="/Blog/Solvepyton" element={<Solvepyton />} />
          <Route path="/Blog/Noargumentpyton" element={<Noargumentpyton />} />
          <Route path="/Blog/PytonInstall" element={<PytonInstall />} />
          <Route path="/Blog/Genrate" element={<Genrate />} />
          <Route path="/Blog/Keyinjs" element={<Keyinjs />} />
          <Route path="/Blog/Zerodivi" element={<Zerodivi />} />
          <Route path="/Blog/Openterminal" element={<Openterminal />} />
          <Route path='/Notes' element={<Notes isDark={isDark} />} />
          <Route path='/Terms' element={<TermsOfService isDark={isDark} />} />
          <Route path='/Privacy' element={<PrivacyPolicy isDark={isDark} />} />



          <Route path='/Htmll' element={<UnderWorking isDark={isDark} />} />
          <Route path='/Notescss' element={<UnderWorking isDark={isDark} />} />
          <Route path='/js' element={<UnderWorking isDark={isDark} />} />

          

          {/* <Route path="Html" element={<Homehtml />} >
            <Route index element={<Navigate to="intro" replace />} />
            <Route path="intro" element={<HTMLIntroduction />} />
            <Route path="intro1" element={<Intro />} />
            <Route path="Working" element={<Working />} />
            <Route path="Install" element={<Install />} />
            <Route path="Execution" element={<Execution />} />
            <Route path="Structure" element={<Structure />} />
            <Route path="Tags" element={<Tags />} />
            <Route path="Elements" element={<Elements />} />
            <Route path="Attri" element={<Attributes />} />
            <Route path="Comment" element={<Comment />} />
            <Route path="id" element={<Idandclasses />} />
            <Route path="Inline" element={<Inline />} />
            <Route path="Block" element={<Block />} />
            <Route path="List" element={<List />} />
            <Route path="Unorder" element={<Unorder />} />
            <Route path="Order" element={<Order />} />
            <Route path="Defin" element={<Definition />} />
            <Route path="Tables" element={<Tables />} />
            <Route path="Moretables" element={<Mtables />} />
            <Route path="Infoform" element={<Infoform />} />
            <Route path="Input" element={<Input />} />
            <Route path="Textarea" element={<Textarea />} />
            <Route path="Form1" element={<Form1 />} />
            <Route path="Meta1" element={<Meta1 />} />
            <Route path="Script" element={<Script />} />
            <Route path="Video" element={<Video />} />
            <Route path="Svgs" element={<Svgs />} />
            <Route path="Ifram" element={<Iframes />} />
            <Route path="Codetag" element={<Codetag />} />
            <Route path="Sematic" element={<Sematic />} />

          </Route> */}









          {/* <Route path='notescss' element={<Homecss />}>
            <Route index element={<Pagecss to="intro" replace />} />
            <Route path="Introandhis" element={<Introandhis />} />
            <Route path="Cssweb" element={<Cssweb />} />
            <Route path="Csswork" element={<Csswork />} />
            <Route path="Syntax" element={<Csssyntax />} />
            <Route path="Whystoaddcss" element={<Whystoaddcss />} />
            <Route path="CSSselector" element={<Csscelector />} />
            <Route path="Csscoments" element={<Csscoments />} />
            <Route path="Speci" element={<Specificity />} />
            <Route path="Boxmodel" element={<Boxmodel />} />
            <Route path="Liststyle" element={<Liststyle />} />
            <Route path="Csscolor" element={<Csscolor />} />
            <Route path="Cssbackground" element={<Cssbackground />} />
            <Route path="Cssborder" element={<Cssborder />} />
            <Route path="Cssimg" element={<Cssimg />} />
            <Route path="Videoemb" element={<Videoemb />} />
            <Route path="Cssfonts" element={<Cssfonts />} />
            <Route path="Csstext" element={<Csstext />} />
            <Route path="Csspadding" element={<Csspadding />} />
            <Route path="Cssmargin" element={<Cssmargin />} />
            <Route path="Csshover" element={<Csshover />} />
            <Route path="Csscursor" element={<Csscursor />} />
            <Route path="Csslink" element={<Csslink />} />
            <Route path="Comdinators" element={<Comdinators />} />
            <Route path="Pseudo" element={<Pseudo />} />
            <Route path="Cssbutton" element={<Cssbutton />} />
            <Route path="Cssoverflow" element={<Cssoverflow />} />
            <Route path="Cssfloat" element={<Cssfloat />} />
            <Route path="Cssimpo" element={<Cssimpo />} />
            <Route path="Cssmaths" element={<Cssmaths />} />
            <Route path="Csssize" element={<Csssize />} />
            <Route path="Cssposition" element={<Cssposition />} />
            <Route path="Csszindex" element={<Csszindex />} />
            <Route path="Cssforms" element={<Cssforms />} />
            <Route path="Cssnav" element={<Cssnav />} />
            <Route path="Cssdisplay" element={<Cssdisplay />} />
          </Route> */}













          {/* <Route path='js' element={<Homejs />}>
            <Route index element={<Jswell to="intro" replace />} />
            <Route path="JsIntroduction" element={<JsIntroduction />} />
            <Route path="Jsexc" element={<JsExecution />} />
          </Route> */}












          {/* <Route path="java" element={<Homejava />} >
            <Route index element={<Navigate to="intro" replace />} />
            <Route path="intro" element={<HTMLIntroduction />} />
            <Route path="intro1" element={<Intro />} />
            <Route path="Working" element={<Working />} />
            <Route path="Install" element={<Install />} />
            <Route path="Execution" element={<Execution />} />
            <Route path="Structure" element={<Structure />} />
            <Route path="Tags" element={<Tags />} />
            <Route path="Elements" element={<Elements />} />
            <Route path="Attri" element={<Attributes />} />
            <Route path="Comment" element={<Comment />} />
            <Route path="id" element={<Idandclasses />} />

          </Route> */}

          
        </Routes>
        <Footer isDark={isDark} />
      </BrowserRouter>
      

    </>
  )
}

export default App
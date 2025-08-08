import React from 'react'
import html from '../image/html.webp'
import css from '../image/css.webp'
import js from '../image/js.webp'
import paython from '../image/python.webp'
import c from '../image/c.webp'
import reactjs from '../image/reactjs.webp'
import java from '../image/java.webp'
import cpp from '../image/cpp.webp'
import php from '../image/php.webp'
import { Link } from 'react-router-dom'

function Tutorial({ isDark }) {
  const tutorial = {
    backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? 'white' : 'black',
  };
  const tutorials = {
    backgroundColor: isDark ? '#0E121B' : 'darkred',
    color: isDark ? 'white' : 'white',
    borderRadius: '13px',
    border: '1px solid #202736'
  };
  return (
    <>
    <div className="container-fluid">
      <div className="row pt-5 pb-5 border-top" style={tutorial}>

        <h2 className='text-center fw-bolder mb-3'>Tutorials</h2>
        <div className="col-11 col-sm-10 col-md-10 col-lg-10 col-xl-9 col-xxl-9 m-auto">
          <div className="row">


            <div className="col-12 col-ms-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 m-auto mt-3">
              <div className="row">
                <div className="col-11 m-auto tutorial pt-3 pb-3"style={tutorials} >
                    <div className="row">
                      <div className="col-6 m-auto">
                        <img src={html} className='img-fluid' alt="" />
                      </div>
                      <div className="col-12 text-center">
                        <h5 className='fw-bolder mt-2'>HTML Tutorial</h5>
                        <p className='mt-4'>The word hypertext markup language is composed of the words “hypertext” and “mar...</p>

                        <Link to='/Html'> <button className='w-75 pt-2 pb-2 btn-light border-0 rounded mt-4'>Start Learning!</button></Link>{""}
                      </div>
                    </div>
                </div>
              </div>
            </div>


             <div className="col-12 col-ms-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 m-auto mt-3">
              <div className="row">
                <div className="col-11 m-auto tutorial pt-3 pb-3"style={tutorials} >
                    <div className="row">
                      <div className="col-6 m-auto">
                        <img src={css} className='img-fluid' alt="" />
                      </div>
                      <div className="col-12 text-center">
                        <h5 className='fw-bolder mt-2'>CSS Tutorial</h5>
                        <p className='mt-4'>CSS stands for Cascading Style Sheets. It describes how HTML elements are to be ...</p>

                        <Link to='/notescss'><button className='w-75 pt-2 pb-2 btn-light border-0 rounded mt-4'>Start Learning!</button></Link>{""}
                      </div>
                    </div>
                </div>
              </div>
            </div>



             <div className="col-12 col-ms-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 m-auto mt-3">
              <div className="row">
                <div className="col-11 m-auto tutorial pt-3 pb-3"style={tutorials} >
                    <div className="row">
                      <div className="col-6 m-auto">
                        <img src={js} className='img-fluid' alt="" />
                      </div>
                      <div className="col-12 text-center">
                        <h5 className='fw-bolder mt-2'>JavaScript Tutorial</h5>
                        <p className='mt-4'>JavaScript is a lightweight, cross-platform, OOP language.</p>

                        <Link to='/js'><button className='w-75 pt-2 pb-2 btn-light border-0 rounded mt-4'>Start Learning!</button></Link>{""}
                      </div>
                    </div>
                </div>
              </div>
            </div>



             <div className="col-12 col-ms-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 m-auto mt-3">
              <div className="row">
                <div className="col-11 m-auto tutorial pt-3 pb-3"style={tutorials} >
                    <div className="row">
                      <div className="col-6 m-auto">
                        <img src={paython} className='img-fluid' alt="" />
                      </div>
                      <div className="col-12 text-center">
                        <h5 className='fw-bolder mt-2'>Python Tutorial</h5>
                        <p className='mt-4'>Python is a high-level, interpreted, general-purpose programming language.</p>

                        <button className='w-75 pt-2 pb-2 btn-light border-0 rounded mt-4'>Start Learning!</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>


             <div className="col-12 col-ms-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 m-auto mt-3">
              <div className="row">
                <div className="col-11 m-auto tutorial pt-3 pb-3"style={tutorials} >
                    <div className="row">
                      <div className="col-6 m-auto">
                        <img src={c} className='img-fluid' alt="" />
                      </div>
                      <div className="col-12 text-center">
                        <h5 className='fw-bolder mt-2'>C Tutorial</h5>
                        <p className='mt-4'>C language is considered as the mother language of all programming languages. It...</p>

                        <button className='w-75 pt-2 pb-2 btn-light border-0 rounded mt-4'>Start Learning!</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>


             <div className="col-12 col-ms-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 m-auto mt-3">
              <div className="row">
                <div className="col-11 m-auto tutorial pt-3 pb-3"style={tutorials} >
                    <div className="row">
                      <div className="col-6 m-auto">
                        <img src={reactjs} className='img-fluid' alt="" />
                      </div>
                      <div className="col-12 text-center">
                        <h5 className='fw-bolder mt-2'>React JS Tutorial</h5>
                        <p className='mt-4'>React is an open-source front-end JavaScript library. This series will cover Rea...</p>

                        <button className='w-75 pt-2 pb-2 btn-light border-0 rounded mt-4'>Start Learning!</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>


             <div className="col-12 col-ms-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 m-auto mt-3">
              <div className="row">
                <div className="col-11 m-auto tutorial pt-3 pb-3"style={tutorials} >
                    <div className="row">
                      <div className="col-6 m-auto">
                        <img src={java} className='img-fluid' alt="" />
                      </div>
                      <div className="col-12 text-center">
                        <h5 className='fw-bolder mt-2'>Java Tutorial</h5>
                        <p className='mt-4'>The word hypertext markup language is composed of the words “hypertext” and “mar...</p>

                        <Link to='/java'><button className='w-75 pt-2 pb-2 btn-light border-0 rounded mt-4'>Start Learning!</button></Link>{""}
                      </div>
                    </div>
                </div>
              </div>
            </div>



             <div className="col-12 col-ms-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 m-auto mt-3">
              <div className="row">
                <div className="col-11 m-auto tutorial pt-3 pb-3"style={tutorials} >
                    <div className="row">
                      <div className="col-6 m-auto">
                        <img src={cpp} className='img-fluid' alt="" />
                      </div>
                      <div className="col-12 text-center">
                        <h5 className='fw-bolder mt-2'>C++ Tutorial</h5>
                        <p className='mt-4'>The word hypertext markup language is composed of the words “hypertext” and “mar...</p>

                        <button className='w-75 pt-2 pb-2 btn-light border-0 rounded mt-4'>Start Learning!</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>



             <div className="col-12 col-ms-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 m-auto mt-3">
              <div className="row">
                <div className="col-11 m-auto tutorial pt-3 pb-3"style={tutorials} >
                    <div className="row">
                      <div className="col-6 m-auto">
                        <img src={php} className='img-fluid' alt="" />
                      </div>
                      <div className="col-12 text-center">
                        <h5 className='fw-bolder mt-2'>PHP Tutorial</h5>
                        <p className='mt-4'>The word hypertext markup language is composed of the words “hypertext” and “mar...</p>

                        <button className='w-75 pt-2 pb-2 btn-light border-0 rounded mt-4'>Start Learning!</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tutorial;
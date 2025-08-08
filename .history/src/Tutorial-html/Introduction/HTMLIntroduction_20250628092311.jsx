import React from 'react'


function HTMLIntroduction() {
  return (
    <>
      <section class="tutorial-overview dark-mode">
        <header class="overview-header">
          <div className="overviewOverlayHeader">
            <h1 className='mt-5'>HTML Tutorial</h1>
            <p className='overviewPara w-75 m-auto'>
              The word hypertext markup language is composed of the words “hypertext” and “markup language”.
              The term "hypertext" refers to the linking of text with other documents and “markup language”
              refers to a language that uses a set of tags.
            </p>
          </div>
        </header>


        <div className="bg-light shadow-sm p-5 mt-0">
            <h2>Get Started</h2>
        <p className='overviewListTitle'>Welcome to the HTML Tutorial tutorial series! To begin learning:</p>
        <ol>
          <li>Select a lesson from the sidebar on the left</li>
          <li>Work through the lessons in order for the best learning experience</li>
          <li>Each lesson contains detailed explanations and examples</li>
        </ol>
        </div>
        


      </section>
    </>
  )
}

export default HTMLIntroduction
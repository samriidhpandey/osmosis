import NotesCard from "../component6/NotesCard";
import cnotes from "../Images/c.webp"
import pyton from "../Images/python (1).webp"
// import anroid from "./Images/android.webp"
import java from "../Images/java.webp"
import html from "../Images/html.webp"
import css from "../Images/css.webp"
import dsa from "../Images/dsa.webp"
import javascript from "../Images/js.webp"
import cpp from "../Images/cpp.webp"
import php from "../Images/php.webp"
import mysql from "../Images/mysql.webp"
import Card from "../Component5/Card";
// import flask from "./Images/flask.webp"
// import django from "./Images/django.webp"
function Notes({isDark}) {
  
  const notes = {
    backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? 'white' : 'black',
  };
  
  
  
  function Heading({ text, isDark,}) {
    const notetext = {
    // backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? '' : 'black',
  };
    return (
      <h3 className="blog-page-hading mb-5" style={notetext}>{text}</h3>
    );
  }

  return (
    <>
      <div className="container-fluid pt-2 pb-5" style={notes}>
        <div className="notes-dowload">  <Heading text={"Download Notes"} isDark={isDark}/> </div>

        <div className="notes-main-page ">
          <NotesCard
            imgsrc={pyton}
            text="Python Notes"
            content="Dowload Notes Heare"
            button="PDf Notes"
            button2="chaptervise Notes"
            pdfLink="/pdfs/python.pdf"
            isDark={isDark}
          />
          <NotesCard
            imgsrc={cnotes}
            text="c Notes"
            content="Dowload Notes Heare"
            button="PDf Notes"
            button2="chaptervise Notes"
            pdfLink="/pdfs/cpp.pdf"
            isDark={isDark}

          />
          {/* <NotesCard
  imgsrc={anroid}
  text="Anroid Text"
    content="Dowload Notes Heare"
  button="PDf Notes"
  button2="chaptervise Notes"
/> */}
          <NotesCard
            imgsrc={java}
            text="Java Text"
            content="Dowload Notes Heare"
            button="PDf Notes"
            button2="chaptervise Notes"
            pdfLink="/pdfs/JavaBasicprogramms.pdf"
            isDark={isDark}
          />

          <NotesCard
            imgsrc={html}
            text="html Notes"
            content="Dowload Notes Heare"
            button="PDf Notes"
            button2="chaptervise Notes"
            pdfLink="/pdfs/HTML Handwritten Notes.pdf"
            isDark={isDark}
          />
          <NotesCard
            imgsrc={css}
            text="css Notes"
            content="Dowload Notes Heare"
            button="PDf Notes"
            button2="chaptervise Notes"
            pdfLink="/pdfs/CSS.pdf"
            isDark={isDark}
          />
          <NotesCard
            imgsrc={dsa}
            text="Dsa Notes"
            content="Dowload Notes Heare"
            button="PDf Notes"
            button2="chaptervise Notes"
            pdfLink="/pdfs/DataStructure Notes.pdf"
            isDark={isDark}
          />
          <NotesCard
            imgsrc={javascript}
            text="Javascript Notes"
            content="Dowload Notes Heare"
            button="PDf Notes"
            button2="chaptervise Notes"
            pdfLink="/pdfs/JS Notes.pdf"
            isDark={isDark}

          />
          <div className="row w-100 notes-dowload">  <Heading text={"Download Cheatsheets"} isDark={isDark} /> </div>

          <NotesCard
            imgsrc={pyton}
            text="Python Cheatsheet"
            content="Dowload Cheatsheet Heare"
            button3="dowloads"
            pdfLink="/pdfs/DataStructure Notes.pdf"
            isDark={isDark}


          />
          <NotesCard
            imgsrc={cnotes}
            text="C Cheatsheet"
            content="Download Cheatsheet Here"
            button3="dowloads"
            pdfLink=" /pdfs/C.CheatSheet.pdf"
            isDark={isDark}


          />
          <NotesCard
            imgsrc={cpp}
            text="C++ Cheatsheet"
            content="Download Cheatsheet Here"
            button3="dowloads"
            pdfLink="/pdfs/Cppcheatsheat.pdf"
            isDark={isDark}

          />
          <NotesCard
            imgsrc={java}
            text="Java Cheatsheet"
            content="Dowload Notes Heare"
            button3="dowloads"
            pdfLink="/pdfs/JavaCheatSheet.pdf"
            isDark={isDark}

          />
          <NotesCard
            imgsrc={html}
            text="Html Cheatsheet"
            content="Download Cheatsheet Here"
            button3="dowloads"
            pdfLink="/pdfs/htmlcheatsheet.pdf"
            isDark={isDark}


          />
          <NotesCard
            imgsrc={css}
            text="CSS Cheatsheet"
            content="Download Cheatsheet Here"
            button3="dowloads"
            pdfLink="/pdfs/CSSCheatsheet.pdf"
            isDark={isDark}


          />
          {/* <NotesCard
  imgsrc={flask}
  text="Flask  Cheatsheet"
  content="Download Cheatsheet Here"
  button3="dowloads"
  
/> */}
          <NotesCard
            imgsrc={javascript}
            text="javascript Cheatsheet"
            content="Download Cheatsheet Here"
            button3="dowloads"
            pdfLink="/pdfs/Javascript-Cheat-Sheet.pdf"
            isDark={isDark}


          />
          <NotesCard
            imgsrc={php}
            text="PHP Cheatsheet"
            content="Download Cheatsheet Here"
            button3="dowloads"
            pdfLink="/pdfs/phpcheatsheet.pdf"
            isDark={isDark}

          />
          <NotesCard
            imgsrc={mysql}
            text="MY SQL Cheatsheet"
            content="Download Cheatsheet Here"
            button3="dowloads"
            pdfLink="/pdfs/SQL-Cheat-Sheet.pdf"
            isDark={isDark}


          />
          {/* <NotesCard
  imgsrc={django}
  text="Django Cheatsheet"
  content="Download Cheatsheet Here"
  button3="dowloads"
  
/> */}

        </div>
      </div>
    </>
  );
}
export default Notes
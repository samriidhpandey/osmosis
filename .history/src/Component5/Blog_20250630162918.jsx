import mongodb from "../Images/mongodb.png"
import deploying from "../Images/deploying.png"
import staclry from "../Images/stackry.webp"
import algorithem from "../Images/algorithem.webp"
import email from "../Images/email.webp"
import solve from "../Images/solved.webp"
import pytonnot from "../Images/pytonnot.png"
import pyton from "../Images/python.webp"
import genratedom from "../Images/grnraterandom.webp"
import keyjs from "../Images/keyjs.webp"
import divisezero from "../Images/devisionbyzero.webp"
import openterminal from "../Images/openterminal.webp"
import Card from "./Card.jsx"
import { Link } from 'react-router-dom';
function Blog({isDark}) {
    const blog = {
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
  }

    return (
        <>
            <div className="container-fluid" style={blog}>
                <div className="pb-5">
                    <div className="row">
                        <h5 className="blogs-main-name mt-5 mb-5 "  >Blogs</h5>

                    </div>
                    <div className="blog-main" >

                        <Card isDark={isDark} imgsrc={mongodb} text="How to integated mongodb into your next.js apps" content="Learn how to seamlessly integrate MongoDB into your Next.js applications with best practices for efficient connection handling, resource management, and  " button="Read more" more="/Blog/Mongodb" />
                        <Card isDark={isDark} imgsrc={deploying} text="How to host a Next.js app in Production on an Ubuntu VPS" content="Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, ." button="Read more" more="/Blog/Deploying" />
                        <Card isDark={isDark} imgsrc={staclry} text=" A Comprehensive Guide to Using Stackry for International.." content="In today's interconnected world, the desire for cutting-edge tech gadgets, unique international products, and exclusive US deals has reached an unprecedented level.  " button="Read more" more="/Blog/Stackry" />
                        <Card isDark={isDark} imgsrc={algorithem} text="How Algorithmic Trading Systems Work" content="  In India, the popularity of online trading has helped transform the financial landscape. This has led to over 20% of all trading is now done via mobile through trading...." button="Read more" more="/Blog/Algorithem" />
                        <Card isDark={isDark} imgsrc={email} text=" Build an Email Validator with HTML, CSS, and JavaScript" content=" Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to .." button="Read more" more="/Blog/Email" />
                        <Card imgsrc={solve} text=" [Solved] Python AttributeError: object has no attribute 'X'" content="Learn about Attribute Errors in Python, why they occur, and how to handle them effectively. This beginner-friendly guide provides real-code examples and solutions to" button="Read more" more="/Blog/Solvepyton" />
                        <Card imgsrc={pytonnot} text=" [Solved] python was not found; run without arguments to" content=" Encountered the 'Python was not found' error on your Windows system? Our step-by-step guide walks you through the process to locate and set Python paths" button="Read more" more="/Blog/Noargumentpyton" />
                        <Card imgsrc={pyton} text=" How to find the Python Installation Path on Windows?" content=" Discover how to locate the Python installation path on your Windows system using two effective methods: the traditional Command Prompt and the modern Terminal." button="Read more" more="/Blog/PytonInstall" />
                        <Card imgsrc={genratedom} text="How to Generate Random Numbers in C Language" content=" A comprehensive guide to generating random numbers in C using the rand() and srand() functions, with examples and output." button="Read more" more="/Blog/Genrate" />
                        <Card imgsrc={keyjs} text=" How to Check if Keys Exist in JavaScript Objects" content=" Learn how to check if keys exist in JavaScript objects using two popular methods: the 'in' operator and the hasOwnProperty() method. This comprehensive guide" button="Read more" more="/Blog/Keyinjs" />
                        <Card imgsrc={divisezero} text=" [Solved] ZeroDivisionError: division by zero" content=" Understanding and handling Zero Division Error in Python: A comprehensive guide explaining what Zero Division Error is, why it happens, and how to manage it" button="Read more" more="/Blog/Zerodivi" />
                        <Card imgsrc={openterminal} text=" How to Open the Terminal in Visual Studio Code" content=" Learn how to open the terminal in Visual Studio Code (VS Code) using various methods, such as the menu bar, keyboard shortcuts, command palette, and sidebar icon." button="Read more" more="/Blog/Openterminal" />
                    </div>
                </div>
            </div>



        </>
    );
}
export default Blog
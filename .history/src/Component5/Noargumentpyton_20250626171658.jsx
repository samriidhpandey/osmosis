import noargu from "./Images/pytonnot.png"
import pytinstall from "./Images/python-install-with-path.png"
import pytonloction from "./Images/python-location.mp4"
import step1 from "./Images/step-1-search-for-environment-variables.png"
import step2 from "./Images/step2-system-properties.png"
import step3 from "../Images/step3-system-variable.png"
import step4 from "../Images/step4-edit-system-variable.png"
import step5 from "../Images/step-5-click-new.png"
import step6 from "../Images/edit-environment-variable-dialogue.png"
function Noargumentpyton(){
     function Heading({ text }) {
        return (
            <h3 className="blog-page-hading">{text}</h3>
        );
    }
    return(
        <>
        <div className="container-fluid  blog-page-main" >
                       {/* <div className=""> */}
       
                       <img src={noargu} className="blog-page-img" />
                       <h1 className="blog-page-text2">[Solved] python was not found; run without arguments to install from the microsoft store, or...</h1>
                       <p className="blog-page-content2 border-zinc-500  w-100" style={{fontSize:"15px"}}>"Encountered the 'Python was not found' error on your Windows system? Our step-by-step guide walks you through the process to locate and set Python paths, ensuring smooth execution. With clear instructions, images, and videos, you'll resolve this issue in no time. Dive in to get Python up and running on your system!"</p>
                       <p> I bought my new Asus laptop and after trying to run Python I encountered the "Python was not found; run without arguments to install from the Microsoft Store or disable this shortcut from Settings  manage app execution aliases" error. If you too have recently faced this issue, I have found a simple solution. Follow along to get Python up and running on your system in no time.</p>
                        <Heading text={"Understanding the Error"}/>
                        <p> At CodeWithHarry, my aim is to help you understand how things work and why you got this error in the first place.</p>
                       <p> This error typically occurs when the Python interpreter's path is not correctly set in your environment variables. This can happen for a variety of reasons, including improper installation or system updates. The good news? The fix is straightforward.</p>
                        <p> For most people, the simple fix is to install Python from the official Python website and check the "Add Python to environment variables" option during installation.</p>
    
                        <img src={pytinstall} alt="" className="blog-page-img w-100" style={{height:"auto",marginTop:"10px"   }}/>
                        <p> If you already have Python installed, follow the steps below:</p>
                        <Heading text={"Step 1: Locate Your Python Installation Paths"}/>
                        <p className="w-100"> First, you need to find the paths where your Python interpreter is installed. The paths are usually one of the below:</p>
                          <ul>
                            <li >  %AppData%\Programs\Python\Python311</li>
                            <li> %AppData%\Programs\Python\Python311\Scripts</li>
                          </ul>
                            <p> But if you are having trouble finding your Python installation, here is a quick guide I wrote for exactly that.</p>
                      <video muted autoPlay loop controls style={{width:"100%",height:"auto"}} >
                        <source src={pytonloction} type="video/mp4"/>
                      </video>
                      <Heading text={"Step 2: Access and Set the Path Environment Variables"}/>
                    <p> Search for "Environment Variables" in Windows search as shown below:</p>
                    <img src={step1} alt=""className="blog-page-img" style={{height:"auto"}}/>
                    <p className="mt-2"> Navigate to the System Properties, and then click on the "Environment Variables" button.</p>
                       <img src={step2} alt="" className="blog-page-img mt-2" style={{height:"auto"}}/>
                      <Heading text={"Step 3: Modify the System Variables"}/>
                      <p> Click on the "System variables" and then click "Path" as shown below:</p>
                       <img src={step3} alt="" className="blog-page-img mt-2" style={{height:"auto"}}/>
                      <p> After you select the "Path" variable, click "Edit."</p>
                       <img src={step4} alt="" className="blog-page-img mt-2" style={{height:"auto"}}/>
                      <p> Click "New" and then add the previously copied Python paths to the list.</p>
                       <img src={step5} alt="" className="blog-page-img mt-2" style={{height:"auto"}}/>
                     <p> This is what it will look like:</p> 
                       <img src={step6} alt="" className="blog-page-img mt-2" style={{height:"auto"}}/>
                      <p> Note: The key to solving this issue lies in adding the Python paths to the System variables, not the User variables. I initially made the mistake of using the User variables, which led to another error. Hence, I want to make sure you do not repeat the mistake I did!</p>
                      <Heading text={"Conclusion"}/>
                      <p> And that's it! You've successfully fixed the "Python was not found" error on your computer. By following these simple steps, you should now be able to use Python. If you have any questions or need further assistance, feel free to leave a comment below. Happy coding!</p>
                      
                       </div>
        </>
    );
}
export default Noargumentpyton
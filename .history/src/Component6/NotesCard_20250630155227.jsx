function NotesCard({ imgsrc, text, content, button, button2, button3, pdfLink,isDark }) {
  const handlePDFClick = () => {
    if (pdfLink) {
      window.open(pdfLink, "_blank");
    }
  };
  const handleDownloadClick = () => {
    if (pdfLink) {
      const link = document.createElement("a");
      link.href = pdfLink;
      link.download = "file.pdf"; // You can customize the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };


  return (
    <>

      <div className="notes-card pb-3" id="notes">
        <div className="notescard-image">
          {imgsrc && (
            <img
              src={imgsrc}
              alt=""
              className="notescard-image"
              width="100%"
              height="200px"
            //   style={{ objectFit: "cover" }}
            />
          )}
        </div>
        {text && <h2 className="notes-main-h2">{text}</h2>}
        {content && <p className="notes-main-p">{content}</p>}
        <div className="notes-btn">
          {button && <button className="notes-main-btn" onClick={handlePDFClick}>{button}</button>}
          {button2 && <button className="notes-main-btn2" onClick={handleDownloadClick}>{button2}</button>}
          {button3 && <button className="notes-main-btn3" onClick={handleDownloadClick} >{button3}</button>}
        </div>

      </div>
    </>
  );
}
export default NotesCard;
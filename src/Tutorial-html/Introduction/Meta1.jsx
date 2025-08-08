import React from 'react'

function Meta() {
  return (
    <>
    <div className="container my-5">
      <div className="bg-white border rounded shadow-sm p-4">
        <h2 className="text-primary text-center mb-4">HTML Meta Tags & Favicon</h2>

        <p>
          The <code className="p-2">&lt;meta&gt;</code> tags in HTML provide metadata about the document. Metadata includes information such as the character set, page description, keywords, author name, and more. These tags are always placed inside the <code className="p-2">&lt;head&gt;</code> section of an HTML document.
        </p>

        <h4 className="text-success mt-4">💡 Commonly Used Meta Tags</h4>
        <code className="p-2 bg-light d-block rounded mb-3">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"> <!-- Character encoding -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive design -->
  <meta http-equiv="X-UA-Compatible" content="ie=edge"> <!-- IE compatibility -->
  <meta name="description" content="This is a description of the web page"> <!-- Page description -->
  <meta name="keywords" content="HTML, CSS, JavaScript"> <!-- Keywords -->
  <meta name="author" content="Your Name"> <!-- Author -->
  <title>Document</title>
</head>
<body>
  <!-- Your content here -->
</body>
</html>`}
        </code>

        <h4 className="text-success mt-4">🔍 Explanation of Each Tag</h4>
        <ul>
          <li><strong>Character Encoding:</strong> <code className="p-2">&lt;meta charset="UTF-8"&gt;</code> sets UTF-8 encoding for multilingual support.</li>
          <li><strong>Viewport:</strong> <code className="p-2">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> ensures responsive layout.</li>
          <li><strong>IE Compatibility:</strong> <code className="p-2">&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;</code> for rendering in latest IE engine.</li>
          <li><strong>Description:</strong> <code className="p-2">&lt;meta name="description" content="..."&gt;</code> is used by search engines.</li>
          <li><strong>Keywords:</strong> <code className="p-2">&lt;meta name="keywords" content="..."&gt;</code> historically used by search engines.</li>
          <li><strong>Author:</strong> <code className="p-2">&lt;meta name="author" content="..."&gt;</code> specifies document author.</li>
        </ul>

        <h4 className="text-success mt-5">🌟 How to Add a Favicon</h4>
        <p>A favicon is a small icon shown in the browser tab, helping users identify your website.</p>

        <h5>🧩 Step-by-Step</h5>
        <ul>
          <li><strong>Step 1:</strong> Create or download a square icon (16x16 or 32x32), ideally in <code className="p-2">.ico</code> format.</li>
          <li><strong>Step 2:</strong> Place the icon file in your project’s root directory.</li>
          <li><strong>Step 3:</strong> Add this tag inside your <code className="p-2">&lt;head&gt;</code>:</li>
        </ul>
        <code className="p-2 bg-light d-block rounded mb-3">
          &lt;link rel="icon" href="favicon.ico" type="image/x-icon" /&gt;
        </code>

        <p>
          If your icon file is in a subfolder, update the <code className="p-2">href</code> accordingly. Ex: <code className="p-2">/assets/favicon.ico</code>
        </p>

        <h5 className="text-secondary">🧪 Test It</h5>
        <p>
          Open your site in multiple browsers to confirm your favicon displays properly.
        </p>

        <h5 className="text-secondary mt-4">🔚 Conclusion</h5>
        <p>
          Meta tags play an important role in SEO, accessibility, and user experience. Favicons add a professional and recognizable touch to your website. Together, they enhance the technical and visual quality of your web page.
        </p>

        <div className="text-end">
          <p className="text-muted mb-0">
            <strong>Previous:</strong> More on Forms<br />
            <strong>Next:</strong> HTML Head Elements (Coming Soon!)
          </p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Meta
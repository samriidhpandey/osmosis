import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivacyPolicy = ({ isDark }) => {
  const textColor = isDark ? "#eee" : "#333";
  const bgColor = isDark ? "#121212" : "#fff";

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, padding: "2rem" }} className="container-fluid">
      <h1 className="mb-4">Privacy Policy</h1>
      <p><strong>Effective Date:</strong> [Insert Date]</p>

      <p>
        At Osmosis Institute of Computer Education ("we", "our", or "us"), your privacy is important to us.
        This Privacy Policy outlines how we collect, use, protect, and disclose information collected through our official website.
        By accessing or using our website, you consent to the practices described in this policy.
      </p>

      <h4 className="mt-4">1. Information We Collect</h4>
      <p>We collect limited personal information when you interact with our website, such as:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Course interests or inquiries (via contact forms)</li>
        <li>Login credentials (for student/staff dashboards)</li>
      </ul>
      <p>
        We do not collect sensitive personal data like Aadhar number, financial information, or payment details,
        as our website does not support direct payments.
      </p>

      <h4 className="mt-4">2. How We Use Your Information</h4>
      <p>The information we collect may be used for:</p>
      <ul>
        <li>Responding to course inquiries</li>
        <li>Sending important updates or notifications</li>
        <li>Managing student and staff logins</li>
        <li>Internal record-keeping and support</li>
      </ul>
      <p>We do not use your data for advertising or marketing purposes.</p>

      <h4 className="mt-4">3. Use of Third-Party Tools</h4>
      <p>
        We use third-party services to enhance the performance and delivery of educational content:
      </p>
      <ul>
        <li>YouTube – to host and display video tutorials</li>
        <li>Google Forms – for student feedback, surveys, or inquiries</li>
        <li>Google Analytics – to understand basic website traffic (IP, location, browser type, etc.)</li>
      </ul>
      <p>These services may collect technical information as per their own privacy policies.</p>

      <h4 className="mt-4">4. Data Sharing & Disclosure</h4>
      <p>
        We do not sell, rent, or trade your personal information with any third parties.
        Any data shared externally is strictly for service functionality through tools like Google Forms or YouTube, and only as needed.
      </p>

      <h4 className="mt-4">5. Data Security</h4>
      <p>
        We implement reasonable technical and administrative measures to protect your information, including:
      </p>
      <ul>
        <li>SSL encryption (HTTPS)</li>
        <li>Secure login systems for student/staff accounts</li>
        <li>Restricted access to admin dashboards</li>
      </ul>
      <p>While we take steps to secure your data, no method of internet transmission is 100% secure.</p>

      <h4 className="mt-4">6. User Rights</h4>
      <p>
        Currently, we do not support individual data deletion or correction requests. However,
        users can contact us for critical corrections related to account login or profile issues.
      </p>

      <h4 className="mt-4">7. Children’s Privacy</h4>
      <p>
        Our website is intended for individuals aged 13 and above.
        Children under this age should use the site only under parental supervision.
      </p>

      <h4 className="mt-4">8. Changes to This Policy</h4>
      <p>
        We may update this Privacy Policy from time to time.
        Changes will be posted on this page with an updated effective date.
        Continued use of our website implies acceptance of the new terms.
      </p>

      <h4 className="mt-4">9. Contact Us</h4>
      <p>
        For questions or concerns regarding this Privacy Policy, please contact:
        <br />📧 Email: [Insert official Osmosis email]
        <br />🏢 Office Visit: Osmosis Institute of Computer Education, [Insert full address]
      </p>
    </div>
  );
};

export default PrivacyPolicy;

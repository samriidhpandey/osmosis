import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TermsOfService = ({ isDark }) => {
  const textColor = isDark ? "#eee" : "#333";
  const bgColor = isDark ? "#121212" : "#fff";

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, padding: "2rem" }} className="container-fluid">
      <h1 className="mb-4">Terms of Service</h1>
      {/* <p><strong>Effective Date:</strong> [Insert Date]</p> */}

      <h4 className="mt-4">1. Acceptance of Terms</h4>
      <p>
        By accessing or using our website, downloading study materials, or submitting inquiries
        through our contact form, you agree to be bound by these Terms. If you do not agree, please discontinue use of the website.
      </p>

      <h4 className="mt-4">2. Services Provided</h4>
      <p>The Osmosis website offers the following services:</p>
      <ul>
        <li>Information on our offline courses</li>
        <li>Access to free and paid downloadable study materials (PDFs, notes)</li>
        <li>Access to free YouTube tutorials</li>
        <li>Submission of inquiries via a contact form</li>
        <li>Login-based dashboard access for students and staff</li>
      </ul>
      <p><strong>Note:</strong> We do not provide online classes or accept online payments via the website.</p>

      <h4 className="mt-4">3. Eligibility</h4>
      <p>
        Our website is intended for use by individuals 13 years of age or older. If you are under this age, parental or guardian supervision is required.
      </p>

      <h4 className="mt-4">4. User Accounts</h4>
      <p>
        Some features (such as student dashboards) require account registration. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
      </p>
      <p>
        We reserve the right to suspend or terminate accounts:
        <ul>
          <li>If any misuse, unauthorized access, or violation of rules occurs</li>
          <li>With or without prior notice, depending on the nature of the breach</li>
        </ul>
      </p>

      <h4 className="mt-4">5. Code of Conduct</h4>
      <p>
        While using our website, you agree not to:
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Abuse or misuse our contact form or staff support</li>
          <li>Reproduce or redistribute study material without permission</li>
          <li>Attempt to hack, alter, or disrupt the website's functionality</li>
        </ul>
        Any behavior deemed inappropriate may result in the suspension of access.
      </p>

      <h4 className="mt-4">6. Intellectual Property</h4>
      <p>
        All content, including but not limited to notes, PDFs, graphics, logos, and YouTube videos, is either:
        <ul>
          <li>The intellectual property of Osmosis Institute</li>
          <li>Used with proper rights/attribution from third-party sources</li>
        </ul>
        Unauthorized use, reproduction, or distribution of such content is strictly prohibited.
      </p>

      <h4 className="mt-4">7. Third-Party Services</h4>
      <p>
        We use third-party platforms such as YouTube, Google Forms, and Google Analytics for educational and administrative purposes.
        Your interaction with these platforms is subject to their respective terms and privacy policies.
      </p>

      <h4 className="mt-4">8. Payments & Refunds</h4>
      <p>
        Currently, our website does not support or collect payments for any service. If online courses are introduced in the future, please note that no refunds will be issued under any circumstance.
      </p>

      <h4 className="mt-4">9. Changes to Terms</h4>
      <p>
        We may update these Terms of Service from time to time. Although changes may be displayed on the website,
        we do not guarantee notification alerts for all users. It is your responsibility to review this page periodically for any updates.
      </p>

      <h4 className="mt-4">10. Governing Law</h4>
      <p>
        These Terms are governed by the laws of Jodhpur, Rajasthan, and any disputes shall be subject to the jurisdiction of courts located therein.
      </p>

      <h4 className="mt-4">11. Contact Us</h4>
      <p>
        For any questions or concerns regarding these Terms, you may contact us through:
        <br />📧 Email: [Computerosmosis@gmail.com]
        <br />🏢 Office Visit: [CLASS IN JODHPUR, 18/ 786, Sector 18, Chopasni Housing Board, Jodhpur, Rajasthan 342008]
      </p>
    </div>
  );
};

export default TermsOfService;

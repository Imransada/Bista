// app/privacy-policy/page.jsx 
// Privacy Policy page for Bilalsada Travel & Tours

export const metadata = {
  title: "Privacy Policy | Bilalsada Travel And Tours",
  description:
    "Privacy Policy for Bilalsada Travel And Tours, describing how we collect, use, and disclose your information.",
};

const LAST_UPDATED = "July 11, 2026";

const sections = [
  { id: "company-information", title: "Company Information" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-your-information", title: "How We Use Your Information" },
  { id: "how-we-share-your-information", title: "How We Share Your Information" },
  { id: "data-security", title: "Data Security" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-data-protection-rights", title: "Your Data Protection Rights" },
  { id: "cookies-and-tracking-technologies", title: "Cookies and Tracking Technologies" },
  { id: "third-party-links", title: "Third-Party Links" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "changes-to-this-privacy-policy", title: "Changes to This Privacy Policy" },
  { id: "contact-us", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-800">
      <header className="mb-10 border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Privacy Policy for Bilalsada Travel And Tours
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last Updated: {LAST_UPDATED}</p>
        <p className="mt-4 leading-relaxed">
          This Privacy Policy describes how Bilalsada Travels and Tours (&ldquo;we&rdquo;,
          &ldquo;our&rdquo;, or &ldquo;us&rdquo;), legally registered as Bilalsada Travel &amp;
          Tours LTD, collects, uses, and discloses your information when you use our services,
          including our website at{" "}
          <a
            href="https://www.bilalsadatravels.com"
            className="text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
          >
            www.bilalsadatravels.com
          </a>{" "}
          and the Bilalsada Travels and Tours mobile application. We are committed to protecting
          your privacy and handling your data in an open and transparent manner.
        </p>
      </header>

      {/* Table of contents */}
      <nav aria-label="Table of contents" className="mb-12">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          On this page
        </h2>
        <ol className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-indigo-600 hover:text-indigo-700 hover:underline"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="space-y-12 leading-relaxed">
        <section id="company-information">
          <h2 className="text-xl font-semibold text-gray-900">Company Information</h2>
          <dl className="mt-4 divide-y divide-gray-100 text-sm">
            {[
              ["Legal Name", "Bilalsada Travel & Tours LTD"],
              ["Operating Name", "Bilalsada Travel And Tours"],
              ["Registered Address", "01, Opposite Liyafa Round, Katsina State, Nigeria"],
              [
                "Website",
                <a
                  key="website"
                  href="https://www.bilalsadatravels.com"
                  className="text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
                >
                  www.bilalsadatravels.com
                </a>,
              ],
              [
                "Email Address",
                <a
                  key="email"
                  href="mailto:hello@bilalsadatravels.com"
                  className="text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
                >
                  hello@bilalsadatravels.com
                </a>,
              ],
              ["Company Registration Number (RC)", "9283973"],
              [
                "Registered With",
                "Corporate Affairs Commission (CAC), Special Control Unit Against Money Laundering (SCUML) certified, Nigerian Railway Corporation (NRS) certified, National Association of Nigeria Travel Agencies (NANTA), International Air Transport Association (IATA) certified.",
              ],
              ["Nature of Business", "Travel Agency Company"],
            ].map(([label, value], index) => (
              <div key={index} className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">{label}</dt>
                <dd className="text-gray-600 sm:col-span-2">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="information-we-collect">
          <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
          <p className="mt-4">
            We collect various types of information to provide and improve our services to you.
          </p>

          <h3 className="mt-6 text-lg font-medium text-gray-900">
            Information You Voluntarily Provide
          </h3>
          <p className="mt-2">
            We collect information that you directly provide to us when you use our services,
            create an account, make a booking, or communicate with us. This may include:
          </p>

          <h4 className="mt-4 font-medium text-gray-900">Personal Identification Information</h4>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Date of birth</li>
            <li>Gender</li>
            <li>Nationality</li>
            <li>Passport/ID details</li>
          </ul>

          <h4 className="mt-4 font-medium text-gray-900">Travel-Related Information</h4>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
            <li>Travel dates and destinations</li>
            <li>Accommodation preferences</li>
            <li>Flight preferences</li>
            <li>Dietary requirements</li>
            <li>Special assistance needs</li>
          </ul>

          <h4 className="mt-4 font-medium text-gray-900">Documents Uploaded by Users</h4>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
            <li>Images (e.g., passport photos, visa photos)</li>
            <li>PDF files (e.g., visa applications, travel itineraries)</li>
          </ul>

          <h4 className="mt-4 font-medium text-gray-900">Payment Information</h4>
          <p className="mt-2 text-gray-600">
            Credit/debit card details (processed securely by third-party payment processors; we
            do not store full card details).
          </p>

          <h3 className="mt-6 text-lg font-medium text-gray-900">
            Information We Collect Automatically
          </h3>
          <p className="mt-2">
            When you access and use our website or mobile application, we may automatically
            collect certain information about your device and usage patterns, including:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Mobile device identifiers</li>
          </ul>

          <h3 className="mt-6 text-lg font-medium text-gray-900">Information from Other Sources</h3>
          <p className="mt-2">
            We may receive information about you from third-party partners, such as airlines,
            hotels, and other travel service providers, to facilitate your bookings and enhance
            your travel experience.
          </p>
        </section>

        <section id="how-we-use-your-information">
          <h2 className="text-xl font-semibold text-gray-900">How We Use Your Information</h2>
          <p className="mt-4">We use the information we collect for various purposes, including:</p>

          <h4 className="mt-4 font-medium text-gray-900">To Provide and Manage Services</h4>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
            <li>Processing your travel bookings and reservations</li>
            <li>Providing customer support and responding to your inquiries</li>
            <li>Sending you booking confirmations, updates, and travel itineraries</li>
            <li>Managing your account and preferences</li>
          </ul>

          <h4 className="mt-4 font-medium text-gray-900">To Improve Our Services</h4>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
            <li>Analyzing usage patterns to enhance our website and mobile application</li>
            <li>Developing new features and services</li>
            <li>Personalizing your experience</li>
          </ul>

          <h4 className="mt-4 font-medium text-gray-900">For Communication</h4>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
            <li>Sending you marketing and promotional communications (with your consent where required)</li>
            <li>Notifying you about changes to our services or policies</li>
            <li>Responding to your feedback</li>
          </ul>

          <h4 className="mt-4 font-medium text-gray-900">For Security and Fraud Prevention</h4>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
            <li>Protecting our services and users from fraud and unauthorized access</li>
            <li>Verifying your identity</li>
          </ul>

          <h4 className="mt-4 font-medium text-gray-900">For Legal and Regulatory Compliance</h4>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-600">
            <li>Complying with applicable laws, regulations, and legal processes</li>
            <li>Responding to lawful requests from public authorities</li>
          </ul>
        </section>

        <section id="how-we-share-your-information">
          <h2 className="text-xl font-semibold text-gray-900">How We Share Your Information</h2>
          <p className="mt-4">
            We may share your information with third parties in the following circumstances:
          </p>
          <ul className="mt-2 list-disc space-y-3 pl-6 text-gray-600">
            <li>
              <span className="font-medium text-gray-900">Travel Service Providers:</span> We
              share your information with airlines, hotels, car rental companies, and other
              third-party travel providers to fulfill your bookings and provide the services you
              request.
            </li>
            <li>
              <span className="font-medium text-gray-900">Third-Party Service Providers:</span>{" "}
              We engage third-party companies and individuals to perform services on our behalf,
              such as payment processing, data analysis, marketing, and customer support. These
              providers have access to your information only to perform these tasks on our behalf
              and are obligated not to disclose or use it for any other purpose.
            </li>
            <li>
              <span className="font-medium text-gray-900">Legal Requirements:</span> We may
              disclose your information if required to do so by law or in response to valid
              requests by public authorities (e.g., a court order or government agency).
            </li>
            <li>
              <span className="font-medium text-gray-900">Business Transfers:</span> In the event
              of a merger, acquisition, or sale of all or a portion of our assets, your
              information may be transferred as part of that transaction.
            </li>
            <li>
              <span className="font-medium text-gray-900">With Your Consent:</span> We may share
              your information with other third parties when we have your explicit consent to do
              so.
            </li>
          </ul>
        </section>

        <section id="data-security">
          <h2 className="text-xl font-semibold text-gray-900">Data Security</h2>
          <p className="mt-4">
            We implement appropriate technical and organizational measures to protect your
            personal information from unauthorized access, disclosure, alteration, and
            destruction. These measures include encryption, firewalls, and secure socket layer
            technology. However, no method of transmission over the internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section id="data-retention">
          <h2 className="text-xl font-semibold text-gray-900">Data Retention</h2>
          <p className="mt-4">
            We retain your personal information for as long as necessary to fulfill the purposes
            for which it was collected, including for the purposes of satisfying any legal,
            accounting, or reporting requirements. To determine the appropriate retention period,
            we consider the amount, nature, and sensitivity of the personal data, the potential
            risk of harm from unauthorized use or disclosure of your personal data, the purposes
            for which we process your personal data and whether we can achieve those purposes
            through other means, and the applicable legal requirements.
          </p>
        </section>

        <section id="your-data-protection-rights">
          <h2 className="text-xl font-semibold text-gray-900">Your Data Protection Rights</h2>
          <p className="mt-4">
            Depending on your location, you may have the following rights regarding your personal
            data:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-600">
            <li>
              <span className="font-medium text-gray-900">Right to Access:</span> You have the
              right to request copies of your personal data.
            </li>
            <li>
              <span className="font-medium text-gray-900">Right to Rectification:</span> You have
              the right to request that we correct any information you believe is inaccurate or
              complete information you believe is incomplete.
            </li>
            <li>
              <span className="font-medium text-gray-900">Right to Erasure:</span> You have the
              right to request that we erase your personal data, under certain conditions.
            </li>
            <li>
              <span className="font-medium text-gray-900">Right to Restrict Processing:</span> You
              have the right to request that we restrict the processing of your personal data,
              under certain conditions.
            </li>
            <li>
              <span className="font-medium text-gray-900">Right to Object to Processing:</span>{" "}
              You have the right to object to our processing of your personal data, under certain
              conditions.
            </li>
            <li>
              <span className="font-medium text-gray-900">Right to Data Portability:</span> You
              have the right to request that we transfer the data that we have collected to
              another organization, or directly to you, under certain conditions.
            </li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us using the details provided in the
            &ldquo;Contact Us&rdquo; section below.
          </p>
        </section>

        <section id="cookies-and-tracking-technologies">
          <h2 className="text-xl font-semibold text-gray-900">
            Cookies and Tracking Technologies
          </h2>
          <p className="mt-4">
            We use cookies and similar tracking technologies to track the activity on our service
            and hold certain information. Cookies are files with a small amount of data which may
            include an anonymous unique identifier. You can instruct your browser to refuse all
            cookies or to indicate when a cookie is being sent. However, if you do not accept
            cookies, you may not be able to use some portions of our service.
          </p>
        </section>

        <section id="third-party-links">
          <h2 className="text-xl font-semibold text-gray-900">Third-Party Links</h2>
          <p className="mt-4">
            Our service may contain links to other websites that are not operated by us. If you
            click on a third-party link, you will be directed to that third party&rsquo;s site.
            We strongly advise you to review the Privacy Policy of every site you visit. We have
            no control over and assume no responsibility for the content, privacy policies, or
            practices of any third-party sites or services.
          </p>
        </section>

        <section id="childrens-privacy">
          <h2 className="text-xl font-semibold text-gray-900">Children&rsquo;s Privacy</h2>
          <p className="mt-4">
            Our services are not intended for individuals under the age of 18. We do not
            knowingly collect personally identifiable information from anyone under the age of
            18. If you are a parent or guardian and you are aware that your child has provided us
            with personal data, please contact us. If we become aware that we have collected
            personal data from children without verification of parental consent, we take steps
            to remove that information from our servers.
          </p>
        </section>

        <section id="changes-to-this-privacy-policy">
          <h2 className="text-xl font-semibold text-gray-900">Changes to This Privacy Policy</h2>
          <p className="mt-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the &ldquo;Last
            Updated&rdquo; date at the top of this Privacy Policy. You are advised to review this
            Privacy Policy periodically for any changes. Changes to this Privacy Policy are
            effective when they are posted on this page.
          </p>
        </section>

        <section id="contact-us" className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
          <p className="mt-4">
            If you have any questions about this Privacy Policy, our data practices, or if you
            wish to exercise your data protection rights, please contact us:
          </p>
          <ul className="mt-3 space-y-1 text-gray-600">
            <li>
              By Email:{" "}
              <a
                href="mailto:hello@bilalsadatravels.com"
                className="text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
              >
                hello@bilalsadatravels.com
              </a>
            </li>
            <li>
              By Visiting our Website:{" "}
              <a
                href="https://www.bilalsadatravels.com"
                className="text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
              >
                www.bilalsadatravels.com
              </a>
            </li>
            <li>By Mail: Bilalsada Travel &amp; Tours LTD, 01, Opposite Liyafa Round, Katsina State, Nigeria</li>
          </ul>

          <p className="mt-6 text-sm text-gray-500">Bilalsada Travel &amp; Tours LTD</p>
        </section>
      </article>
    </main>
  );
}
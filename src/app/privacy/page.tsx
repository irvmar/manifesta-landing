import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/legal-layout";
import { Callout } from "@/components/legal/callout";
import { ServiceCard } from "@/components/legal/service-card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Manifesta collects, uses, and protects your personal data.",
};

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "data-we-collect", label: "Data We Collect" },
  { id: "data-we-do-not-collect", label: "Data We Do Not Collect" },
  { id: "how-we-use", label: "How We Use Your Data" },
  { id: "ai-processing", label: "AI Processing" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "local-storage", label: "Local Storage" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "california", label: "California Privacy Rights" },
  { id: "children", label: "Children's Privacy" },
  { id: "cookies", label: "Cookies" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="April 1, 2026" toc={TOC}>
      {/* ── Overview ─────────────────────────────────────── */}
      <h2 id="overview">Overview</h2>
      <p>
        Manifesta (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
        operates the Manifesta mobile application (the &ldquo;App&rdquo;) and the
        website at manifesta.ai (the &ldquo;Site&rdquo;). This Privacy Policy
        explains what information we collect, why we collect it, how we use and
        protect it, and what choices you have.
      </p>
      <p>
        We built Manifesta as a personal meditation tool. We have no advertising,
        no ad tracking, and we do not sell your data to anyone &mdash; ever. Our
        business model is a paid subscription, not your personal information.
      </p>
      <p>
        By using the App or Site, you agree to the practices described in this
        policy. If you do not agree, please discontinue use of the App and Site.
      </p>

      <Callout type="important">
        <strong>The short version:</strong> We collect only what we need to
        create your personalized meditations and keep your account running. We
        send your intention text (not your name, email, or any identifying
        information) to AI services to generate meditations. We do not sell data,
        run ads, or track you across other apps.
      </Callout>

      {/* ── Data We Collect ──────────────────────────────── */}
      <h2 id="data-we-collect">Data We Collect</h2>

      <h3>Account Information</h3>
      <p>
        When you create an account, we collect information depending on your
        chosen sign-in method:
      </p>
      <ul>
        <li>
          <strong>Apple Sign-In:</strong> Your name and email address as provided
          by Apple. If you choose Apple&apos;s &ldquo;Hide My Email&rdquo;
          option, we receive only a private relay address &mdash; we never see
          your real email, and we fully support this feature.
        </li>
        <li>
          <strong>Google Sign-In:</strong> Your name, email address, and profile
          photo URL as provided by Google.
        </li>
        <li>
          <strong>Email/Password:</strong> The email address and display name you
          provide during registration. Your password is handled entirely by
          Firebase Authentication and is never stored by us in plaintext.
        </li>
        <li>
          <strong>Anonymous Auth:</strong> You can use the App without creating a
          full account. In this case, we generate an anonymous identifier with no
          personal information attached.
        </li>
      </ul>

      <p>For each account, we also store:</p>
      <ul>
        <li>Authentication provider (Apple, Google, email, or anonymous)</li>
        <li>Account creation date and last login date</li>
        <li>Onboarding completion state</li>
        <li>Subscription plan and status</li>
        <li>
          Meditation preferences (selected voice, selected soundscape)
        </li>
        <li>Streaks and usage statistics (sessions completed, total minutes)</li>
      </ul>

      <h3>User-Generated Content</h3>
      <p>As you use the App, we store the following content you create:</p>
      <ul>
        <li>
          <strong>Intentions:</strong> The text you write to set the theme of
          your meditations.
        </li>
        <li>
          <strong>Meditation history:</strong> Titles, durations, and timestamps
          of meditations you have completed.
        </li>
        <li>
          <strong>Mood reflections:</strong> The emoji and/or text you provide
          before and after each meditation session.
        </li>
      </ul>

      <h3>Usage and Analytics Data</h3>
      <p>
        We collect anonymous analytics data through Firebase Analytics,
        including:
      </p>
      <ul>
        <li>Screens visited within the App</li>
        <li>Features used</li>
        <li>Session duration</li>
        <li>Device type and operating system version</li>
      </ul>
      <p>
        This data is anonymous. We do not include your name, email, intention
        text, or any personally identifiable information in analytics events.
      </p>

      <h3>Crash Reports</h3>
      <p>
        If the App crashes, standard Firebase crash reports are generated
        automatically. These reports include device information, operating system
        version, and technical stack traces. They do not include your personal
        content (intentions, reflections, or meditation history).
      </p>

      {/* ── Data We Do Not Collect ───────────────────────── */}
      <h2 id="data-we-do-not-collect">Data We Do Not Collect</h2>

      <Callout type="info">
        <strong>We do NOT collect:</strong>
        <ul style={{ margin: "0.5rem 0 0", paddingLeft: "1.25rem" }}>
          <li>Location or GPS data</li>
          <li>Contacts or address book information</li>
          <li>Photos, camera, or microphone data</li>
          <li>Health or fitness data</li>
          <li>
            Financial information (payments are processed entirely by Apple
            through the App Store and managed by RevenueCat &mdash; we never see
            your credit card number, billing address, or payment method details)
          </li>
          <li>Data from other apps on your device</li>
          <li>Advertising identifiers or cross-app tracking data</li>
          <li>Browsing history outside the App</li>
        </ul>
      </Callout>

      <p>
        The App does not use push notifications at this time. If we add
        notifications in the future, we will update this policy and request your
        permission before sending any.
      </p>

      {/* ── How We Use Your Data ─────────────────────────── */}
      <h2 id="how-we-use">How We Use Your Data</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>
          <strong>Meditation generation:</strong> Your intention text and
          preferences (voice, soundscape) are sent to our server-side Cloud
          Functions to generate a personalized meditation via AI.
        </li>
        <li>
          <strong>Personalization:</strong> Your preferences, history, and
          streaks let us tailor the App experience to you.
        </li>
        <li>
          <strong>Account management:</strong> Your authentication data lets you
          sign in, sync across devices, and manage your subscription.
        </li>
        <li>
          <strong>Product improvement:</strong> Anonymous analytics help us
          understand which features are valuable and where we can improve.
        </li>
        <li>
          <strong>Stability:</strong> Crash reports help us find and fix bugs.
        </li>
        <li>
          <strong>Customer support:</strong> If you contact us, we use your
          information to respond to your request.
        </li>
      </ul>

      <p>
        <strong>We do not</strong> use your data for advertising, user profiling
        for third parties, selling to data brokers, or any purpose other than
        operating and improving the App.
      </p>

      {/* ── AI Processing ────────────────────────────────── */}
      <h2 id="ai-processing">AI Processing</h2>
      <p>
        Manifesta uses AI to generate personalized meditation scripts and convert
        them to spoken audio. Here is exactly what happens and what data is
        involved:
      </p>

      <h3>Step 1: Script Generation (OpenAI)</h3>
      <p>
        When you request a meditation, your intention text, voice preference, and
        soundscape choice are sent from the App to our Firebase Cloud Functions
        (our server). Our server then sends <strong>only the intention text</strong>{" "}
        to the OpenAI API to generate a meditation script.
      </p>
      <ul>
        <li>
          <strong>What is sent to OpenAI:</strong> Your intention text (e.g.,
          &ldquo;I want to feel calm before my presentation&rdquo;).
        </li>
        <li>
          <strong>What is NOT sent to OpenAI:</strong> Your name, email address,
          user ID, device information, or any other identifying data.
        </li>
        <li>
          <strong>OpenAI&apos;s data policy:</strong> Under OpenAI&apos;s API
          usage terms, data sent through the API is{" "}
          <strong>not used to train their models</strong>. OpenAI retains API
          inputs for up to 30 days for abuse monitoring, then deletes them.
        </li>
      </ul>

      <h3>Step 2: Voice Synthesis (ElevenLabs)</h3>
      <p>
        The generated meditation script is then sent from our server to the
        ElevenLabs API, which converts it into natural-sounding spoken audio.
      </p>
      <ul>
        <li>
          <strong>What is sent to ElevenLabs:</strong> The meditation script text
          only.
        </li>
        <li>
          <strong>What is NOT sent to ElevenLabs:</strong> Your name, email
          address, user ID, original intention text, or any identifying
          information.
        </li>
      </ul>

      <Callout type="info">
        <strong>In summary:</strong> No personally identifiable information ever
        leaves our server to reach OpenAI or ElevenLabs. Only the content needed
        to produce your meditation &mdash; the intention text and the generated
        script &mdash; is shared with these services, and only the minimum
        required for each step.
      </Callout>

      {/* ── Third-Party Services ─────────────────────────── */}
      <h2 id="third-party">Third-Party Services</h2>
      <p>
        We rely on the following third-party services to operate the App. Each
        service processes data as described below and is governed by its own
        privacy policy.
      </p>

      <ServiceCard
        name="Firebase (Google)"
        purpose="Authentication, database, analytics, cloud functions, and crash reporting"
      >
        <p>
          Firebase is provided by Google and handles several core functions of
          the App:
        </p>
        <ul>
          <li>
            <strong>Authentication:</strong> Manages sign-in via Apple, Google,
            email/password, and anonymous auth. Stores authentication tokens and
            session data.
          </li>
          <li>
            <strong>Cloud Firestore:</strong> Stores your account data,
            intentions, meditation history, mood reflections, and preferences.
            Data is encrypted at rest and in transit.
          </li>
          <li>
            <strong>Cloud Functions:</strong> Runs server-side code that
            processes meditation generation requests, calling the OpenAI and
            ElevenLabs APIs on your behalf.
          </li>
          <li>
            <strong>Analytics:</strong> Collects anonymous usage data (screens
            visited, features used, session duration, device type, OS version).
            No personally identifiable information is included in analytics
            events.
          </li>
          <li>
            <strong>Crashlytics:</strong> Collects crash reports with device
            information and stack traces to help us identify and fix issues.
          </li>
        </ul>
        <p>
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase Privacy and Security Documentation
          </a>
          {" | "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
        </p>
      </ServiceCard>

      <ServiceCard
        name="OpenAI"
        purpose="AI meditation script generation"
      >
        <p>
          Your intention text is sent to the OpenAI API via our server-side Cloud
          Functions to generate a personalized meditation script. No personally
          identifiable information is included in the request &mdash; only the
          intention text.
        </p>
        <p>
          Under OpenAI&apos;s API data usage policy, data submitted through the
          API is <strong>not used to train OpenAI&apos;s models</strong>. API
          inputs may be retained for up to 30 days for abuse and misuse
          monitoring, after which they are deleted.
        </p>
        <p>
          <a
            href="https://openai.com/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenAI Privacy Policy
          </a>
          {" | "}
          <a
            href="https://openai.com/policies/api-data-usage-policies"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenAI API Data Usage Policy
          </a>
        </p>
      </ServiceCard>

      <ServiceCard
        name="ElevenLabs"
        purpose="AI voice synthesis for meditation audio"
      >
        <p>
          The generated meditation script (not your intention text, not your
          personal information) is sent to ElevenLabs to produce natural-sounding
          spoken audio. Only the script text is shared &mdash; no names, email
          addresses, user IDs, or any identifying data.
        </p>
        <p>
          <a
            href="https://elevenlabs.io/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            ElevenLabs Privacy Policy
          </a>
        </p>
      </ServiceCard>

      <ServiceCard
        name="RevenueCat"
        purpose="Subscription and in-app purchase management"
      >
        <p>
          RevenueCat manages the verification of your subscription status between
          the App and the Apple App Store. RevenueCat receives:
        </p>
        <ul>
          <li>An anonymous app user ID (not your name or email)</li>
          <li>Apple purchase receipts for subscription validation</li>
        </ul>
        <p>
          RevenueCat does <strong>not</strong> receive your name, email address,
          intention text, meditation history, or any content you create in the
          App.
        </p>
        <p>
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            RevenueCat Privacy Policy
          </a>
        </p>
      </ServiceCard>

      <ServiceCard
        name="Apple App Store"
        purpose="Payment processing and app distribution"
      >
        <p>
          All payments for Manifesta subscriptions are processed entirely by
          Apple through the App Store. We never receive, process, or store your
          credit card number, billing address, or payment method details.
          Apple&apos;s payment processing is subject to Apple&apos;s own privacy
          policy.
        </p>
        <p>
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Privacy Policy
          </a>
        </p>
      </ServiceCard>

      {/* ── Local Storage ────────────────────────────────── */}
      <h2 id="local-storage">Local Storage</h2>
      <p>
        The App stores certain data locally on your device for performance and
        offline access:
      </p>
      <ul>
        <li>
          <strong>User settings and preferences:</strong> Stored using Capacitor
          Preferences in the App&apos;s sandboxed local storage.
        </li>
        <li>
          <strong>Downloaded meditation audio:</strong> When you download a
          meditation for offline listening, the audio file is saved to the
          App&apos;s sandboxed storage on your device. These files are accessible
          only to the App and are removed if you uninstall the App.
        </li>
      </ul>
      <p>
        This local data never leaves your device unless you explicitly trigger a
        sync or backup through your device&apos;s operating system.
      </p>

      {/* ── Data Security ────────────────────────────────── */}
      <h2 id="data-security">Data Security</h2>
      <p>
        We take the security of your data seriously and implement the following
        measures:
      </p>
      <ul>
        <li>
          <strong>Encryption in transit:</strong> All communication between the
          App, our servers, and third-party services uses TLS (Transport Layer
          Security) encryption.
        </li>
        <li>
          <strong>Encryption at rest:</strong> Data stored in Firebase Cloud
          Firestore is encrypted at rest using Google Cloud&apos;s default
          encryption.
        </li>
        <li>
          <strong>Authentication security:</strong> Passwords are handled by
          Firebase Authentication and are never stored in plaintext. Sign-in with
          Apple and Google use industry-standard OAuth 2.0 protocols.
        </li>
        <li>
          <strong>Server-side processing:</strong> AI requests are processed
          through our Firebase Cloud Functions, meaning your API keys and
          third-party credentials are never exposed to the client app.
        </li>
        <li>
          <strong>Minimal data sharing:</strong> We share only the minimum data
          necessary with each third-party service (e.g., only intention text with
          OpenAI, only script text with ElevenLabs, only anonymous IDs with
          RevenueCat).
        </li>
        <li>
          <strong>Sandboxed local storage:</strong> Downloaded files and local
          preferences are stored in the App&apos;s sandboxed container,
          inaccessible to other apps on your device.
        </li>
      </ul>
      <p>
        While no method of electronic storage or transmission is 100% secure, we
        strive to use commercially acceptable means to protect your personal
        information. If we become aware of a security breach that affects your
        personal data, we will notify you in accordance with applicable law.
      </p>

      {/* ── Data Retention ───────────────────────────────── */}
      <h2 id="data-retention">Data Retention</h2>
      <p>
        We retain your personal data and content for as long as your account is
        active and you continue to use the App. Specifically:
      </p>
      <ul>
        <li>
          <strong>Account data, intentions, meditation history, and
          reflections:</strong>{" "}
          Kept while your account is active. Permanently deleted within 30 days
          of an account deletion request.
        </li>
        <li>
          <strong>Anonymous analytics data:</strong> May be retained
          indefinitely in aggregate, anonymized form. This data cannot be linked
          back to you.
        </li>
        <li>
          <strong>Crash reports:</strong> Retained by Firebase Crashlytics per
          Google&apos;s standard retention policies.
        </li>
        <li>
          <strong>Locally stored data:</strong> Downloaded meditation audio and
          local preferences remain on your device until you delete them manually,
          delete your account, or uninstall the App.
        </li>
      </ul>

      {/* ── Your Rights ──────────────────────────────────── */}
      <h2 id="your-rights">Your Rights</h2>
      <p>
        Regardless of where you live, we provide the following rights to all
        users:
      </p>
      <ul>
        <li>
          <strong>Access:</strong> You can request a copy of the personal data we
          hold about you.
        </li>
        <li>
          <strong>Correction:</strong> You can request that we correct any
          inaccurate or incomplete personal data.
        </li>
        <li>
          <strong>Deletion:</strong> You can delete your account and all
          associated data. This can be done directly in the App (Profile &rarr;
          Settings &rarr; Delete Account) or through our{" "}
          <Link href="/delete-account">web-based account deletion page</Link>.
          All data will be permanently removed from our systems within 30 days.
        </li>
        <li>
          <strong>Portability:</strong> You can request a copy of your data in a
          structured, machine-readable format.
        </li>
        <li>
          <strong>Restriction:</strong> You can request that we restrict
          processing of your data in certain circumstances.
        </li>
        <li>
          <strong>Objection:</strong> You can object to our processing of your
          data in certain circumstances.
        </li>
        <li>
          <strong>Withdraw consent:</strong> Where processing is based on
          consent, you can withdraw your consent at any time.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:support@manifesta.ai">support@manifesta.ai</a>. We will
        respond to your request within 30 days.
      </p>

      <Callout type="important">
        <strong>Account deletion is always available.</strong> You can delete
        your account at any time from within the App (Profile &rarr; Settings
        &rarr; Delete Account) or at{" "}
        <Link href="/delete-account">manifesta.ai/delete-account</Link>. No
        email required &mdash; you can do it yourself, instantly.
      </Callout>

      {/* ── California Privacy Rights ────────────────────── */}
      <h2 id="california">California Privacy Rights (CCPA)</h2>
      <p>
        If you are a California resident, the California Consumer Privacy Act
        (CCPA) provides you with additional rights regarding your personal
        information:
      </p>
      <ul>
        <li>
          <strong>Right to know:</strong> You have the right to request that we
          disclose the categories and specific pieces of personal information we
          have collected about you, the categories of sources from which it was
          collected, the business purpose for collecting it, and the categories
          of third parties with whom we share it.
        </li>
        <li>
          <strong>Right to delete:</strong> You have the right to request
          deletion of your personal information, subject to certain exceptions.
        </li>
        <li>
          <strong>Right to non-discrimination:</strong> We will not discriminate
          against you for exercising any of your CCPA rights. We will not charge
          you different prices, provide different quality of service, or deny you
          service for exercising your rights.
        </li>
        <li>
          <strong>No sale of personal information:</strong> We do not sell your
          personal information. We have not sold personal information in the
          preceding 12 months, and we have no plans to do so.
        </li>
        <li>
          <strong>No sharing for behavioral advertising:</strong> We do not share
          your personal information for cross-context behavioral advertising
          purposes.
        </li>
      </ul>
      <p>
        To exercise your CCPA rights, contact us at{" "}
        <a href="mailto:support@manifesta.ai">support@manifesta.ai</a>. We will
        verify your identity before fulfilling your request.
      </p>

      {/* ── Children ─────────────────────────────────────── */}
      <h2 id="children">Children&apos;s Privacy</h2>
      <p>
        Manifesta is not intended for use by children under the age of 13. We do
        not knowingly collect personal information from children under 13. We do
        not knowingly allow children under 13 to create accounts or use the App.
      </p>
      <p>
        If you are a parent or guardian and believe that your child under 13 has
        provided us with personal information, please contact us immediately at{" "}
        <a href="mailto:support@manifesta.ai">support@manifesta.ai</a>. We will
        take steps to delete such information from our systems within a
        reasonable timeframe.
      </p>
      <p>
        In compliance with the Children&apos;s Online Privacy Protection Act
        (COPPA), if we discover that we have inadvertently collected personal
        information from a child under 13, we will promptly delete that
        information.
      </p>

      {/* ── Cookies ──────────────────────────────────────── */}
      <h2 id="cookies">Cookies</h2>
      <p>
        The Manifesta website (manifesta.ai) does not use tracking cookies,
        advertising cookies, or third-party analytics cookies.
      </p>
      <p>
        We may use strictly necessary cookies for basic site functionality, such
        as session management. These cookies are essential for the website to
        function and cannot be used to identify you personally.
      </p>
      <p>
        The Manifesta mobile app does not use cookies. Local data storage in the
        App is handled through Capacitor Preferences and the device file system,
        as described in the Local Storage section above.
      </p>

      {/* ── Changes ──────────────────────────────────────── */}
      <h2 id="changes">Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, technology, legal requirements, or other factors. When
        we make changes:
      </p>
      <ul>
        <li>
          We will update the &ldquo;Last updated&rdquo; date at the top of this
          page.
        </li>
        <li>
          For material changes that affect how we handle your personal data, we
          will make reasonable efforts to notify you (for example, through an
          in-app notification or an email to the address associated with your
          account).
        </li>
        <li>
          Your continued use of the App after any changes to this policy
          constitutes your acceptance of the updated policy.
        </li>
      </ul>
      <p>
        We encourage you to review this page periodically for the latest
        information on our privacy practices.
      </p>

      {/* ── Contact ──────────────────────────────────────── */}
      <h2 id="contact">Contact Us</h2>
      <p>
        If you have questions, concerns, or requests related to this Privacy
        Policy or our data practices, please contact us:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:support@manifesta.ai">support@manifesta.ai</a>
        </li>
        <li>
          Website: <Link href="/support">manifesta.ai/support</Link>
        </li>
        <li>
          Account deletion:{" "}
          <Link href="/delete-account">manifesta.ai/delete-account</Link>
        </li>
      </ul>
      <p>
        We will respond to all privacy-related inquiries within 30 days.
      </p>
    </LegalLayout>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/legal-layout";
import { Callout } from "@/components/legal/callout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service and End User License Agreement for the Manifesta app.",
};

const TOC = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "eligibility", label: "Eligibility" },
  { id: "description", label: "Service Description" },
  { id: "subscriptions", label: "Subscriptions & Billing" },
  { id: "eula", label: "End User License Agreement" },
  { id: "user-content", label: "User Content" },
  { id: "ai-content", label: "AI-Generated Content" },
  { id: "health-disclaimer", label: "Health & Wellness Disclaimer" },
  { id: "prohibited", label: "Prohibited Uses" },
  { id: "ip", label: "Intellectual Property" },
  { id: "disclaimers", label: "Disclaimers & No Warranties" },
  { id: "limitation", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "termination", label: "Termination" },
  { id: "dispute-resolution", label: "Dispute Resolution" },
  { id: "force-majeure", label: "Force Majeure" },
  { id: "general", label: "General Provisions" },
  { id: "apple", label: "Apple-Specific Terms" },
  { id: "contact", label: "Contact Us" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="April 1, 2026"
      toc={TOC}
    >
      {/* ───────────────────────────────────────────── 1. ACCEPTANCE ── */}
      <h2 id="acceptance">1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, accessing, or using the Manifesta mobile
        application (the &ldquo;App&rdquo;), our website at manifesta.ai (the
        &ldquo;Site&rdquo;), or any related services (collectively, the
        &ldquo;Service&rdquo;), you acknowledge that you have read, understood,
        and agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;),
        including the End User License Agreement contained herein, and our{" "}
        <Link href="/privacy">Privacy Policy</Link>, which is incorporated by
        reference.
      </p>
      <p>
        If you do not agree to all of these Terms, you must not download,
        install, or use the App or Service. Your continued use of the Service
        after any modifications to these Terms constitutes acceptance of those
        changes.
      </p>
      <p>
        These Terms constitute a legally binding agreement between you
        (&ldquo;you&rdquo; or &ldquo;User&rdquo;) and Manifesta
        (&ldquo;Manifesta,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;). We reserve the right to update or modify these
        Terms at any time. Material changes will be communicated through the
        App or via email. Your continued use following such notification
        constitutes acceptance.
      </p>

      {/* ───────────────────────────────────────────── 2. ELIGIBILITY ── */}
      <h2 id="eligibility">2. Eligibility</h2>
      <p>
        You must be at least 13 years of age to use the Service. If you are
        between 13 and 18 years of age (or the age of majority in your
        jurisdiction), you may only use the Service with the consent and
        supervision of a parent or legal guardian who agrees to be bound by
        these Terms. By using the Service, you represent and warrant that you
        meet these eligibility requirements.
      </p>

      {/* ───────────────────────────────────────── 3. SERVICE DESCRIPTION ── */}
      <h2 id="description">3. Service Description</h2>
      <p>
        Manifesta is an AI-powered meditation and manifestation application. The
        App allows users to write personal intentions and generates customized
        meditation sessions using artificial intelligence. Key features include:
      </p>
      <ul>
        <li>
          <strong>AI Script Generation:</strong> Meditation scripts are created
          by OpenAI&apos;s language models based on your written intentions.
        </li>
        <li>
          <strong>AI Voice Synthesis:</strong> Audio narration is produced by
          ElevenLabs&apos; text-to-speech technology. All voices are synthetic
          and computer-generated — they are not recordings of real human
          meditation practitioners.
        </li>
        <li>
          <strong>Personalized Sessions:</strong> Ambient soundscapes, mood
          tracking, reflection journaling, and related wellness features.
        </li>
        <li>
          <strong>Free and Premium Tiers:</strong> A limited free tier is
          available. Premium features require a paid subscription.
        </li>
      </ul>
      <p>
        Features may change, be updated, or be discontinued at our discretion
        without prior notice. We do not guarantee that any specific feature will
        always be available.
      </p>

      {/* ─────────────────────────────────── 4. SUBSCRIPTIONS & BILLING ── */}
      <h2 id="subscriptions">4. Subscriptions &amp; Billing</h2>

      <Callout type="important">
        <strong>Auto-Renewal Notice:</strong> Subscriptions automatically renew
        unless you cancel at least 24 hours before the end of the current
        billing period. Your Apple ID account will be charged for renewal within
        24 hours prior to the end of the current period at the rate of the
        selected plan. You can manage and cancel your subscription at any time
        in your device&apos;s Settings &rarr; Apple ID &rarr; Subscriptions.
      </Callout>

      <h3>Subscription Plans</h3>
      <ul>
        <li>
          <strong>Weekly Premium:</strong> $4.99 per week, with a 7-day free
          trial for eligible new subscribers.
        </li>
        <li>
          <strong>Annual Premium:</strong> $39.99 per year, with a 7-day free
          trial for eligible new subscribers.
        </li>
        <li>
          <strong>Free Tier:</strong> Limited access to core features at no
          cost. Feature availability in the free tier may change at any time.
        </li>
      </ul>

      <h3>Free Trial</h3>
      <p>
        Eligible new subscribers may receive a 7-day free trial. Free trial
        eligibility is determined solely by Apple and is limited to one trial
        per Apple ID. If you do not cancel your subscription before the free
        trial ends, your Apple ID account will be automatically charged the
        full subscription price for the plan you selected. Any unused portion
        of a free trial period will be forfeited when you purchase a
        subscription.
      </p>

      <h3>Payment Processing</h3>
      <p>
        All payments are processed exclusively by Apple through the App Store.
        Manifesta does not directly collect, store, or process any payment
        information. Subscription prices are stated in U.S. dollars and may
        vary by region based on Apple&apos;s currency conversion. Prices are
        subject to change; any price changes will take effect at the start of
        your next billing period following notice.
      </p>

      <h3>Cancellation</h3>
      <p>
        You may cancel your subscription at any time through your Apple ID
        Account Settings (Settings &rarr; Apple ID &rarr; Subscriptions on your
        device). Cancellation takes effect at the end of the current billing
        period. You will retain access to premium features until the end of the
        period you have already paid for. No partial refunds are provided for
        unused time within a billing period.
      </p>

      <h3>Refunds</h3>
      <p>
        Because all payments are processed by Apple, refund requests must be
        submitted directly through Apple&apos;s support at{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          reportaproblem.apple.com
        </a>
        . Manifesta does not have the ability to issue refunds for App Store
        purchases. Refund eligibility and decisions are determined solely by
        Apple in accordance with their policies.
      </p>

      {/* ─────────────────────────────────────────────── 5. EULA ── */}
      <h2 id="eula">5. End User License Agreement (EULA)</h2>

      <Callout type="warning">
        <strong>Important:</strong> This section constitutes the End User
        License Agreement (&ldquo;EULA&rdquo;) between you and Manifesta. This
        EULA governs your use of the App and supplements, but does not replace,
        the{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Licensed Application End User License Agreement
        </a>{" "}
        and the{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Media Services Terms and Conditions
        </a>
        . In the event of a conflict between this EULA and Apple&apos;s
        standard EULA, the terms of this EULA shall apply to the extent
        permitted.
      </Callout>

      <h3>License Grant</h3>
      <p>
        Subject to your compliance with these Terms, Manifesta grants you a
        limited, non-exclusive, non-transferable, non-sublicensable, revocable
        license to download, install, and use the App on Apple-branded devices
        that you own or control, solely for your personal, non-commercial use.
        This license does not allow you to use the App on any device you do not
        own or control, and you may not distribute or make the App available
        over a network where it could be used by multiple devices at the same
        time.
      </p>

      <h3>License Restrictions</h3>
      <p>You agree that you will not:</p>
      <ul>
        <li>
          Copy, reproduce, modify, adapt, translate, or create derivative works
          of the App or any of its content.
        </li>
        <li>
          Reverse engineer, decompile, disassemble, or attempt to derive the
          source code of the App, except to the extent expressly permitted by
          applicable law notwithstanding this limitation.
        </li>
        <li>
          Remove, alter, obscure, or tamper with any proprietary notices,
          labels, watermarks, or marks on the App.
        </li>
        <li>
          Sell, resell, rent, lease, lend, sublicense, distribute, or otherwise
          transfer the App or rights to use the App to any third party.
        </li>
        <li>
          Use the App for any revenue-generating, commercial, or business
          purpose beyond personal meditation and wellness practice.
        </li>
        <li>
          Circumvent, disable, or interfere with any security, digital rights
          management, or access control features of the App.
        </li>
      </ul>

      <h3>Maintenance and Support</h3>
      <p>
        Manifesta is solely responsible for providing maintenance and support
        for the App, to the extent required by applicable law. Apple has no
        obligation to provide any maintenance or support services with respect
        to the App.
      </p>

      <h3>Third-Party Services</h3>
      <p>
        The App integrates with third-party services, including but not limited
        to Firebase (Google), OpenAI, ElevenLabs, and RevenueCat. Your use of
        the App may be subject to the terms, conditions, and privacy policies
        of these third-party services. Manifesta is not responsible for the
        practices of any third-party service provider.
      </p>

      {/* ──────────────────────────────────────── 6. USER CONTENT ── */}
      <h2 id="user-content">6. User Content</h2>
      <h3>Ownership</h3>
      <p>
        You retain full ownership of all content you create, submit, or input
        into the App, including but not limited to your intentions, reflections,
        journal entries, mood data, and any other personal content
        (&ldquo;User Content&rdquo;). Manifesta claims no ownership rights over
        your User Content.
      </p>

      <h3>Limited License to Process</h3>
      <p>
        By using the App, you grant Manifesta a limited, non-exclusive,
        worldwide, royalty-free license to process, transmit, and temporarily
        store your User Content solely for the purpose of providing the Service
        to you. This includes sending your intentions to AI services to
        generate personalized meditations. This license terminates when you
        delete your account or the relevant content.
      </p>

      <h3>No Sale or Sharing</h3>
      <p>
        We do not sell, share, rent, or use your User Content for advertising,
        marketing, training AI models, or any purpose other than delivering the
        App&apos;s core functionality to you. For full details on how we handle
        your data, please review our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h3>Your Responsibility</h3>
      <p>
        You are solely responsible for the content of your intentions and other
        User Content. You represent that your User Content does not violate any
        applicable law, infringe on the rights of any third party, or contain
        material that is harmful, threatening, abusive, harassing, defamatory,
        or otherwise objectionable.
      </p>

      {/* ────────────────────────────────── 7. AI-GENERATED CONTENT ── */}
      <h2 id="ai-content">7. AI-Generated Content</h2>

      <Callout type="warning">
        <strong>AI Content Notice:</strong> All meditation scripts and audio in
        the App are generated by artificial intelligence. AI-generated content
        is inherently imperfect and may contain errors, inconsistencies, or
        contextually inappropriate material. You use AI-generated content
        entirely at your own risk.
      </Callout>

      <h3>Nature of AI Content</h3>
      <p>
        Meditation scripts are generated by OpenAI&apos;s large language models
        and narrated by ElevenLabs&apos; synthetic voice technology. You
        acknowledge and agree that:
      </p>
      <ul>
        <li>
          AI-generated content is produced algorithmically and may be
          unpredictable. Results may vary in quality, accuracy, tone, and
          relevance.
        </li>
        <li>
          AI may produce content that is imperfect, unexpected, repetitive,
          incomplete, or contextually inappropriate relative to your stated
          intention.
        </li>
        <li>
          All voices in the App are synthetic, computer-generated voices. They
          are not recordings of real human meditation practitioners, therapists,
          counselors, or healthcare providers.
        </li>
        <li>
          Manifesta does not manually review every meditation before delivery.
          While we implement safety filters and content moderation, no
          automated system is foolproof.
        </li>
        <li>
          The same intention may produce different meditations each time due to
          the probabilistic nature of AI.
        </li>
      </ul>

      <h3>No Endorsement</h3>
      <p>
        Manifesta does not endorse, verify, or guarantee the accuracy,
        completeness, or suitability of any AI-generated content. The
        inclusion of any statement, suggestion, or guidance in a generated
        meditation does not constitute professional advice of any kind.
      </p>

      {/* ────────────────────────────── 8. HEALTH & WELLNESS DISCLAIMER ── */}
      <h2 id="health-disclaimer">8. Health &amp; Wellness Disclaimer</h2>

      <Callout type="warning">
        <strong>Not Medical Advice:</strong> Manifesta is a wellness tool, not
        a medical device, therapeutic service, or healthcare product. The App
        and its content are NOT intended to diagnose, treat, cure, or prevent
        any disease, disorder, or medical or psychological condition.
      </Callout>

      <p>You expressly acknowledge and agree that:</p>
      <ul>
        <li>
          AI-generated meditations are <strong>not a substitute</strong> for
          professional medical advice, diagnosis, treatment, psychotherapy,
          counseling, or any other form of professional healthcare.
        </li>
        <li>
          The App does not provide medical, psychological, psychiatric, or
          therapeutic advice of any kind, and no provider-patient relationship
          is created by your use of the Service.
        </li>
        <li>
          You should never disregard professional medical or mental health
          advice, delay seeking it, or discontinue any treatment because of
          content provided through the App.
        </li>
        <li>
          If you are experiencing a mental health crisis, suicidal thoughts, or
          emotional distress, you should immediately contact a qualified mental
          health professional, call emergency services (911), or contact the{" "}
          <strong>988 Suicide &amp; Crisis Lifeline</strong> (call or text 988
          in the United States).
        </li>
        <li>
          You should consult your physician or mental health professional before
          beginning any meditation or wellness practice, especially if you have
          a history of trauma, PTSD, psychosis, dissociative disorders, or any
          condition that may be affected by meditation.
        </li>
        <li>
          Meditation practices, including those facilitated by the App, may
          occasionally induce uncomfortable emotions, feelings, or physical
          sensations. Manifesta bears no responsibility for any such
          experiences.
        </li>
      </ul>

      {/* ──────────────────────────────────── 9. PROHIBITED USES ── */}
      <h2 id="prohibited">9. Prohibited Uses</h2>
      <p>
        You agree not to use the Service for any unlawful or prohibited purpose.
        Without limitation, you agree not to:
      </p>
      <ul>
        <li>
          Use the App to generate content that is harmful, abusive, threatening,
          harassing, defamatory, obscene, hateful, discriminatory, or otherwise
          objectionable.
        </li>
        <li>
          Input intentions designed to manipulate the AI into producing harmful,
          dangerous, sexually explicit, violent, or illegal content.
        </li>
        <li>
          Attempt to bypass, circumvent, or manipulate subscription
          requirements, paywalls, free trial limitations, or any other access
          controls.
        </li>
        <li>
          Reverse engineer, decompile, disassemble, or probe the AI models,
          APIs, or backend infrastructure used by the App.
        </li>
        <li>
          Use automated means to access the Service, including bots, scrapers,
          crawlers, or any other automated tools.
        </li>
        <li>
          Share your account credentials with others, or allow multiple people
          to use a single account.
        </li>
        <li>
          Interfere with, disrupt, or place an unreasonable burden on the
          App&apos;s servers, networks, or infrastructure.
        </li>
        <li>
          Impersonate any person or entity, or falsely claim an affiliation
          with any person or entity.
        </li>
        <li>
          Use the App in any manner that could damage, disable, overburden, or
          impair the Service.
        </li>
        <li>
          Redistribute, republish, broadcast, or publicly perform AI-generated
          meditations for commercial purposes.
        </li>
        <li>
          Violate any applicable local, state, national, or international law
          or regulation.
        </li>
      </ul>
      <p>
        We reserve the right to investigate and take appropriate action against
        anyone who violates these provisions, including removing content,
        suspending or terminating accounts, and reporting to law enforcement.
      </p>

      {/* ────────────────────────────────── 10. INTELLECTUAL PROPERTY ── */}
      <h2 id="ip">10. Intellectual Property</h2>
      <h3>Our Property</h3>
      <p>
        The App, including its design, architecture, source code, visual
        elements, branding, logos, trademarks, trade names (&ldquo;Manifesta&rdquo;
        and related marks), user interface, documentation, and all other
        proprietary materials, are owned by Manifesta and are protected by
        copyright, trademark, trade secret, and other intellectual property
        laws. Nothing in these Terms grants you any right, title, or interest
        in our intellectual property except for the limited license expressly
        granted in Section 5.
      </p>

      <h3>AI-Generated Meditation Content</h3>
      <p>
        AI-generated meditation scripts and audio are provided to you for
        personal, non-commercial use only. You may not reproduce, distribute,
        publicly display, publicly perform, sell, license, or create derivative
        works from any AI-generated content delivered through the App without
        our prior written consent. Manifesta retains all rights in the
        processes, prompts, and systems used to generate such content.
      </p>

      <h3>Feedback</h3>
      <p>
        If you provide feedback, suggestions, or ideas about the Service
        (&ldquo;Feedback&rdquo;), you grant Manifesta a perpetual, irrevocable,
        worldwide, royalty-free license to use, modify, and incorporate such
        Feedback without any obligation to you.
      </p>

      {/* ──────────────────────────── 11. DISCLAIMERS & NO WARRANTIES ── */}
      <h2 id="disclaimers">11. Disclaimers &amp; No Warranties</h2>

      <Callout type="warning">
        <strong>As-Is Disclaimer:</strong> The Service is provided on an
        &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. Manifesta
        expressly disclaims all warranties of any kind, whether express,
        implied, statutory, or otherwise, including but not limited to implied
        warranties of merchantability, fitness for a particular purpose, title,
        and non-infringement.
      </Callout>

      <p>Without limiting the foregoing, Manifesta does not warrant that:</p>
      <ul>
        <li>
          The Service will be uninterrupted, timely, secure, error-free, or
          free from viruses or other harmful components.
        </li>
        <li>
          AI-generated content will be accurate, reliable, complete, or meet
          your specific expectations or requirements.
        </li>
        <li>
          Results obtained from using the Service will be accurate, reliable,
          or satisfactory.
        </li>
        <li>
          Any defects in the Service will be corrected.
        </li>
        <li>
          The Service will be compatible with any particular device, operating
          system version, or third-party software.
        </li>
      </ul>
      <p>
        The App may experience downtime for maintenance, updates, or due to
        circumstances beyond our control. We do not guarantee continuous,
        uninterrupted access to any part of the Service. Any reliance on the
        Service or its content is at your sole risk.
      </p>

      {/* ────────────────────────────── 12. LIMITATION OF LIABILITY ── */}
      <h2 id="limitation">12. Limitation of Liability</h2>
      <p>
        <strong>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
          MANIFESTA, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES,
          SUCCESSORS, OR ASSIGNS BE LIABLE FOR ANY OF THE FOLLOWING ARISING OUT
          OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SERVICE:
        </strong>
      </p>
      <ul>
        <li>
          Any indirect, incidental, special, consequential, exemplary, or
          punitive damages, regardless of the theory of liability.
        </li>
        <li>
          Any loss of profits, revenue, data, goodwill, or other intangible
          losses.
        </li>
        <li>
          Any damages arising from personal injury or emotional distress
          related to meditation content.
        </li>
        <li>
          Any damages resulting from unauthorized access to or alteration of
          your data or transmissions.
        </li>
        <li>
          Any damages resulting from the conduct of any third party on the
          Service, including third-party AI service providers.
        </li>
        <li>
          Any damages arising from any content generated by AI, whether or not
          based on your inputs.
        </li>
      </ul>
      <p>
        <strong>
          IN NO EVENT SHALL MANIFESTA&apos;S TOTAL AGGREGATE LIABILITY TO YOU
          FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE
          SERVICE EXCEED THE TOTAL AMOUNT YOU HAVE ACTUALLY PAID TO MANIFESTA
          (THROUGH APPLE) IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE
          EVENT GIVING RISE TO THE CLAIM, OR FIFTY U.S. DOLLARS ($50.00),
          WHICHEVER IS GREATER.
        </strong>
      </p>
      <p>
        These limitations apply even if Manifesta has been advised of the
        possibility of such damages. Some jurisdictions do not allow the
        exclusion or limitation of certain damages, so some of the above
        limitations may not apply to you. In such cases, our liability will be
        limited to the greatest extent permitted by applicable law.
      </p>

      {/* ──────────────────────────────────── 13. INDEMNIFICATION ── */}
      <h2 id="indemnification">13. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless Manifesta, its
        officers, directors, employees, agents, affiliates, successors, and
        assigns from and against any and all claims, liabilities, damages,
        losses, costs, and expenses (including reasonable attorneys&apos; fees
        and court costs) arising out of or related to:
      </p>
      <ul>
        <li>Your use of or access to the Service.</li>
        <li>Your User Content or any intentions you submit to the App.</li>
        <li>Your violation of these Terms.</li>
        <li>Your violation of any applicable law or regulation.</li>
        <li>
          Your violation of any third party&apos;s rights, including
          intellectual property, privacy, or publicity rights.
        </li>
        <li>
          Any claim that your use of the Service caused damage to a third
          party.
        </li>
      </ul>
      <p>
        Manifesta reserves the right, at its own expense, to assume the
        exclusive defense and control of any matter subject to indemnification
        by you, in which event you will cooperate with Manifesta in asserting
        any available defenses.
      </p>

      {/* ───────────────────────────────────────── 14. TERMINATION ── */}
      <h2 id="termination">14. Termination</h2>
      <h3>Termination by Manifesta</h3>
      <p>
        We may suspend or terminate your access to the Service at any time,
        with or without cause, and with or without prior notice, for conduct
        that we determine, in our sole discretion, violates these Terms, is
        harmful to other users, us, or third parties, or for any other reason.
        Upon termination, your license to use the App is immediately revoked.
      </p>

      <h3>Termination by You</h3>
      <p>
        You may terminate your account at any time by deleting it through the
        App settings or our{" "}
        <Link href="/delete-account">account deletion page</Link>. Deleting
        your account does not automatically cancel an active subscription. You
        must separately cancel your subscription through your Apple ID Account
        Settings to stop future charges.
      </p>

      <h3>Effect of Termination</h3>
      <p>
        Upon termination, your right to use the Service immediately ceases. We
        may delete your account data, User Content, and generated meditations.
        The following sections survive termination: AI-Generated Content
        (Section 7), Health &amp; Wellness Disclaimer (Section 8),
        Intellectual Property (Section 10), Disclaimers (Section 11),
        Limitation of Liability (Section 12), Indemnification (Section 13),
        Dispute Resolution (Section 15), and General Provisions (Section 17).
      </p>

      {/* ─────────────────────────────────── 15. DISPUTE RESOLUTION ── */}
      <h2 id="dispute-resolution">15. Dispute Resolution</h2>

      <Callout type="important">
        <strong>Arbitration Agreement &amp; Class Action Waiver:</strong> Please
        read this section carefully. It affects your legal rights, including
        your right to file a lawsuit in court and to have a jury trial.
      </Callout>

      <h3>Binding Arbitration</h3>
      <p>
        Any dispute, claim, or controversy arising out of or relating to these
        Terms or the Service (&ldquo;Dispute&rdquo;) shall be resolved by
        binding individual arbitration administered by the American Arbitration
        Association (&ldquo;AAA&rdquo;) under its Consumer Arbitration Rules
        then in effect. The arbitration shall be conducted by a single
        arbitrator. The arbitrator&apos;s decision shall be final and binding
        and may be entered as a judgment in any court of competent
        jurisdiction.
      </p>

      <h3>Class Action Waiver</h3>
      <p>
        <strong>
          YOU AND MANIFESTA EACH AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS
          WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS,
          CONSOLIDATED, OR REPRESENTATIVE ACTION.
        </strong>{" "}
        You waive any right to participate in a class action lawsuit or
        class-wide arbitration against Manifesta. If this class action waiver
        is found to be unenforceable, then the entirety of this arbitration
        provision shall be null and void.
      </p>

      <h3>Exceptions</h3>
      <p>
        Notwithstanding the above, either party may seek injunctive or other
        equitable relief in any court of competent jurisdiction to prevent the
        actual or threatened infringement or misappropriation of intellectual
        property rights. Additionally, claims within the jurisdiction of a
        small claims court may be brought in such court.
      </p>

      <h3>Opt-Out</h3>
      <p>
        You may opt out of this arbitration agreement by sending written notice
        to{" "}
        <a href="mailto:support@manifesta.ai">support@manifesta.ai</a>{" "}
        within 30 days of first accepting these Terms. Your notice must include
        your name, account email, and a clear statement that you wish to opt
        out of the arbitration provision. If you opt out, disputes will be
        resolved in the courts specified in Section 17.
      </p>

      {/* ──────────────────────────────────── 16. FORCE MAJEURE ── */}
      <h2 id="force-majeure">16. Force Majeure</h2>
      <p>
        Manifesta shall not be liable for any failure or delay in performing
        its obligations under these Terms where such failure or delay results
        from circumstances beyond our reasonable control, including but not
        limited to: natural disasters, acts of God, pandemic or epidemic,
        government actions or orders, war, terrorism, civil unrest, labor
        disputes, power or internet outages, failures of third-party service
        providers (including AI providers, cloud hosting, or payment
        processors), cyberattacks, or any other force majeure event.
      </p>

      {/* ─────────────────────────────────── 17. GENERAL PROVISIONS ── */}
      <h2 id="general">17. General Provisions</h2>

      <h3>Governing Law</h3>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of the United States and the State of Delaware, without regard to
        its conflict of law provisions. Any legal action or proceeding not
        subject to arbitration shall be brought exclusively in the federal or
        state courts located in Delaware.
      </p>

      <h3>Entire Agreement</h3>
      <p>
        These Terms, together with our{" "}
        <Link href="/privacy">Privacy Policy</Link> and any supplemental terms
        or policies referenced herein, constitute the entire agreement between
        you and Manifesta regarding the Service and supersede all prior
        agreements, understandings, and communications, whether written or
        oral.
      </p>

      <h3>Severability</h3>
      <p>
        If any provision of these Terms is found to be invalid, illegal, or
        unenforceable by a court of competent jurisdiction, the remaining
        provisions shall remain in full force and effect. The invalid provision
        shall be modified to the minimum extent necessary to make it valid and
        enforceable while preserving its original intent.
      </p>

      <h3>Waiver</h3>
      <p>
        The failure of Manifesta to enforce any right or provision of these
        Terms shall not constitute a waiver of such right or provision. A
        waiver of any term shall only be effective if in writing and signed by
        Manifesta.
      </p>

      <h3>Assignment</h3>
      <p>
        You may not assign or transfer your rights or obligations under these
        Terms without our prior written consent. Manifesta may freely assign
        these Terms and its rights and obligations hereunder, in whole or in
        part, to any third party without your consent in connection with a
        merger, acquisition, corporate reorganization, or sale of all or
        substantially all of our assets.
      </p>

      <h3>No Third-Party Beneficiaries</h3>
      <p>
        Except as expressly set forth in Section 18 regarding Apple, these
        Terms do not create any third-party beneficiary rights in any
        individual or entity that is not a party to these Terms.
      </p>

      <h3>Headings</h3>
      <p>
        The section headings used in these Terms are for convenience only and
        have no legal or contractual significance.
      </p>

      {/* ───────────────────────────── 18. APPLE-SPECIFIC TERMS ── */}
      <h2 id="apple">18. Apple-Specific Terms</h2>
      <p>
        The following additional terms apply to your use of the App as
        downloaded from the Apple App Store:
      </p>

      <h3>Acknowledgment</h3>
      <p>
        You acknowledge that these Terms are between you and Manifesta only,
        and not with Apple Inc. (&ldquo;Apple&rdquo;). Manifesta, not Apple, is
        solely responsible for the App and its content.
      </p>

      <h3>Scope of License</h3>
      <p>
        The license granted to you for the App is limited to a non-transferable
        license to use the App on any Apple-branded device that you own or
        control, as permitted by the Usage Rules set forth in the Apple Media
        Services Terms and Conditions.
      </p>

      <h3>Maintenance and Support</h3>
      <p>
        Manifesta is solely responsible for providing any maintenance and
        support services for the App, as specified in these Terms or as
        required under applicable law. Apple has no obligation to furnish any
        maintenance or support services with respect to the App.
      </p>

      <h3>Warranty</h3>
      <p>
        Manifesta is solely responsible for any product warranties, whether
        express or implied by law, to the extent not effectively disclaimed. In
        the event of any failure of the App to conform to any applicable
        warranty, you may notify Apple, and Apple will refund the purchase
        price for the App (if any) to you. To the maximum extent permitted by
        applicable law, Apple has no other warranty obligation whatsoever with
        respect to the App.
      </p>

      <h3>Product Claims</h3>
      <p>
        Manifesta, not Apple, is responsible for addressing any claims by you
        or any third party relating to the App or your possession and use of
        the App, including but not limited to: (a) product liability claims;
        (b) any claim that the App fails to conform to any applicable legal or
        regulatory requirement; and (c) claims arising under consumer
        protection, privacy, or similar legislation.
      </p>

      <h3>Intellectual Property Claims</h3>
      <p>
        In the event of any third-party claim that the App or your possession
        and use of the App infringes that third party&apos;s intellectual
        property rights, Manifesta, not Apple, shall be solely responsible for
        the investigation, defense, settlement, and discharge of any such
        claim.
      </p>

      <h3>Third-Party Beneficiary</h3>
      <p>
        You acknowledge and agree that Apple, and Apple&apos;s subsidiaries,
        are third-party beneficiaries of these Terms. Upon your acceptance of
        these Terms, Apple will have the right (and will be deemed to have
        accepted the right) to enforce these Terms against you as a
        third-party beneficiary thereof.
      </p>

      <h3>Legal Compliance</h3>
      <p>
        You represent and warrant that (a) you are not located in a country
        that is subject to a U.S. Government embargo, or that has been
        designated by the U.S. Government as a &ldquo;terrorist
        supporting&rdquo; country; and (b) you are not listed on any U.S.
        Government list of prohibited or restricted parties.
      </p>

      {/* ────────────────────────────────────────── 19. CONTACT ── */}
      <h2 id="contact">19. Contact Us</h2>
      <p>
        If you have any questions, concerns, or feedback about these Terms,
        please contact us:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:support@manifesta.ai">support@manifesta.ai</a>
        </li>
        <li>
          Website: <Link href="/support">manifesta.ai/support</Link>
        </li>
      </ul>
      <p>
        For subscription management and billing inquiries, please contact Apple
        directly through your device&apos;s Settings or at{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          reportaproblem.apple.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}

import { TermsSection } from "./terms-section"
import { TermsList } from "./terms-list"
import { TermsHighlight } from "./terms-highlight"

export const termsData = [
  {
    id: "acceptance",
    number: "1",
    title: "Acceptance of Terms",
  },
  {
    id: "description",
    number: "2",
    title: "Service Description",
  },
  {
    id: "accounts",
    number: "3",
    title: "User Accounts",
  },
  {
    id: "acceptable-use",
    number: "4",
    title: "Acceptable Use Policy",
  },
  {
    id: "intellectual-property",
    number: "5",
    title: "Intellectual Property Rights",
  },
  {
    id: "privacy",
    number: "6",
    title: "Privacy & Data Protection",
  },
  {
    id: "payment",
    number: "7",
    title: "Payment Terms",
  },
  {
    id: "termination",
    number: "8",
    title: "Termination",
  },
  {
    id: "disclaimers",
    number: "9",
    title: "Disclaimers",
  },
  {
    id: "limitation",
    number: "10",
    title: "Limitation of Liability",
  },
  {
    id: "changes",
    number: "11",
    title: "Changes to Terms",
  },
  {
    id: "governing-law",
    number: "12",
    title: "Governing Law",
  },
]

export const AcceptanceSection = () => (
  <TermsSection id="acceptance" number="1" title="Acceptance of Terms">
    <p>
      By accessing or using ChatSecure (&quot;the Service&quot;), you agree to be bound by these 
      Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access 
      or use the Service.
    </p>
    <p>
      These Terms apply to all visitors, users, and others who access or use the Service. 
      By using the Service, you represent that you are at least 18 years of age, or if you 
      are under 18, that you have obtained parental or guardian consent to use the Service.
    </p>
    <TermsHighlight type="info">
      By clicking &quot;I Agree&quot; or by using the Service, you acknowledge that you have read, 
      understood, and agree to be bound by these Terms.
    </TermsHighlight>
  </TermsSection>
)

export const DescriptionSection = () => (
  <TermsSection id="description" number="2" title="Service Description">
    <p>
      ChatSecure is an AI-powered chat platform that provides intelligent, secure 
      conversational experiences. Our Service includes:
    </p>
    <TermsList 
      items={[
        "AI-powered chat functionality with advanced language models",
        "Secure, encrypted communication channels",
        "Chat history management and export capabilities",
        "API access for developers (subject to separate API terms)",
        "Team collaboration features for enterprise users",
        "Custom integrations and enterprise solutions",
      ]}
    />
    <p>
      We reserve the right to modify, suspend, or discontinue any aspect of the Service 
      at any time without prior notice.
    </p>
  </TermsSection>
)

export const AccountsSection = () => (
  <TermsSection id="accounts" number="3" title="User Accounts">
    <p>
      To access certain features of the Service, you must create an account. When creating 
      an account, you agree to:
    </p>
    <TermsList 
      items={[
        "Provide accurate, current, and complete information",
        "Maintain and promptly update your account information",
        "Keep your password secure and confidential",
        "Accept responsibility for all activities under your account",
        "Notify us immediately of any unauthorized access",
      ]}
    />
    <TermsHighlight type="warning">
      You are responsible for safeguarding your account credentials. ChatSecure will never 
      ask for your password via email or support channels.
    </TermsHighlight>
  </TermsSection>
)

export const AcceptableUseSection = () => (
  <TermsSection id="acceptable-use" number="4" title="Acceptable Use Policy">
    <p>
      You agree not to use the Service to:
    </p>
    <TermsList 
      items={[
        "Violate any applicable laws or regulations",
        "Infringe upon the rights of others, including intellectual property rights",
        "Transmit harmful, offensive, or illegal content",
        "Attempt to gain unauthorized access to our systems",
        "Interfere with or disrupt the Service or servers",
        "Use the Service for any fraudulent or deceptive purposes",
        "Generate content that promotes violence, discrimination, or illegal activities",
        "Attempt to reverse engineer or extract source code from the Service",
        "Use automated systems to access the Service without permission",
        "Resell or redistribute the Service without authorization",
      ]}
    />
  </TermsSection>
)

export const IntellectualPropertySection = () => (
  <TermsSection id="intellectual-property" number="5" title="Intellectual Property Rights">
    <p>
      The Service and its original content, features, and functionality are owned by 
      ChatSecure and are protected by international copyright, trademark, patent, trade 
      secret, and other intellectual property laws.
    </p>
    <p>
      <strong>Your Content:</strong> You retain ownership of any content you submit, post, 
      or display through the Service. By submitting content, you grant ChatSecure a 
      worldwide, non-exclusive, royalty-free license to use, reproduce, and display such 
      content solely for the purpose of providing the Service.
    </p>
    <p>
      <strong>AI-Generated Content:</strong> Content generated by our AI in response to 
      your inputs may be used by you for any lawful purpose, subject to these Terms. 
      However, similar outputs may be generated for other users.
    </p>
  </TermsSection>
)

export const PrivacySection = () => (
  <TermsSection id="privacy" number="6" title="Privacy & Data Protection">
    <p>
      Your privacy is important to us. Our collection and use of personal information is 
      governed by our Privacy Policy, which is incorporated into these Terms by reference.
    </p>
    <TermsList 
      items={[
        "We use 256-bit encryption for all data transmission",
        "Your conversations are not used to train our AI models",
        "You can request deletion of your data at any time",
        "We comply with GDPR, CCPA, and other applicable privacy laws",
        "We do not sell your personal information to third parties",
      ]}
    />
    <TermsHighlight type="success">
      ChatSecure is committed to maintaining the highest standards of data protection 
      and security for all users.
    </TermsHighlight>
  </TermsSection>
)

export const PaymentSection = () => (
  <TermsSection id="payment" number="7" title="Payment Terms">
    <p>
      Certain features of the Service require payment. By subscribing to a paid plan, 
      you agree to the following:
    </p>
    <TermsList 
      items={[
        "Subscriptions are billed in advance on a monthly or annual basis",
        "All fees are non-refundable unless otherwise stated",
        "You authorize us to charge your payment method automatically",
        "Prices may change with 30 days notice",
        "Failed payments may result in service suspension",
      ]}
    />
    <p>
      You may cancel your subscription at any time. Cancellation will take effect at the 
      end of your current billing period.
    </p>
  </TermsSection>
)

export const TerminationSection = () => (
  <TermsSection id="termination" number="8" title="Termination">
    <p>
      We may terminate or suspend your account and access to the Service immediately, 
      without prior notice or liability, for any reason, including:
    </p>
    <TermsList 
      items={[
        "Breach of these Terms of Service",
        "Violation of our Acceptable Use Policy",
        "Request by law enforcement or government agencies",
        "Extended periods of inactivity",
        "Unexpected technical or security issues",
      ]}
    />
    <p>
      Upon termination, your right to use the Service will immediately cease. You may 
      request export of your data within 30 days of termination.
    </p>
  </TermsSection>
)

export const DisclaimersSection = () => (
  <TermsSection id="disclaimers" number="9" title="Disclaimers">
    <TermsHighlight type="warning">
      THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES 
      OF ANY KIND, EITHER EXPRESS OR IMPLIED.
    </TermsHighlight>
    <p>
      ChatSecure does not warrant that:
    </p>
    <TermsList 
      items={[
        "The Service will be uninterrupted, secure, or error-free",
        "Results obtained from the Service will be accurate or reliable",
        "The quality of the Service will meet your expectations",
        "AI-generated content will be free from errors or biases",
      ]}
    />
    <p>
      You understand and agree that you use the Service at your own risk. AI-generated 
      content should not be relied upon as professional, legal, medical, or financial advice.
    </p>
  </TermsSection>
)

export const LimitationSection = () => (
  <TermsSection id="limitation" number="10" title="Limitation of Liability">
    <p>
      To the maximum extent permitted by law, ChatSecure and its affiliates, officers, 
      employees, agents, and partners shall not be liable for any indirect, incidental, 
      special, consequential, or punitive damages, including:
    </p>
    <TermsList 
      items={[
        "Loss of profits, data, or goodwill",
        "Service interruption or computer damage",
        "Cost of substitute services",
        "Any damages arising from your use of the Service",
      ]}
    />
    <p>
      Our total liability for any claims arising from your use of the Service shall not 
      exceed the amount you paid us in the twelve (12) months preceding the claim.
    </p>
  </TermsSection>
)

export const ChangesSection = () => (
  <TermsSection id="changes" number="11" title="Changes to Terms">
    <p>
      We reserve the right to modify these Terms at any time. When we make changes, we will:
    </p>
    <TermsList 
      items={[
        "Update the \"Last updated\" date at the top of these Terms",
        "Notify you via email or through the Service for material changes",
        "Provide at least 30 days notice before changes take effect",
      ]}
    />
    <p>
      Your continued use of the Service after changes become effective constitutes your 
      acceptance of the revised Terms.
    </p>
  </TermsSection>
)

export const GoverningLawSection = () => (
  <TermsSection id="governing-law" number="12" title="Governing Law">
    <p>
      These Terms shall be governed by and construed in accordance with the laws of the 
      State of California, United States, without regard to its conflict of law provisions.
    </p>
    <p>
      Any disputes arising from these Terms or your use of the Service shall be resolved 
      through binding arbitration in San Francisco, California, in accordance with the 
      rules of the American Arbitration Association.
    </p>
    <TermsHighlight type="info">
      For users in the European Union, you retain any mandatory consumer protection 
      rights under the laws of your country of residence.
    </TermsHighlight>
  </TermsSection>
)

export const TermsContent = () => {
  return (
    <div className="space-y-12">
      <AcceptanceSection />
      <DescriptionSection />
      <AccountsSection />
      <AcceptableUseSection />
      <IntellectualPropertySection />
      <PrivacySection />
      <PaymentSection />
      <TerminationSection />
      <DisclaimersSection />
      <LimitationSection />
      <ChangesSection />
      <GoverningLawSection />
    </div>
  )
}


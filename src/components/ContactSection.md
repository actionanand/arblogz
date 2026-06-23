## Contact Us

<span data-translate="contact.description">If you have any questions or need assistance, please don't hesitate to reach out to us:</span>

<div class="contact-social-section">
  <div class="social-icons">
    <a href="https://instagram.com/actionanand" class="social-icon instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
      <i class="ri-instagram-fill"></i>
    </a>
    <!-- <a href="https://twitter.com/actionanand" class="social-icon twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
      <i class="ri-twitter-fill"></i>
    </a> -->
    <a href="https://x.com/actionanand" class="social-icon twitterx" title="X (Twitter)" target="_blank" rel="noopener noreferrer">
      <i class="ri-twitter-x-fill"></i>
    </a>
    <a href="https://facebook.com/actionanand" class="social-icon facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
      <i class="ri-facebook-fill"></i>
    </a>
    <!-- <a href="https://wa.me/1234567890" class="social-icon whatsapp" title="WhatsApp" target="_blank" rel="noopener noreferrer">
      <i class="ri-whatsapp-fill"></i>
    </a> -->
    <!-- <a href="https://t.me/yourhandle" class="social-icon telegram" title="Telegram" target="_blank" rel="noopener noreferrer">
      <i class="ri-telegram-fill"></i>
    </a> -->
    <a href="https://www.linkedin.com/in/anand-ns" class="social-icon linkedin" title="LinkedIn" target="_blank" rel="noopener noreferrer">
      <i class="ri-linkedin-fill"></i>
    </a>
    <a href="https://www.youtube.com/@actionanand13" class="social-icon youtube" title="YouTube" target="_blank" rel="noopener noreferrer">
      <i class="ri-youtube-fill"></i>
    </a>
    <!-- <a href="https://weixin.qq.com/yourhandle" class="social-icon wechat" title="WeChat" target="_blank" rel="noopener noreferrer">
      <i class="ri-wechat-fill"></i>
    </a> -->
    <!-- <a href="https://snapchat.com/add/yourhandle" class="social-icon snapchat" title="Snapchat" target="_blank" rel="noopener noreferrer">
      <i class="ri-snapchat-fill"></i>
    </a> -->
    <!-- <a href="https://discord.gg/yourserver" class="social-icon discord" title="Discord" target="_blank" rel="noopener noreferrer">
      <i class="ri-discord-fill"></i>
    </a> -->
    <a href="https://threads.net/@actionanand" class="social-icon threads" title="Threads" target="_blank" rel="noopener noreferrer">
      <i class="ri-threads-fill"></i>
    </a>
    <!-- <a href="https://tiktok.com/@yourhandle" class="social-icon tiktok" title="TikTok" target="_blank" rel="noopener noreferrer">
      <i class="ri-tiktok-fill"></i>
    </a> -->
    <!-- <a href="https://signal.me/#yourhandle" class="social-icon signal" title="Signal" target="_blank" rel="noopener noreferrer">
      <i class="ri-signal-tower-fill"></i>
    </a> -->
    <!-- <a href="mailto:contact@example.com" class="social-icon email" title="Email" rel="noopener noreferrer">
      <i class="ri-mail-fill"></i>
    </a> -->
  </div>
  
  <!-- Contact Us Button -->
  <div class="contact-button-container">
    <button class="contact-us-button" onclick="openContactForm()">
      <i class="ri-customer-service-2-fill"></i>
      <span data-translate="contact.button">Contact Us</span>
    </button>
  </div>
</div>

<!-- Contact Form Popup -->
<div id="contactFormModal" class="contact-modal">
  <div class="contact-modal-content">
    <div class="contact-modal-header">
      <h3 data-translate="contact.form.title">Get in Touch</h3>
      <button class="contact-modal-close" onclick="closeContactForm()">&times;</button>
    </div>
    <div class="contact-modal-body">
      <form id="nativeContactForm" class="native-contact-form" novalidate>
        <div class="contact-form-grid">
          <label class="contact-field">
            <span><span data-translate="contact.form.name">Name</span> <strong aria-hidden="true">*</strong></span>
            <input id="contactName" name="name" type="text" autocomplete="name" placeholder="Your name" data-translate-placeholder="contact.form.namePlaceholder" required />
          </label>
          <label class="contact-field">
            <span><span data-translate="contact.form.email">Email</span> <strong aria-hidden="true">*</strong></span>
            <input id="contactEmail" name="email" type="email" autocomplete="email" placeholder="you@example.com" data-translate-placeholder="contact.form.emailPlaceholder" required />
          </label>
        </div>
        <label class="contact-field">
          <span data-translate="contact.form.phone">Phone number</span>
          <input id="contactPhone" name="phone" type="tel" autocomplete="tel" placeholder="Optional" data-translate-placeholder="contact.form.phonePlaceholder" />
        </label>
        <fieldset class="contact-purpose-field">
          <legend><span data-translate="contact.form.purpose">Please let us know the purpose of your inquiry:</span> <strong aria-hidden="true">*</strong></legend>
          <div class="purpose-options">
            <label><input type="radio" name="purpose" value="Content-related question" required /> <span data-translate="contact.form.optionContent">Content-related question</span></label>
            <label><input type="radio" name="purpose" value="Donation" /> <span data-translate="contact.form.optionDonation">Donation</span></label>
            <label><input type="radio" name="purpose" value="Correction in content" /> <span data-translate="contact.form.optionCorrection">Correction in content</span></label>
            <label><input type="radio" name="purpose" value="Interested in contributing content" /> <span data-translate="contact.form.optionContributing">Interested in contributing content</span></label>
            <label><input type="radio" name="purpose" value="Collaboration opportunity" /> <span data-translate="contact.form.optionCollaboration">Collaboration opportunity</span></label>
            <label><input type="radio" name="purpose" value="Privacy policy inquiry" /> <span data-translate="contact.form.optionPrivacy">Privacy policy inquiry</span></label>
            <label><input type="radio" name="purpose" value="Suggestion or feedback" /> <span data-translate="contact.form.optionSuggestion">Suggestion or feedback</span></label>
            <label><input type="radio" name="purpose" value="General contact" /> <span data-translate="contact.form.optionGeneral">General contact</span></label>
          </div>
        </fieldset>
        <label class="contact-field">
          <span><span data-translate="contact.form.message">Message</span> <strong aria-hidden="true">*</strong></span>
          <textarea id="contactMessage" name="message" rows="5" placeholder="Please message me back" data-translate-placeholder="contact.form.messagePlaceholder" required></textarea>
        </label>
        <div class="contact-form-actions">
          <button type="button" class="contact-cancel-button" onclick="closeContactForm()" data-translate="contact.form.cancel">Cancel</button>
          <button type="submit" class="contact-submit-button">
            <i class="ri-send-plane-fill" aria-hidden="true"></i>
            <span data-translate="contact.form.send">Send Message</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<div id="contactSnackbar" class="contact-snackbar" role="status" aria-live="polite"></div>

<style>
  .contact-social-section {
    margin: 2rem 0;
    text-align: center;
    padding: 1.5rem;
    background: var(--bg-secondary, #f8fafc);
    border-radius: 8px;
    border-left: 4px solid var(--tw-prose-links);
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }
  
  .social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .social-icon i {
    font-size: 1.25rem;
  }
  
  .social-icon:hover {
    text-decoration: none;
  }
  
  .social-icon.instagram {
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    color: white;
  }
  
  .social-icon.instagram:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(188, 24, 136, 0.4);
    text-decoration: none;
  }

  .social-icon.twitter {
    background-color: #1DA1F2;
    color: white;
  }
  
  .social-icon.twitter:hover {
    background-color: #0d8bd9;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(29, 161, 242, 0.4);
    text-decoration: none;
  }
  
  .social-icon.twitterx {
    background-color: #000000;
    color: white;
  }
  
  .social-icon.twitterx:hover {
    background-color: #333333;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    text-decoration: none;
  }
  
  .social-icon.facebook {
    background-color: #4267B2;
    color: white;
  }
  
  .social-icon.facebook:hover {
    background-color: #365899;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(66, 103, 178, 0.4);
    text-decoration: none;
  }
  
  .social-icon.whatsapp {
    background-color: #25D366;
    color: white;
  }
  
  .social-icon.whatsapp:hover {
    background-color: #1aab4f;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    text-decoration: none;
  }
  
  .social-icon.telegram {
    background-color: #0088cc;
    color: white;
  }
  
  .social-icon.telegram:hover {
    background-color: #006ba1;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 136, 204, 0.4);
    text-decoration: none;
  }
  
  .social-icon.linkedin {
    background-color: #0077b5;
    color: white;
  }
  
  .social-icon.linkedin:hover {
    background-color: #005885;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 119, 181, 0.4);
    text-decoration: none;
  }
  
  .social-icon.youtube {
    background-color: #FF0000;
    color: white;
  }
  
  .social-icon.youtube:hover {
    background-color: #cc0000;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(255, 0, 0, 0.4);
    text-decoration: none;
  }
  
  .social-icon.wechat {
    background-color: #07C160;
    color: white;
  }
  
  .social-icon.wechat:hover {
    background-color: #059748;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(7, 193, 96, 0.4);
    text-decoration: none;
  }
  
  .social-icon.snapchat {
    background-color: #FFFC00;
    color: black;
  }
  
  .social-icon.snapchat:hover {
    background-color: #e6e300;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(255, 252, 0, 0.4);
    text-decoration: none;
  }
  
  .social-icon.discord {
    background-color: #5865F2;
    color: white;
  }
  
  .social-icon.discord:hover {
    background-color: #4752c4;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(88, 101, 242, 0.4);
    text-decoration: none;
  }
  
  .social-icon.threads {
    background-color: #000000;
    color: white;
  }
  
  .social-icon.threads:hover {
    background-color: #333333;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    text-decoration: none;
  }
  
  .social-icon.tiktok {
    background-color: #000000;
    color: white;
  }
  
  .social-icon.tiktok:hover {
    background-color: #333333;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    text-decoration: none;
  }
  
  .social-icon.signal {
    background-color: #3A76F0;
    color: white;
  }
  
  .social-icon.signal:hover {
    background-color: #2563eb;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(58, 118, 240, 0.4);
    text-decoration: none;
  }
  
  /* Contact Button Styles */
  .contact-button-container {
    margin-top: 2rem;
    text-align: center;
  }
  
  .contact-us-button {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    animation: pulse-button 2s infinite;
  }
  
  .contact-us-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
    animation: none;
  }
  
  .contact-us-button:active {
    transform: translateY(0);
  }
  
  .contact-us-button i {
    font-size: 1.2rem;
  }
  
  /* Blinking Animation */
  @keyframes pulse-button {
    0%, 100% {
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    }
    50% {
      box-shadow: 0 4px 25px rgba(16, 185, 129, 0.6), 0 0 20px rgba(16, 185, 129, 0.3);
    }
  }
  
  /* Modal Styles */
  .contact-modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    animation: fadeIn 0.3s ease;
  }
  
  .contact-modal-content {
    position: relative;
    background-color: var(--bg-primary, #ffffff);
    margin: 2% auto;
    padding: 0;
    border-radius: 12px;
    width: 90%;
    max-width: 700px;
    max-height: 90vh;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.3s ease;
  }
  
  .contact-modal-header {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .contact-modal-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .contact-modal-close {
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s ease;
    margin: 0;
    padding-bottom: 7px;
  }
  
  .contact-modal-close:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .contact-modal-body {
    padding: 1.5rem;
    overflow-y: auto;
    max-height: calc(90vh - 100px);
  }
  
  .native-contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .contact-form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .contact-field {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    margin: 0;
  }

  .contact-field span,
  .contact-purpose-field legend {
    color: var(--tw-prose-body, #374151);
    font-size: 0.95rem;
    font-weight: 600;
  }

  .contact-field strong,
  .contact-purpose-field strong {
    color: #dc2626;
  }

  .contact-field input,
  .contact-field textarea {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: var(--bg-primary, #ffffff);
    color: var(--tw-prose-body, #374151);
    font: inherit;
    line-height: 1.5;
    padding: 0.85rem 0.95rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .contact-field textarea {
    min-height: 130px;
    resize: vertical;
  }

  .contact-field input:focus,
  .contact-field textarea:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.16);
    outline: none;
  }

  .contact-field input.contact-input-error,
  .contact-field textarea.contact-input-error,
  .contact-purpose-field.contact-input-error {
    border-color: #dc2626;
  }

  .contact-purpose-field {
    border: 1px solid #d1d5db;
    border-radius: 8px;
    margin: 0;
    padding: 1rem;
  }

  .contact-purpose-field legend {
    padding: 0 0.35rem;
  }

  .purpose-options {
    display: grid;
    gap: 0.75rem;
    margin-top: 0.35rem;
  }

  .purpose-options label {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin: 0;
    color: var(--tw-prose-body, #374151);
    font-size: 0.95rem;
    line-height: 1.4;
    cursor: pointer;
  }

  .purpose-options input {
    width: 1.15rem;
    height: 1.15rem;
    accent-color: #10b981;
    flex: 0 0 auto;
  }

  .purpose-options span {
    min-width: 0;
  }

  .contact-form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    padding-top: 0.25rem;
  }

  .contact-cancel-button,
  .contact-submit-button {
    border: none;
    border-radius: 50px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    min-height: 44px;
    padding: 0.75rem 1.25rem;
    transition: background-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
  }

  .contact-cancel-button {
    background: #e5e7eb;
    color: #374151;
  }

  .contact-submit-button {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25);
  }

  .contact-cancel-button:hover,
  .contact-submit-button:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  .contact-submit-button:disabled,
  .contact-cancel-button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
  }

  .contact-snackbar {
    position: fixed;
    left: 50%;
    bottom: 1.5rem;
    z-index: 1100;
    background: #111827;
    color: white;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(17, 24, 39, 0.25);
    font-size: 0.95rem;
    font-weight: 600;
    max-width: min(92vw, 520px);
    opacity: 0;
    padding: 0.9rem 1rem;
    pointer-events: none;
    transform: translate(-50%, 1rem);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .contact-snackbar.show {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  .contact-snackbar.success {
    background: #047857;
  }

  .contact-snackbar.error {
    background: #b91c1c;
  }

  .contact-snackbar.info {
    background: #1f2937;
  }
  
  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .contact-modal-content {
      background-color: var(--bg-primary, #1f2937);
      color: var(--text-primary, #e5e7eb);
    }

    .contact-field span,
    .contact-purpose-field legend,
    .purpose-options label {
      color: var(--text-primary, #e5e7eb);
    }

    .contact-field input,
    .contact-field textarea,
    .contact-purpose-field {
      background: #111827;
      border-color: #374151;
      color: var(--text-primary, #e5e7eb);
    }

    .contact-cancel-button {
      background: #374151;
      color: #e5e7eb;
    }
  }
  
  .social-icon.email {
    background-color: #34495e;
    color: white;
  }
  
  .social-icon.email:hover {
    background-color: #2c3e50;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(52, 73, 94, 0.4);
    text-decoration: none;
  }
  
  @media (max-width: 640px) {
    .social-icons {
      gap: 1rem;
    }
    
    .social-icon {
      width: 2.25rem;
      height: 2.25rem;
    }
    
    .social-icon i {
      font-size: 1rem;
    }
    
    .contact-us-button {
      font-size: 1rem;
      padding: 0.875rem 1.5rem;
    }
    
    .contact-modal-content {
      width: 95%;
      margin: 5% auto;
    }

    .contact-modal-body {
      padding: 1rem;
    }

    .contact-form-grid {
      grid-template-columns: 1fr;
    }

    .contact-form-actions {
      flex-direction: column-reverse;
    }

    .contact-cancel-button,
    .contact-submit-button {
      width: 100%;
    }
  }
</style>

<script>
  const contactGoogleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeGERCF9R3aw9VsTkk6TltyrDXSkIu8Zk4unoZNPjABL53cLA/formResponse';
  const contactEntryIds = {
    name: 'entry.2005620554',
    email: 'entry.1045781291',
    phone: 'entry.1166974658',
    purpose: 'entry.1730206658',
    message: 'entry.839337160',
  };
  const contactEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let contactSnackbarTimer;

  function getContactTranslation(key, fallback) {
    if (typeof window.getCurrentTranslation !== 'function') {
      return fallback;
    }

    const translated = window.getCurrentTranslation(key);
    return translated && translated !== key ? translated : fallback;
  }

  function showContactSnackbar(message, type = 'info', duration = 3500) {
    const snackbar = document.getElementById('contactSnackbar');
    if (!snackbar) return;

    window.clearTimeout(contactSnackbarTimer);
    snackbar.textContent = message;
    snackbar.className = `contact-snackbar ${type} show`;

    if (duration > 0) {
      contactSnackbarTimer = window.setTimeout(() => {
        snackbar.classList.remove('show');
      }, duration);
    }
  }

  function setContactSubmitting(isSubmitting) {
    const form = document.getElementById('nativeContactForm');
    const submitButton = form?.querySelector('.contact-submit-button');
    const cancelButton = form?.querySelector('.contact-cancel-button');
    const submitLabel = submitButton?.querySelector('span');
    const submitIcon = submitButton?.querySelector('i');

    if (submitButton) submitButton.disabled = isSubmitting;
    if (cancelButton) cancelButton.disabled = isSubmitting;
    if (submitLabel) {
      submitLabel.textContent = isSubmitting
        ? getContactTranslation('contact.form.sending', 'Sending...')
        : getContactTranslation('contact.form.send', 'Send Message');
    }
    if (submitIcon) {
      submitIcon.className = isSubmitting ? 'ri-loader-4-line' : 'ri-send-plane-fill';
    }
  }

  function clearContactValidationState(form) {
    form.querySelectorAll('.contact-input-error').forEach((field) => {
      field.classList.remove('contact-input-error');
    });
  }

  function markContactFieldInvalid(field) {
    if (field) {
      field.classList.add('contact-input-error');
    }
  }

  function validateContactForm(form) {
    clearContactValidationState(form);

    const name = form.elements.name;
    const email = form.elements.email;
    const purpose = form.querySelector('input[name="purpose"]:checked');
    const purposeField = form.querySelector('.contact-purpose-field');
    const message = form.elements.message;

    if (!name.value.trim()) {
      markContactFieldInvalid(name);
      name.focus();
      showContactSnackbar(getContactTranslation('contact.form.errorName', 'Please enter your name.'), 'error');
      return false;
    }

    if (!email.value.trim()) {
      markContactFieldInvalid(email);
      email.focus();
      showContactSnackbar(getContactTranslation('contact.form.errorEmailRequired', 'Please enter your email address.'), 'error');
      return false;
    }

    if (!contactEmailRegex.test(email.value.trim())) {
      markContactFieldInvalid(email);
      email.focus();
      showContactSnackbar(getContactTranslation('contact.form.errorEmailInvalid', 'Please enter a valid email address.'), 'error');
      return false;
    }

    if (!purpose) {
      markContactFieldInvalid(purposeField);
      purposeField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showContactSnackbar(getContactTranslation('contact.form.errorPurpose', 'Please choose the purpose of your inquiry.'), 'error');
      return false;
    }

    if (!message.value.trim()) {
      markContactFieldInvalid(message);
      message.focus();
      showContactSnackbar(getContactTranslation('contact.form.errorMessage', 'Please enter your message.'), 'error');
      return false;
    }

    return true;
  }

  function buildContactFormBody(form) {
    const formBody = new URLSearchParams();
    const purpose = form.querySelector('input[name="purpose"]:checked');

    formBody.append(contactEntryIds.name, form.elements.name.value.trim());
    formBody.append(contactEntryIds.email, form.elements.email.value.trim());
    formBody.append(contactEntryIds.phone, form.elements.phone.value.trim());
    formBody.append(contactEntryIds.purpose, purpose ? purpose.value : '');
    formBody.append(contactEntryIds.message, form.elements.message.value.trim());

    return formBody;
  }

  function openContactForm() {
    const modal = document.getElementById('contactFormModal');
    if (!modal) return;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    const firstInput = document.getElementById('contactName');
    window.setTimeout(() => firstInput?.focus(), 100);
  }
  
  function closeContactForm() {
    const modal = document.getElementById('contactFormModal');
    if (!modal) return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  async function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!validateContactForm(form)) return;

    setContactSubmitting(true);
    showContactSnackbar(getContactTranslation('contact.form.submitting', 'Submitting your message...'), 'info', 0);

    try {
      await fetch(contactGoogleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: buildContactFormBody(form),
      });

      form.reset();
      closeContactForm();
      showContactSnackbar(getContactTranslation('contact.form.success', 'Message sent successfully. Thank you for reaching out!'), 'success');
    } catch (error) {
      console.error('Contact form submission failed:', error);
      showContactSnackbar(getContactTranslation('contact.form.failure', 'Unable to send your message. Please try again.'), 'error');
    } finally {
      setContactSubmitting(false);
    }
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('contactFormModal');
    if (event.target === modal) {
      closeContactForm();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const modal = document.getElementById('contactFormModal');
      if (modal && modal.style.display === 'block') {
        closeContactForm();
      }
    }
  });
  
  // Update contact button text when language changes
  function updateContactButtonText() {
    const button = document.querySelector('.contact-us-button span');
    const title = document.querySelector('.contact-modal-header h3');
    
    if (button && window.currentTranslations && window.currentTranslations.contact) {
      if (window.currentTranslations.contact.button) {
        button.textContent = window.currentTranslations.contact.button;
      }
      if (title && window.currentTranslations.contact.form && window.currentTranslations.contact.form.title) {
        title.textContent = window.currentTranslations.contact.form.title;
      }
    }
  }
  
  // Listen for language changes
  document.addEventListener('languageChanged', updateContactButtonText);
  document.addEventListener('DOMContentLoaded', updateContactButtonText);

  const nativeContactForm = document.getElementById('nativeContactForm');
  if (nativeContactForm) {
    nativeContactForm.addEventListener('submit', handleContactSubmit);
    nativeContactForm.addEventListener('input', () => clearContactValidationState(nativeContactForm));
    nativeContactForm.addEventListener('change', () => clearContactValidationState(nativeContactForm));
  }

  window.openContactForm = openContactForm;
  window.closeContactForm = closeContactForm;
</script>

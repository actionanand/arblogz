## Contact Us

<span data-translate="contact.description">If you have any questions or need assistance, please don't hesitate to reach out to us:</span>

<div class="contact-social-section">
  <div class="social-icons">
    <a href="https://instagram.com/yourhandle" class="social-icon instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
      <i class="ri-instagram-fill"></i>
    </a>
    <a href="https://twitter.com/yourhandle" class="social-icon twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
      <i class="ri-twitter-fill"></i>
    </a>
    <a href="https://x.com/yourhandle" class="social-icon twitterx" title="X (Twitter)" target="_blank" rel="noopener noreferrer">
      <i class="ri-twitter-x-fill"></i>
    </a>
    <a href="https://facebook.com/yourpage" class="social-icon facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
      <i class="ri-facebook-fill"></i>
    </a>
    <a href="https://wa.me/1234567890" class="social-icon whatsapp" title="WhatsApp" target="_blank" rel="noopener noreferrer">
      <i class="ri-whatsapp-fill"></i>
    </a>
    <a href="https://t.me/yourhandle" class="social-icon telegram" title="Telegram" target="_blank" rel="noopener noreferrer">
      <i class="ri-telegram-fill"></i>
    </a>
    <a href="https://linkedin.com/in/yourprofile" class="social-icon linkedin" title="LinkedIn" target="_blank" rel="noopener noreferrer">
      <i class="ri-linkedin-fill"></i>
    </a>
    <a href="https://youtube.com/@yourchannel" class="social-icon youtube" title="YouTube" target="_blank" rel="noopener noreferrer">
      <i class="ri-youtube-fill"></i>
    </a>
    <a href="https://weixin.qq.com/yourhandle" class="social-icon wechat" title="WeChat" target="_blank" rel="noopener noreferrer">
      <i class="ri-wechat-fill"></i>
    </a>
    <a href="https://snapchat.com/add/yourhandle" class="social-icon snapchat" title="Snapchat" target="_blank" rel="noopener noreferrer">
      <i class="ri-snapchat-fill"></i>
    </a>
    <a href="https://discord.gg/yourserver" class="social-icon discord" title="Discord" target="_blank" rel="noopener noreferrer">
      <i class="ri-discord-fill"></i>
    </a>
    <a href="https://threads.net/@yourhandle" class="social-icon threads" title="Threads" target="_blank" rel="noopener noreferrer">
      <i class="ri-threads-fill"></i>
    </a>
    <a href="https://tiktok.com/@yourhandle" class="social-icon tiktok" title="TikTok" target="_blank" rel="noopener noreferrer">
      <i class="ri-tiktok-fill"></i>
    </a>
    <a href="https://signal.me/#yourhandle" class="social-icon signal" title="Signal" target="_blank" rel="noopener noreferrer">
      <i class="ri-signal-tower-fill"></i>
    </a>
    <a href="mailto:contact@example.com" class="social-icon email" title="Email" rel="noopener noreferrer">
      <i class="ri-mail-fill"></i>
    </a>
  </div>
  
  <!-- Contact Us Button -->
  <div class="contact-button-container">
    <button class="contact-us-button" onclick="openContactForm()" data-translate="contact.button">
      <i class="ri-customer-service-2-fill"></i>
      <span>Contact Us</span>
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
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeGERCF9R3aw9VsTkk6TltyrDXSkIu8Zk4unoZNPjABL53cLA/viewform?embedded=true" 
              width="100%" 
              height="600" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0">
        <span data-translate="contact.form.loading">Loading…</span>
      </iframe>
    </div>
  </div>
</div>

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
    padding: 0;
    overflow-y: auto;
    max-height: calc(90vh - 100px);
  }
  
  .contact-modal-body iframe {
    width: 100%;
    min-height: 600px;
    border: none;
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
    
    .contact-modal-body iframe {
      min-height: 500px;
    }
  }
</style>

<script>
  // Contact form popup functions
  function openContactForm() {
    document.getElementById('contactFormModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
  
  function closeContactForm() {
    document.getElementById('contactFormModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
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
      if (modal.style.display === 'block') {
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
</script>
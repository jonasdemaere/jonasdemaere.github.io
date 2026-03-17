---
layout: page
permalink: /contact/
title: contact
nav: true
nav_order: 6
---

<div class="contact-form">
  <p>Have a question or want to get in touch? Fill out the form below and I'll get back to you.</p>

  <form action="https://formspree.io/f/mnjggrpn" method="POST">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required placeholder="Your name" class="form-control">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required placeholder="your@email.com" class="form-control">
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" required rows="6" placeholder="Your message..." class="form-control"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Send Message</button>
  </form>
</div>

<style>
  .contact-form {
    max-width: 600px;
  }
  .form-group {
    margin-bottom: 1.2rem;
  }
  .form-group label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: 500;
  }
  .form-control {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 4px;
    background: var(--global-bg-color);
    color: var(--global-text-color);
    font-size: 1rem;
  }
  .form-control:focus {
    outline: none;
    border-color: var(--global-theme-color);
  }
</style>

/* Progressive enhancement: without JavaScript, the form submits to Formspree normally. */
const form = document.querySelector('#contact-form');
if (form) {
  const status = document.querySelector('#form-status');
  const button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    button.disabled = true;
    button.textContent = 'Sending…';
    status.textContent = '';
    status.classList.remove('is-error');
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) {
        let reason = 'Your message could not be sent. Please try again.';
        try {
          const data = await response.json();
          if (Array.isArray(data.errors) && data.errors.length) {
            reason = data.errors.map(e => e.message).filter(Boolean).join(' ');
          }
        } catch (_) {}
        throw new Error(reason);
      }
      form.reset();
      status.textContent = 'Thanks — your message has been sent.';
    } catch (error) {
      status.classList.add('is-error');
      status.textContent = error.message || 'Your message could not be sent. Please try again.';
    } finally {
      button.disabled = false;
      button.textContent = 'Send message';
    }
  });
}

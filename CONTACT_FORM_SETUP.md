# Contact Form Email Setup

## Current Implementation: mailto: Link (No Backend Required)

The contact form currently uses a **mailto: link** approach that opens the user's default email client with pre-filled information. This works perfectly on GitHub Pages without any backend or third-party services.

### How it works:
- User fills out the form
- On submit, their email client opens with a pre-filled email to info@geny.ai
- User can review and send the email from their own email client

### Pros:
✅ No backend required
✅ No third-party services
✅ Works perfectly on GitHub Pages
✅ 100% reliable
✅ No setup needed

### Cons:
❌ Requires user to have an email client configured
❌ User can see the email before sending (and might modify it)
❌ Not as seamless as a direct form submission

---

## Alternative: Formspree (For Better UX)

If you want a more seamless experience where the form submits directly without opening an email client, use **Formspree** (works on GitHub Pages):

### Setup (2 minutes):
1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form and set the email to: **info@geny.ai**
3. Copy your form ID (e.g., `abc123xyz`)
4. Replace the `handleSubmit` function in `src/pages/Contact/index.js` with:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus({ type: "", message: "" });

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        _replyto: formData.email,
      })
    });

    if (response.ok) {
      setStatus({ type: "success", message: "Thank you! We'll get back to you soon." });
      setFormData({ name: "", email: "", company: "", message: "" });
    } else {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  } catch (error) {
    setStatus({ type: "error", message: "Failed to send. Please email info@geny.ai directly." });
  } finally {
    setIsSubmitting(false);
  }
};
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

### Why Formspree works on GitHub Pages:
- It's just a client-side API call
- No server required on your end
- Formspree's server handles the email sending
- Free tier: 50 submissions/month

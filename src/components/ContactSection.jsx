// src/components/ContactSection.jsx
import React, { useState } from "react";
import '../styles/ContactSection.css'; // keep your styles
// Note: your original file uploaded was ContactSection.jsx. This replaces it with a working one. :contentReference[oaicite:2]{index=2}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: ""
  });

  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    // simple email regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.area) return "Please select area of interest.";
    if (!form.message.trim()) return "Please enter your message.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ loading: false, success: false, message: err });
      return;
    }

    setStatus({ loading: true, success: null, message: "Sending..." });

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await resp.json();

      if (!resp.ok) throw new Error(data?.message || "Failed to send message");

      setForm({ name: "", email: "", phone: "", area: "", message: "" });
      setStatus({ loading: false, success: true, message: "Message sent! We'll contact you shortly." });
    } catch (error) {
      console.error("Contact error:", error);
      setStatus({ loading: false, success: false, message: error.message || "Failed to send message." });
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title contact-title">Let's Connect!</h2>
        <div className="contact-container" style={{display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap'}}>
          <form className="contact-form" onSubmit={handleSubmit} style={{flex: '1 1 380px', minWidth: 300}}>
            <div className="form-group">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                className="form-control"
                placeholder="Your Phone"
              />
            </div>

            <div className="form-group">
              <select
                name="area"
                value={form.area}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled>Area of Interest</option>
                <option>Cleanroom Infrastructure</option>
                <option>Process Machinery</option>
                <option>Post Process Machinery</option>
                <option>Cleanroom Equipment</option>
                <option>Sterile Line Solutions</option>
                <option>Utility & HVAC Solutions</option>
                <option>Laboratory Equipment</option>
                <option>Pharma Facility Design Consultancy</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-secondary"
              style={{ color: '#d70000', backgroundColor: 'white', minWidth: 150 }}
              disabled={status.loading}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            <div style={{ marginTop: 12 }}>
              {status.message && (
                <div
                  role="alert"
                  style={{
                    color: status.success ? "green" : "crimson",
                    fontWeight: 600
                  }}
                >
                  {status.message}
                </div>
              )}
            </div>
          </form>

          <div className="contact-info">
            <img src="/images/img2.png" alt="Contact Us" style={{ maxWidth: '100%', borderRadius: 8 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

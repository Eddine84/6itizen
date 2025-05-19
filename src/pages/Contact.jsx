import { useState, useEffect } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = t("contact.form.error.name");
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errors.email = t("contact.form.error.email");
    if (!form.message.trim()) errors.message = t("contact.form.error.message");
    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    const errors = validate();
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      return;
    }

    setSending(true);
    setError("");
    try {
      const data = {
        name: form.name,
        email: form.email,
        subject: form.subject || t("contact.form.subject.support"),
        message: form.message,
      };
      await axios.post(
        "https://formsubmit.co/7914d08a6185d2c27a2b7bbf41138feb",
        data
      );
      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      setError(
        t("contact.form.error.global") ||
          "Erreur lors de l'envoi, veuillez rafraîchir la page."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Success Modal */}
      {success && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          aria-live="polite"
        >
          <div className="bg-white p-8 rounded-lg text-center animate-fade-in shadow-2xl">
            <p className="text-xl font-semibold mb-4">
              {t("contact.form.success") || "Message envoyé avec succès !"}
            </p>
            <p>
              {t("contact.form.success.redirect") ||
                "Redirection automatique dans 3 secondes..."}
            </p>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {error && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          aria-live="assertive"
        >
          <div className="bg-white p-8 rounded-lg text-center animate-fade-in shadow-2xl">
            <p className="text-xl font-semibold mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t("contact.form.error.refresh") || "Rafraîchir la page"}
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
            {t("contact.hero.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.hero.description")}
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <FiMail className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {t("contact.grid.support.title")}
            </h3>
            <p className="text-gray-600 mb-4">
              {t("contact.grid.support.description")}
            </p>
            <a
              href="mailto:support@6itizen.ch"
              className="text-blue-600 hover:underline"
            >
              support@6itizen.ch
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <FiPhone className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {t("contact.grid.phone.title")}
            </h3>
            <p className="text-gray-600 mb-4">
              {t("contact.grid.phone.description")}
            </p>
            <a
              href="tel:+41796117355"
              className="text-blue-600 hover:underline"
            >
              {t("contact.phone.number")}
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <FiMapPin className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {t("contact.grid.address.title")}
            </h3>
            <p className="text-gray-600">
              {t("contact.grid.address.description.line1")}
              <br />
              {t("contact.grid.address.description.line2")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("contact.form.title")}
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={sending}
                    className={`w-full px-4 py-3 border ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                    autoComplete="name"
                  />
                  {formErrors.name && (
                    <span className="text-red-500 text-sm">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={sending}
                    className={`w-full px-4 py-3 border ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    required
                    autoComplete="email"
                  />
                  {formErrors.email && (
                    <span className="text-red-500 text-sm">
                      {formErrors.email}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  {t("contact.form.subject")}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  disabled={sending}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t("contact.form.subject.support")}</option>
                  <option value={t("contact.form.subject.partnership")}>
                    {t("contact.form.subject.partnership")}
                  </option>
                  <option value={t("contact.form.subject.press")}>
                    {t("contact.form.subject.press")}
                  </option>
                  <option value={t("contact.form.subject.other")}>
                    {t("contact.form.subject.other")}
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  disabled={sending}
                  className={`w-full px-4 py-3 border ${
                    formErrors.message ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  required
                ></textarea>
                {formErrors.message && (
                  <span className="text-red-500 text-sm">
                    {formErrors.message}
                  </span>
                )}
              </div>

              <button
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={sending}
              >
                <FiSend className="w-5 h-5" />
                {sending
                  ? t("contact.form.sending") || "Envoi en cours..."
                  : t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Localisation 6itizen"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.027162712217!2d6.1126511!3d46.2152637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c654d1a1f2b0d%3A0x3154813b6a9bfa34!2sChemin%20de%20Maisonneuve%2012I%2C%201219%20Ch%C3%A2telaine%2C%20Suisse!5e0!3m2!1sfr!2sfr!4v1715884000000!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React from "react";
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

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
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

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  {t("contact.form.subject")}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>{t("contact.form.subject.support")}</option>
                  <option>{t("contact.form.subject.partnership")}</option>
                  <option>{t("contact.form.subject.press")}</option>
                  <option>{t("contact.form.subject.other")}</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FiSend className="w-5 h-5" />
                {t("contact.form.submit")}
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

      {/* Social Links */}
      {/* <section className="py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t("contact.social.title")}
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://twitter.com/6itizen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FiTwitter className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/company/6itizen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FiLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://facebook.com/6itizen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FiFacebook className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section> */}

      {/* CTA Footer */}
      {/* <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">
            {t("contact.newsletter.title")}
          </h3>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t("contact.newsletter.placeholder")}
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t("contact.newsletter.button")}
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;

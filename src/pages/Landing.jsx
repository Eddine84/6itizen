import React from "react";
import illustration from "../assets/6itizen_illustration_transparent.png";
import { Link } from "react-router-dom";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiMapPin,
  FiMessageSquare,
  FiGlobe,
  FiSmartphone,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const features = [
    {
      icon: <FiAlertCircle className="w-6 h-6" />,
      title: t("features.signal.title"),
      description: t("features.signal.description"),
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: t("features.validation.title"),
      description: t("features.validation.description"),
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: t("features.map.title"),
      description: t("features.map.description"),
    },
    {
      icon: <FiMessageSquare className="w-6 h-6" />,
      title: t("features.tracking.title"),
      description: t("features.tracking.description"),
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: t("features.language.title"),
      description: t("features.language.description"),
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: t("features.platform.title"),
      description: t("features.platform.description"),
    },
  ];

  const objectives = [
    {
      title: t("objectives.objective.title"),
      content: t("objectives.objective.description"),
      sub: t("objectives.objective.sub"),
    },
    {
      title: t("objectives.vision.title"),
      content: t("objectives.vision.description"),
      sub: t("objectives.vision.sub"),
    },
    {
      title: t("objectives.ambition.title"),
      content: t("objectives.ambition.description"),
      sub: t("objectives.ambition.sub"),
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative py-20 px-6 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
              {t("hero.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {t("hero.title")}
              <br />
              <span className="text-3xl md:text-4xl">{t("hero.subtitle")}</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/about"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                {t("hero.cta_ambition")}
              </Link>
            </div>
          </div>
          <div className="relative lg:w-[55%] flex justify-center items-end overflow-hidden transform rotate-2 rounded-xl">
            <img
              src={illustration}
              alt="Interface 6itizen"
              className="w-full max-w-xl md:max-w-2xl lg:w-[120%] xl:w-[140%] transition-all duration-300 object-contain object-center rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("features.heading")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                2.0
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("features.subheading")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-100 hover:bg-gradient-to-b from-white to-blue-50 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {objectives.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200"
            >
              <div className="text-blue-600 text-3xl font-bold mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-blue-600 rounded-full" />
                {item.title}
              </div>
              <div className="mb-4 h-px bg-gray-200 w-full" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.content}
              </p>
              <div className="text-sm text-blue-600 font-medium mt-auto">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-28 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90">{t("cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              {t("cta.button_contact")}
            </Link>

            <Link
              to="https://willowy-pasca-a05473.netlify.app/"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              {t("cta.button_beta")}
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/70">{t("cta.note")}</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4">6itizen</h4>
            <p className="text-sm">{t("footer.description")}</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          © {currentYear} 6itizen – {t("footer.disclaimer")}
        </div>
      </footer>
    </div>
  );
};

export default Landing;

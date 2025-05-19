import React from "react";
import { FiGlobe, FiUsers, FiClock, FiTrendingUp } from "react-icons/fi";
import teamPhoto from "../assets/citizen_illust.png";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  /* --- nouveau tableau roadmap --- */
  /* --- nouveau tableau roadmap 2024-2027 --- */
  const roadmap = [
    {
      phase: t("about.roadmap.2024.phase"),
      milestones: [
        t("about.roadmap.2024.step1"),
        t("about.roadmap.2024.step2"),
        t("about.roadmap.2024.step3"),
      ],
    },
    {
      phase: t("about.roadmap.2025.phase"),
      milestones: [
        t("about.roadmap.2025.step1"),
        t("about.roadmap.2025.step2"),
        t("about.roadmap.2025.step3"),
      ],
    },
    {
      phase: t("about.roadmap.2026.phase"),
      milestones: [
        t("about.roadmap.2026.step1"),
        t("about.roadmap.2026.step2"),
        t("about.roadmap.2026.step3"),
      ],
    },
    {
      phase: t("about.roadmap.2027.phase"),
      milestones: [
        t("about.roadmap.2027.step1"),
        t("about.roadmap.2027.step2"),
        t("about.roadmap.2027.step3"),
      ],
    },
  ];

  const stats = [
    { icon: <FiGlobe />, value: "8 Techs", label: t("about.stats.stack") },
    { icon: <FiUsers />, value: "50+ commits", label: t("about.stats.active") },
    { icon: <FiClock />, value: "≈40 %", label: t("about.stats.frontend") },
    { icon: <FiTrendingUp />, value: "Q1 2025", label: t("about.stats.beta") },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-blue-600 text-3xl mb-4 mx-auto">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      {/* Story Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT : image du fondateur */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={teamPhoto}
              alt={t("about.story.imageAlt")}
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT : contenu traduit dynamiquement */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("about.story.title")}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {t("about.story.paragraph1.before")}
              <span className="font-semibold text-blue-600">
                {t("about.story.paragraph1.highlight")}
              </span>
              {t("about.story.paragraph1.after")}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {t("about.story.paragraph2")}
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <FiClock className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700">{t("about.story.point1")}</span>
              </li>

              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <FiUsers className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700">{t("about.story.point2")}</span>
              </li>

              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <FiTrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-700">{t("about.story.point3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY 6ITIZEN SECTION – inserted snippet */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("about.why.title")}
            </h2>

            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-lg font-semibold text-blue-800 mb-4">
                {t("about.why.vicious.title")}
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-red-600 font-bold mb-2">
                    {t("about.why.vicious.step1.title")}
                  </div>
                  <p>{t("about.why.vicious.step1.description")}</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-red-600 font-bold mb-2">
                    {t("about.why.vicious.step2.title")}
                  </div>
                  <p>{t("about.why.vicious.step2.description")}</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-red-600 font-bold mb-2">
                    {t("about.why.vicious.step3.title")}
                  </div>
                  <p>{t("about.why.vicious.step3.description")}</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-gray-600 leading-relaxed">
                <span className="font-bold text-blue-600">
                  {t("about.why.fix.title")}
                </span>{" "}
                {t("about.why.fix.description")}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-blue-600 font-bold text-xl mb-2">
                    {t("about.why.fix.step1.title")}
                  </div>
                  <p className="text-gray-600">
                    {t("about.why.fix.step1.description")}
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-blue-600 font-bold text-xl mb-2">
                    {t("about.why.fix.step2.title")}
                  </div>
                  <p className="text-gray-600">
                    {t("about.why.fix.step2.description")}
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-blue-600 font-bold text-xl mb-2">
                    {t("about.why.fix.step3.title")}
                  </div>
                  <p className="text-gray-600">
                    {t("about.why.fix.step3.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                {t("about.why.case.title")}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-red-600 rounded-full mr-2" />
                    <span className="font-semibold">
                      {t("about.why.case.hm.title")}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>{t("about.why.case.hm.point1")}</li>
                    <li>{t("about.why.case.hm.point2")}</li>
                    <li>{t("about.why.case.hm.point3")}</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-green-600 rounded-full mr-2" />
                    <span className="font-semibold">
                      {t("about.why.case.zara.title")}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>{t("about.why.case.zara.point1")}</li>
                    <li>{t("about.why.case.zara.point2")}</li>
                    <li>{t("about.why.case.zara.point3")}</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600 italic">
                {t("about.why.case.note")}
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl text-gray-700">
                <span className="font-bold text-blue-600">
                  {t("about.why.final.title")}
                </span>{" "}
                {t("about.why.final.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t("about.values.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Carte 1 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-blue-100 transition-colors">
              <div className="text-blue-600 font-semibold mb-4">
                {t("about.values.card1.title")}
              </div>
              <p className="text-gray-600">
                {t("about.values.card1.description")}
              </p>
            </div>

            {/* Carte 2 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-blue-100 transition-colors">
              <div className="text-blue-600 font-semibold mb-4">
                {t("about.values.card2.title")}
              </div>
              <p className="text-gray-600">
                {t("about.values.card2.description")}
              </p>
            </div>

            {/* Carte 3 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-blue-100 transition-colors">
              <div className="text-blue-600 font-semibold mb-4">
                {t("about.values.card3.title")}
              </div>
              <p className="text-gray-600">
                {t("about.values.card3.description")}
              </p>
            </div>

            {/* Carte 4 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-blue-100 transition-colors">
              <div className="text-blue-600 font-semibold mb-4">
                {t("about.values.card4.title")}
              </div>
              <p className="text-gray-600">
                {t("about.values.card4.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t("about.roadmap.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border-2 border-blue-50 hover:border-blue-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-6 bg-blue-600 rounded-full" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.phase}
                  </h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {step.milestones.map((milestone, i) => (
                    <li
                      key={i}
                      className="text-gray-600 text-sm flex items-start"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2" />
                      {milestone}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-gray-600 max-w-2xl mx-auto text-sm">
            {t("about.roadmap.note")}
          </p>
        </div>
      </section>
      {/* Team Section */}

      {/* Tech Specs */}
      {/* Tech Specs */}
      {/* Tech Specs – uniquement “Sous le capot” */}
    </div>
  );
};

export default About;

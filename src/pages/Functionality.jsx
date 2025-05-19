import React from "react";
import {
  FiAlertTriangle,
  FiMic,
  FiCpu,
  FiSmartphone,
  FiCloud,
  FiMapPin,
  FiThumbsUp,
  FiShield,
  FiGitBranch,
  FiUsers,
} from "react-icons/fi";
import photo_eddine from "../assets/photo_eddine.jpg";
import photo_hocine from "../assets/photo_hocine.jpg";
import { useTranslation } from "react-i18next";

const Functionality = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <FiAlertTriangle className="w-6 h-6" />,
      title: t("about.tech_features.f1.title"),
      content: t("about.tech_features.f1.content"),
      tech: ["React Native", "Capacitor", "AWS S3"],
    },
    {
      icon: <FiMic className="w-6 h-6" />,
      title: t("about.tech_features.f2.title"),
      content: t("about.tech_features.f2.content"),
      tech: ["Web Speech API", "Python NLP"],
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: t("about.tech_features.f3.title"),
      content: t("about.tech_features.f3.content"),
      tech: ["TensorFlow", "BERT", "FastAPI"],
    },
    {
      icon: <FiGitBranch className="w-6 h-6" />,
      title: t("about.tech_features.f4.title"),
      content: t("about.tech_features.f4.content"),
      tech: ["GraphQL", "PostGIS", "eAdresse"],
    },
    {
      icon: <FiThumbsUp className="w-6 h-6" />,
      title: t("about.tech_features.f5.title"),
      content: t("about.tech_features.f5.content"),
      tech: ["Socket.IO", "Redis", "React Query"],
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: t("about.tech_features.f6.title"),
      content: t("about.tech_features.f6.content"),
      tech: ["JWT", "SSL", "Anonymisation"],
    },
  ];

  const team = [
    {
      role: "Full-Stack Developer",
      name: "Djamel Eddine Fersadou",
      bio: "3+ ans d'expérience en développement full stack – passionné par la tech citoyenne",
      expertise: ["React", "Python / FastAPI", "Architecture Cloud"],
      photo: photo_eddine, // <- importé en haut du fichier
    },
    {
      role: "Co-fondateur · Communication",
      name: "Hocine Hamel",
      bio: "Stratège partenariats publics/privés et gestion de projet",
      expertise: ["Gestion de projet", "RH", "Finance"],
      photo: photo_hocine, // <- importé en haut du fichier
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6 p-6">
            {t("about.tech_infra.title")}
            <br />
            {t("about.tech_infra.subtitle")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("about.tech_infra.description")}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 hover:border-blue-100 transition-colors"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.content}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("about.tech_stack.title")}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t("about.tech_stack.frontend")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Redux", "React Query", "Ionic", "Capacitor"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white border text-gray-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t("about.tech_stack.backend")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "FastAPI",
                    "PostgreSQL",
                    "Docker",
                    "Socket.IO",
                    "Redis",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border text-gray-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t("about.tech_stack.infra")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS EC2", "S3 Bucket", "Cloudflare", "GitHub Actions"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white border text-gray-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("about.compat.title")}
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FiSmartphone className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">
                    {t("about.compat.native_title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("about.compat.native_desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FiCloud className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">
                    {t("about.compat.web_title")}
                  </h3>
                  <p className="text-gray-600">{t("about.compat.web_desc")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FiMapPin className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">
                    {t("about.compat.geo_title")}
                  </h3>
                  <p className="text-gray-600">{t("about.compat.geo_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t("about.team.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50">
                <div className="flex items-start gap-6">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={t(`about.team.photo_alt`, { name: member.name })}
                      className="w-24 h-24 rounded-full object-cover shadow"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200" />
                  )}

                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-blue-600 mb-2">
                      {t(`about.team.${index}.role`)}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {t(`about.team.${index}.bio`)}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-lg text-gray-700 font-medium mb-4">
            {t("about.contact.banner")}
          </p>
          <p className="text-gray-600 mb-6">{t("about.contact.text")}</p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t("about.contact.button")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Functionality;

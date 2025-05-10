export const reservationServicesMapper = (services: string[]) => {
  return services.map(mapper).join(", ");
};

const mapper = (service: string) => {
  switch (service) {
    case "HEALTH_CONSULTATION":
      return "Konsultasi Kesehatan";
    case "FASDHU_THERAPY":
      return "Terapi Fashdu";
    case "CHIROPRACTIC":
      return "Chiropractic";
    case "NASAL_GURAH_THERAPY":
      return "Gurah Nasal";
    case "ACUPUNCTURE":
      return "Acupuncture";
    case "ACUPRESSURE":
      return "Acupressure";
    case "EYE_GURAH_THERAPY":
      return "Gurah Mata";
    case "THROAT_GURAH":
      return "Gurah Tenggorokan";
    case "HIJAMAH_BEKAM_THERAPY":
      return "Bekam";
    case "HERBAL_SHOPPING":
      return "Belanja Herbal";
    case "LEARNING_TRAINING":
      return "Training";
    default:
      return service;
  }
};

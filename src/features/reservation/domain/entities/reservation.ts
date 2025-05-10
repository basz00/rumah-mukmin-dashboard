export type Reservation = {
  id: number;
  name: string;
  age: number;
  domicile: string;
  complaint: string;
  therapyExperience: string;
  email?: string | null;
  gender: string | null;
  registrationCategory: string;
  accompanyingParticipantName?: string | null;
  accompanyingParticipantComplaint?: string | null;
  referredBy?: string | null;
  reservationDatetime: string;
  optionalDatetime?: string | null;
  phoneNumber?: string | null;
  reservationServices: Array<string>;
  createdAt: string;
  updatedAt: string;
};

export enum ReservationServiceEnum {
  HEALTH_CONSULTATION = "HEALTH_CONSULTATION",
  FASDHU_THERAPY = "FASDHU_THERAPY",
  CHIROPRACTIC = "CHIROPRACTIC",
  NASAL_GURAH_THERAPY = "NASAL_GURAH_THERAPY",
  ACUPUNCTURE = "ACUPUNCTURE",
  ACUPRESSURE = "ACUPRESSURE",
  EYE_GURAH_THERAPY = "EYE_GURAH_THERAPY",
  THROAT_GURAH = "THROAT_GURAH",
  HIJAMAH_BEKAM_THERAPY = "HIJAMAH_BEKAM_THERAPY",
  HERBAL_SHOPPING = "HERBAL_SHOPPING",
  LEARNING_TRAINING = "LEARNING_TRAINING",
}

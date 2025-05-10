export interface ReservationServiceRelation {
  serviceType:
    | "HIJAMAH_BEKAM_THERAPY"
    | "CHIROPRACTIC"
    | "ACUPRESSURE"
    | "ACUPUNCTURE"
    | "HEALTH_CONSULTATION"
    | "HERBAL_SHOPPING"
    | string;
}

export interface RemoteReservation {
  id: number;
  name: string;
  age: number;
  domicile: string;
  complaint: string;
  therapyExperience: string;
  email: string | null;
  gender: "MAN" | "WOMAN";
  registrationCategory: "NEW_REGISTRATION" | "RE_REGISTRATION";
  accompanyingParticipantName: string | null;
  accompanyingParticipantComplaint: string | null;
  referredBy: string | null;
  reservationDatetime: string;
  optionalDatetime: string | null;
  phoneNumber: string | null;
  createdAt: string;
  updatedAt: string;
  reservationServices: ReservationServiceRelation[];
}

export interface ReservationResponse {
  reservations: RemoteReservation[];
}

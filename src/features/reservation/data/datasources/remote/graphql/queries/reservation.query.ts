import { gql } from "@apollo/client";

export const FETCH_RESERVATIONS = gql`
  query FetchReservations {
    reservations {
      id
      name
      age
      domicile
      complaint
      therapyExperience
      email
      gender
      registrationCategory
      accompanyingParticipantName
      accompanyingParticipantComplaint
      referredBy
      reservationDatetime
      optionalDatetime
      phoneNumber
      createdAt
      updatedAt
      reservationServices {
        serviceType
      }
    }
  }
`;

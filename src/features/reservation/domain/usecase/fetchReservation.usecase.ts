import { useFetchReservations } from "@/reservation/data/repository";
import { Reservation } from "../entities";
import { RemoteReservation } from "@/reservation/data/datasources/entities";
import { mapGender } from "../utils/genderMapper";
import { mapRegistrationCategory } from "../utils/registrationCategoryMapper";

export const useFetchReservationUseCase = () => {
  const { data, error, loading, refetch } = useFetchReservations();

  const isSuccess = data && data.length > 0 && !loading && !error;

  const processedError = error;
  const processedData: Array<Reservation> = data
    ? data.reservations.map((reservation: RemoteReservation) => {
        return {
          ...reservation,
          gender: mapGender(reservation.gender),
          registrationCategory: mapRegistrationCategory(
            reservation.registrationCategory,
          ),
          reservationServices: reservation.reservationServices.map(
            (service) => service.serviceType,
          ),
        };
      })
    : [];

  return {
    data: processedData,
    error: processedError,
    loading,
    isSuccess,
    refetch,
  };
};

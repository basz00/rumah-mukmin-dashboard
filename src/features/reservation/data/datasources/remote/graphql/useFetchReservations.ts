import { useQuery } from "@apollo/client";
import { FETCH_RESERVATIONS } from "./queries/reservation.query";

export const useFetchReservationsGraphQL = () => {
  const { data, loading, error, refetch } = useQuery(FETCH_RESERVATIONS);

  return { data, loading, error, refetch };
};

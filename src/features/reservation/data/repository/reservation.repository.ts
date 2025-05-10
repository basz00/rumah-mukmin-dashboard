import { useFetchReservationsGraphQL } from "../datasources/remote/graphql";

export const useFetchReservations = () => {
  const { data, loading, error, refetch } = useFetchReservationsGraphQL();

  return { data, loading, error, refetch };
};

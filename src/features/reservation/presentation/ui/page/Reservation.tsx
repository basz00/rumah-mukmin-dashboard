import { useHostState } from "@/features/common/config";
import ReservationTable from "../components/ReservationTable";

const Reservation = () => {
  const { hostUrl } = useHostState();

  return (
    <div className="flex h-full flex-col bg-indigo-100 p-4">
      {hostUrl === "" ? (
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-2xl">
            Harap masukkan host URL terlebih dahulu (tekan "Settings" di pojok
            kanan atas)
          </p>
        </div>
      ) : (
        <ReservationTable />
      )}
    </div>
  );
};

export default Reservation;

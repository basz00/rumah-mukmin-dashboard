import { Reservation } from "@/features/reservation/domain/entities";
import { DateTime } from "luxon";
import { reservationServicesMapper } from "../../utils";

type Props = {
  item: Reservation;
};

const ReservationDetail = ({ item }: Props) => {
  const renderItem = (label: string, value?: string | null) => {
    return (
      <div className="flex flex-col">
        <p className="text-xs">{label}</p>
        <p className="font-bold">{value ?? "-"}</p>
      </div>
    );
  };

  const formatTime = (isoTime: string) => {
    return DateTime.fromISO(isoTime)
      .setLocale("id")
      .toFormat("d LLL yyyy - HH:mm");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-3 gap-y-2">
        {/* row 1 */}
        {renderItem("Nama", item.name)}
        {renderItem("Usia", item.age.toString())}
        {renderItem("Jenis Kelamin", item.gender)}

        {/* row 2 */}
        {renderItem("Nomor Telepon", item.phoneNumber)}
        {renderItem("Email", item.email)}
        {renderItem("Domisili", item.domicile)}
      </div>

      <div className="grid grid-cols-3">
        {renderItem("Waktu Reservasi", formatTime(item.reservationDatetime))}
        {renderItem(
          "(Waktu Optional Lain)",
          item.optionalDatetime
            ? `(${formatTime(item.optionalDatetime)})`
            : undefined,
        )}
      </div>

      <div className="flex flex-col gap-1">
        {renderItem("Kategori", item.registrationCategory)}{" "}
        {renderItem(
          "Layanan Reservasi",
          reservationServicesMapper(item.reservationServices),
        )}
      </div>

      <div className="flex flex-col gap-1">
        {renderItem("Nama Peserta Bawaan", item.accompanyingParticipantName)}
        {renderItem(
          "Keluhan Peserta Bawaan",
          item.accompanyingParticipantComplaint,
        )}
      </div>
      {renderItem("Yang Merekomendasikan", item.referredBy)}
    </div>
  );
};

export default ReservationDetail;

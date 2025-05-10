import { Reservation } from "@/reservation/domain/entities";
import { createColumnHelper } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { reservationServicesMapper } from "../../utils";

const columnHelper = createColumnHelper<Reservation>();

export const columns = [
  columnHelper.accessor("name", {
    header: () => "Nama",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: () => <div className="flex-1 text-center">Usia</div>,
    cell: (info) => (
      <div className="flex justify-center">{info.getValue()}</div>
    ),
  }),
  columnHelper.accessor("complaint", {
    header: () => "Komplain",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("reservationServices", {
    header: () => "Layanan",
    cell: (info) => reservationServicesMapper(info.getValue()),
  }),
  columnHelper.accessor("therapyExperience", {
    header: () => <div className="flex-1 text-center">Pengalaman</div>,
    cell: (info) => (
      <div className="flex justify-center">{info.getValue()}</div>
    ),
  }),
  columnHelper.accessor("gender", {
    header: () => <div className="flex-1 text-center">Jenis Kelamin</div>,
    cell: (info) => (
      <div className="flex justify-center">{info.getValue()}</div>
    ),
  }),
  columnHelper.accessor("reservationDatetime", {
    id: "reservationDatetime",
    header: () => <div className="flex-1 text-center">Reservasi</div>,
    cell: (info) => (
      <div className="flex justify-center">
        {DateTime.fromISO(info.getValue())
          .setLocale("id")
          .toFormat("d LLL yyyy")}
      </div>
    ),
    filterFn: (row, id, value) => {
      const rowValue = DateTime.fromISO(row.getValue(id))
        .toLocal()
        .toFormat("yyyy-MM-dd");
      return value === rowValue || value === "";
    },
  }),
  columnHelper.accessor("reservationDatetime", {
    id: "reservationTime",
    header: () => <div className="flex-1 text-center">Waktu Reservasi</div>,
    cell: (info) => (
      <div className="flex justify-center">
        {DateTime.fromISO(info.getValue()).toLocal().toFormat("HH:mm")}
      </div>
    ),
  }),
];

import { Table } from "@/common/ui/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/core/ui/components";
import { useFetchReservationUseCase } from "@/reservation/domain/usecase";
import { ColumnFiltersState, SortingState } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { useState } from "react";
import { columns } from "./column";
import ReservationDetail from "./ReservationDetail";
import FilterInput from "./FilterBar";
import { Reservation } from "@/features/reservation/domain/entities";

const ReservationTable = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
    {
      id: "reservationDatetime",
      value: DateTime.now().toLocal().toFormat("yyyy-MM-dd"),
    },
  ]);
  const [sorting, setSorting] = useState<SortingState>([
    { id: "reservationTime", desc: false },
  ]);
  const [selectedReservation, setSelectedReservation] = useState<
    Reservation | undefined
  >(undefined);
  const { data, loading } = useFetchReservationUseCase();

  const renderFilterByDate = () => {
    const columnId = "reservationDatetime";
    const value =
      columnFilters.length > 0
        ? (columnFilters.filter((item) => item.id === columnId)[0]
            .value as string)
        : "";

    return (
      <FilterInput
        label="Filter by Date"
        onChange={(value) => {
          setColumnFilters([{ id: columnId, value }]);
        }}
        value={value}
      />
    );
  };

  const renderDetailDialog = () => {
    return (
      <Dialog
        open={selectedReservation !== undefined}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedReservation(undefined);
          }
        }}
      >
        <DialogContent>
          <DialogTitle>Detail Reservasi</DialogTitle>
          <DialogDescription>
            {selectedReservation ? (
              <ReservationDetail item={selectedReservation} />
            ) : null}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <div>{renderFilterByDate()}</div>
      <div className="flex-1 overflow-auto">
        {loading ? (
          <p className="text-center text-2xl">Loading...</p>
        ) : (
          <Table<Reservation>
            data={data}
            columns={columns}
            columnFilterState={columnFilters}
            sorting={sorting}
            setSorting={setSorting}
            onRowClick={(row) => {
              setSelectedReservation(row);
            }}
          />
        )}
      </div>
      {renderDetailDialog()}
    </div>
  );
};

export default ReservationTable;

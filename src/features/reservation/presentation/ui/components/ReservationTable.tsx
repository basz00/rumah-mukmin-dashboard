import { Table } from "@/common/ui/components";
import { useFetchReservationUseCase } from "@/reservation/domain/usecase";
import { ColumnFiltersState, SortingState } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { useState } from "react";
import { columns } from "./column";
import FilterInput from "./FilterBar";

const ReservationTable = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
    {
      id: "reservationDatetime",
      value: DateTime.now().toLocal().toFormat("yyyy-MM-dd"),
    },
  ]);
  const [sorting, setSorting] = useState<SortingState>([
    { id: "reservationTime", desc: true },
  ]);
  const { data } = useFetchReservationUseCase();

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

  return (
    <div className="flex h-full flex-col gap-4">
      <div>{renderFilterByDate()}</div>
      <div className="flex-1 overflow-auto">
        <Table
          data={data}
          columns={columns}
          columnFilterState={columnFilters}
          sorting={sorting}
          setSorting={setSorting}
        />
      </div>
    </div>
  );
};

export default ReservationTable;

import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
// import { columns } from "../../../reservation/presentation/ui/components/column";
// import { data } from "../../../reservation/presentation/ui/components/data";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  columnFilterState?: ColumnFiltersState;
  sorting?: SortingState;
  setSorting?: React.Dispatch<React.SetStateAction<SortingState>>;
};

const Table = ({
  data,
  columns,
  columnFilterState,
  sorting,
  setSorting,
}: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters: columnFilterState,
    },
    onSortingChange: setSorting,
  });

  return (
    <table className="w-full p-6 text-left whitespace-nowrap">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="bg-gray-300">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="p-2">
                <div>
                  {header.isPlaceholder ? null : (
                    <div
                      className={`flex ${header.column.getCanSort() ? "cursor-pointer select-none" : ""}`}
                      onClick={header.column.getToggleSortingHandler()}
                      title={
                        header.column.getCanSort()
                          ? header.column.getNextSortingOrder() === "asc"
                            ? "Sort ascending"
                            : header.column.getNextSortingOrder() === "desc"
                              ? "Sort descending"
                              : "Clear sort"
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="border-b border-gray-300 bg-gray-50">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

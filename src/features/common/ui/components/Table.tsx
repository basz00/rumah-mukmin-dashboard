import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

type Props<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
  columnFilterState?: ColumnFiltersState;
  sorting?: SortingState;
  setSorting?: React.Dispatch<React.SetStateAction<SortingState>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRowClick?: (row: T) => void;
};

const Table = <T,>({
  data,
  columns,
  columnFilterState,
  sorting,
  setSorting,
  onRowClick,
}: Props<T>) => {
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
    <div className="overflow-auto rounded-md">
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
            <tr
              key={row.id}
              onClick={() => {
                if (onRowClick) {
                  onRowClick(row.original as T);
                }
              }}
              className="cursor-pointer hover:bg-gray-100 active:bg-gray-200"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

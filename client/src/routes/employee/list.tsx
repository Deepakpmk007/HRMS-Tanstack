import { createFileRoute } from '@tanstack/react-router'
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

export const Route = createFileRoute('/employee/list')({
  component: RouteComponent,
})

const data = [
  {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Development',
  },
  {
    name: 'Jane Smith',
    position: 'Product Manager',
    department: 'Product',
  },
]

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'position',
    header: 'Position',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'department',
    header: 'Department',
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
]

function RouteComponent() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  console.log(table.getHeaderGroups())
  return (
    <div className="p-2 flex flex-col gap-4 w-full bg-blue-200">
      <section>Header</section>
      <section className="flex-1 p-4">
        <table className="table-auto border-collapse border border-slate-400 w-full">
          <thead>
            {table
              .getHeaderGroups()
              .map((headergroup) =>
                headergroup.headers.map((header) => (
                  <th className="text-start">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                )),
              )}
          </thead>
          <tbody></tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-slate-300 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </section>
    </div>
  )
}

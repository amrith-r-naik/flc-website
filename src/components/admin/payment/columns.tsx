import { type Payment, type User } from "@prisma/client";
import { type ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "~/components/ui/checkbox";

const columns: ColumnDef<
  {
    User: User | null;
  } & Payment
>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "paymentName",
    accessorKey: "paymentName",
    header: "Payment Name",
  },
  {
    id: "paymentType",
    accessorKey: "paymentType",
    header: "Payment Type",
  },
  {
    id: "amount",
    accessorKey: "amount",
    header: "Amount",
  },
  {
    id: "createdAt",
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ getValue }) => new Date(getValue() as string).toLocaleDateString(),
  },
  {
    id: "userEmail",
    accessorKey: "User.email",
    header: "User Email",
  },
];

export default columns;

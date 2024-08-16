"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { type inferProcedureOutput } from "@trpc/server";
import { format } from "date-fns";
import { type quizQuestionZ } from "prisma/schemaZ";
import { type z } from "zod";

import { type AppRouter } from "~/server/api/root";

import Actions from "~/components/admin/quiz/tableActions";
import SortingHeader from "~/components/utils/sortingHeader";

export type QuizDataRow = inferProcedureOutput<
  AppRouter["quiz"]["getInfiniteQuizByMe"]
>["quizzes"][0];

export const columns: ColumnDef<QuizDataRow>[] = [
  {
    id: "title",
    accessorKey: "title",
    header: ({ column }) => (
      <SortingHeader<QuizDataRow> column={column} headerName="Title" />
    ),
  },
  {
    id: "questions",
    accessorKey: "questions",
    header: ({ column }) => (
      <SortingHeader<QuizDataRow> column={column} headerName="Questions" />
    ),
    cell: ({ cell }) =>
      (cell.getValue() as z.infer<typeof quizQuestionZ>[]).length,
  },
  {
    id: "timeLimit",
    accessorKey: "timeLimit",
    header: ({ column }) => (
      <SortingHeader<QuizDataRow> column={column} headerName="Time Limit" />
    ),
  },
  {
    id: "maxPoints",
    accessorKey: "maxPoints",
    header: ({ column }) => (
      <SortingHeader<QuizDataRow> column={column} headerName="Max Points" />
    ),
  },
  {
    id: "quizState",
    accessorKey: "quizState",
    header: ({ column }) => (
      <SortingHeader<QuizDataRow> column={column} headerName="Quiz State" />
    ),
  },
  {
    id: "createdAt",
    accessorKey: "createdAt",
    header: ({ column }) => (
      <SortingHeader<QuizDataRow> column={column} headerName="Created At" />
    ),
    cell: ({ cell }) => format(cell.getValue() as Date, "dd-MMM-yyyy"),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <Actions quiz={row.original} />,
  },
];

import React, { useEffect, type FunctionComponent } from "react";

import { DataTable } from "~/components/ui/custom/data-table";

import { columns } from "~/components/admin/quiz/tableColumns";
import Observer from "~/components/utils/observer";
import { useRefetchContext } from "~/context/refetchContext";
import { api } from "~/utils/api";

const ViewQuizTable: FunctionComponent = () => {
  const { addAsyncRefetch } = useRefetchContext("quiz");

  const { data, refetch, fetchNextPage } =
    api.quiz.getInfiniteQuizByMe.useInfiniteQuery(
      { take: 25 },
      {
        getNextPageParam: (currPage) => currPage.nextCursor,
      },
    );

  const allQuizzes = data?.pages.flatMap((page) => page.quizzes);
  const nextCursor = data?.pages[data.pages.length - 1]?.nextCursor;

  useEffect(() => {
    addAsyncRefetch(refetch);
  }, [addAsyncRefetch, refetch]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={allQuizzes ?? []} />
      <Observer nextCursor={nextCursor} fetchNextPage={fetchNextPage} />
    </div>
  );
};

export default ViewQuizTable;

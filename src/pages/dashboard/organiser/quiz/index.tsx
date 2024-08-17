import { type NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { LuPlus } from "react-icons/lu";

import { Button } from "~/components/ui/button";

import Table from "~/components/admin/quiz/table";
import ToolBar from "~/components/utils/toolbar";

const AdminQuiz: NextPage = () => {
  const router = useRouter();

  return (
    <div className="container">
      <Table />

      <ToolBar>
        <Button
          onClick={async () => {
            await router.push("/admin/quiz/create");
          }}
        >
          <LuPlus className="mr-2 size-5" />
          Quiz
        </Button>
      </ToolBar>
    </div>
  );
};

export default AdminQuiz;

import { z } from "zod";

const createBranchZ = z.object({
  branchName: z.string(),
  branchNickName: z.string(),
});

const deleteBranchZ = z.object({ branchId: z.string() });

export { createBranchZ, deleteBranchZ };

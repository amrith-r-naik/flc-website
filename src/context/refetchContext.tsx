"use client";

import React from "react";

type RF = () => unknown;
type ARF = () => Promise<unknown>;

type ContextValueType = {
  addRefetch: (func: RF) => void;
  addAsyncRefetch: (func: ARF) => void;
  executeRefetch: () => void;
};

const CONTEXT_MAP = new Map<
  string,
  React.Context<ContextValueType | undefined>
>();

/**
 * Used when cannot pass refetch to a component or many different components are releing on the same data and hence the refetch
 *
 * Do not use to pass more than 2-3 refetch, it will be more effective to just pass the refetch as prop
 * @param uid Unique Identifier
 * @param children React.ReactNode
 * @returns Unique RefetchProvider identified by uid
 */
const useRefetchContext = (uid: string) => {
  const context = CONTEXT_MAP.get(uid);
  if (!context)
    throw new Error(`RefetchProvider with UID "${uid}" does not exist`);
  const contextValue = React.useContext(context);
  if (!contextValue)
    throw new Error("RefetchProvider must wrap useRefetchContext");
  return contextValue;
};

/**
 * Used when cannot pass refetch to a component or many different components are releing on the same data and hence the refetch
 *
 * Do not use to pass more than 2-3 refetch, it will be more effective to just pass the refetch as props then
 * @param uid Unique Identifier
 * @param children React.ReactNode
 * @returns Unique RefetchProvider identified by uid
 */
const RefetchProvider: React.FunctionComponent<{
  uid: string;
  children: React.ReactNode;
}> = ({ uid, children }) => {
  if (uid.trim() === "") throw new Error("UID cannot be empty");

  let RefetchContext = CONTEXT_MAP.get(uid);

  if (!RefetchContext) {
    RefetchContext = React.createContext<ContextValueType | undefined>(
      undefined,
    );
    CONTEXT_MAP.set(uid, RefetchContext);
  }

  const [RF, setRF] = React.useState<RF[]>([]);
  const [ARF, setARF] = React.useState<ARF[]>([]);

  const addRF = React.useCallback((func: RF) => {
    setRF((prev) => [...prev, func]);
  }, []);
  const addARF = React.useCallback((func: ARF) => {
    setARF((prev) => [...prev, func]);
  }, []);
  const executeRF = React.useCallback(() => {
    RF.forEach((func) => func());
    Promise.all(ARF.map((func) => func())).catch((e) =>
      console.error("Error executing async refetch:", e),
    );
  }, [RF, ARF]);

  const contextValue = React.useMemo(
    () => ({
      addRefetch: addRF,
      addAsyncRefetch: addARF,
      executeRefetch: executeRF,
    }),
    [addRF, addARF, executeRF],
  );

  return (
    <RefetchContext.Provider value={contextValue}>
      {children}
    </RefetchContext.Provider>
  );
};

/**
 * Used when many RefetchProvider are wrapping same component degrading code quality
 *
 * Used when cannot pass refetch to a component or many different components are releing on the same data and hence the refetch
 *
 * @param uids Array of Unique Identifier
 * @param children React.ReactNode
 * @returns Nested RefetchProvider each identified by uid
 */
const RefetchProviderExtended: React.FunctionComponent<{
  uids: string[];
  children: React.ReactNode;
}> = ({ uids, children }) => {
  return uids.reduceRight(
    (acc, uid) => <RefetchProvider uid={uid}>{acc}</RefetchProvider>,
    <>{children}</>,
  );
};

export { useRefetchContext, RefetchProvider, RefetchProviderExtended };

import React, {
  type FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from "react";

import { Badge } from "~/components/ui/badge";

import Spinner from "~/components/utils/spinner";
import { cn } from "~/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  nextCursor: string | undefined;
  fetchNextPage: () => void;
}

const Observer: FunctionComponent<Props> = ({
  nextCursor,
  fetchNextPage,
  ...props
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Called when any target intersects observer or a new target is added to be observed
  const handleObserver: IntersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];

      // isIntersecting is true when the target is intersecting the
      // Hence the follwing code runs only when callback is called due to intersection
      if (target && target.isIntersecting && nextCursor) fetchNextPage();
    },
    [nextCursor, fetchNextPage],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, handleObserver]);

  return (
    <div
      {...props}
      className={cn("flex w-full justify-center", props.className)}
      ref={targetRef}
    >
      {nextCursor ? (
        <Spinner />
      ) : (
        <>
          <Badge>All results fetched</Badge>
        </>
      )}
    </div>
  );
};

export default Observer;

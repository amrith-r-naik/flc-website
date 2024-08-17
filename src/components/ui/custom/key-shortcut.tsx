import React, { Fragment, type FunctionComponent } from "react";

interface Props {
  // enable meta for shortcuts with meta key usage
  meta?: boolean;
  // text is of the form {key} + {key} + {key} + ...
  text: string;
}

const KeyShortcut: FunctionComponent<Props> = ({ meta = false, text }) => {
  const keys = text.split("+").filter((key) => key !== "");

  return (
    <div className="hidden flex-row gap-1 md:flex">
      {meta && (
        <>
          <Key text="⌘" /> {keys && "+"}
        </>
      )}
      {keys.map((key, idx) => (
        <Fragment key={idx}>
          <Key text={key.trim()} /> {idx !== keys.length - 1 && "+"}
        </Fragment>
      ))}
    </div>
  );
};

const Key: FunctionComponent<Props> = ({ text }) => {
  return (
    <kbd className="pointer-events-none hidden h-5 select-none items-baseline gap-1 rounded border bg-muted px-1 font-mono font-medium opacity-100 dark:border-ring/20 md:flex">
      {text}
    </kbd>
  );
};

export { KeyShortcut };

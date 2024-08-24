import { useWindowWidth } from "@react-hook/window-size";
import * as React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

const WIDTH_THRESHOLD = 896;

const DialogDrawer: React.FunctionComponent<
  React.ComponentProps<typeof Drawer>
> = (props) => {
  const screenWidth = useWindowWidth();
  return screenWidth >= WIDTH_THRESHOLD ? (
    <Dialog {...props} />
  ) : (
    <Drawer {...props} />
  );
};

const DialogDrawerTrigger: React.FunctionComponent<
  React.ComponentProps<typeof DrawerTrigger>
> = (props) => {
  const screenWidth = useWindowWidth();
  return screenWidth >= WIDTH_THRESHOLD ? (
    <DialogTrigger {...props} />
  ) : (
    <DrawerTrigger {...props} />
  );
};

const DialogDrawerPortal: React.FunctionComponent<
  React.ComponentProps<typeof DrawerPortal>
> = (props) => {
  const screenWidth = useWindowWidth();
  return screenWidth >= WIDTH_THRESHOLD ? (
    <DialogPortal {...props} />
  ) : (
    <DrawerPortal {...props} />
  );
};

const DialogDrawerClose: React.FunctionComponent<
  React.ComponentProps<typeof DrawerClose>
> = (props) => {
  const screenWidth = useWindowWidth();
  return screenWidth >= WIDTH_THRESHOLD ? (
    <DialogClose {...props} />
  ) : (
    <DrawerClose {...props} />
  );
};

const DialogDrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerOverlay>,
  React.ComponentPropsWithoutRef<typeof DrawerOverlay>
>((props, ref) => {
  const screenWidth = useWindowWidth();
  return screenWidth >= WIDTH_THRESHOLD ? (
    <DialogOverlay ref={ref} {...props} />
  ) : (
    <DrawerOverlay ref={ref} {...props} />
  );
});
DialogDrawerOverlay.displayName = "DialogDrawerOverlay";

const DialogDrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerContent>,
  React.ComponentPropsWithoutRef<typeof DrawerContent>
>((props, ref) => {
  const screenWidth = useWindowWidth();
  return screenWidth >= WIDTH_THRESHOLD ? (
    <DialogContent ref={ref} {...props} />
  ) : (
    <DrawerContent ref={ref} {...props} />
  );
});
DialogDrawerContent.displayName = "DialogDrawerContent";

const DialogDrawerHeader: React.FunctionComponent<
  React.ComponentProps<typeof DrawerHeader>
> = (props) => {
  const screenWidth = useWindowWidth();
  return screenWidth >= WIDTH_THRESHOLD ? (
    <DialogHeader {...props} />
  ) : (
    <DrawerHeader {...props} />
  );
};

const DialogDrawerFooter: React.FunctionComponent<
  React.ComponentProps<typeof DrawerFooter>
> = (props) => {
  const screenWidth = useWindowWidth();
  return screenWidth >= WIDTH_THRESHOLD ? (
    <DialogFooter {...props} />
  ) : (
    <DrawerFooter {...props} />
  );
};

const DialogDrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerTitle>,
  React.ComponentPropsWithoutRef<typeof DrawerTitle>
>((props, ref) => {
  const screenWidth = useWindowWidth();
  return screenWidth >= WIDTH_THRESHOLD ? (
    <DialogTitle ref={ref} {...props} />
  ) : (
    <DrawerTitle ref={ref} {...props} />
  );
});
DialogDrawerTitle.displayName = "DialogDrawerTitle";

const DialogDrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerDescription>,
  React.ComponentPropsWithoutRef<typeof DrawerDescription>
>((props, ref) => {
  const screenWidth = useWindowWidth();
  return screenWidth >= WIDTH_THRESHOLD ? (
    <DialogDescription ref={ref} {...props} />
  ) : (
    <DrawerDescription ref={ref} {...props} />
  );
});
DialogDrawerDescription.displayName = "DialogDrawerDescription";

export {
  DialogDrawer,
  DialogDrawerPortal,
  DialogDrawerOverlay,
  DialogDrawerTrigger,
  DialogDrawerClose,
  DialogDrawerContent,
  DialogDrawerHeader,
  DialogDrawerFooter,
  DialogDrawerTitle,
  DialogDrawerDescription,
};

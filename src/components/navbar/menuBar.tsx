import { MenuIcon } from "lucide-react";
import { useRef } from "react";

function MenuBar() {
  const menuDialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <nav
        className="menu-bar flex w-fit items-center gap-2 bg-black px-6 pb-3 pt-2"
        onClick={() => menuDialogRef.current?.showModal()}
      >
        <MenuIcon />
        <span className="text-lg">menu</span>
      </nav>

      <dialog ref={menuDialogRef} className="menu-dialog">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          nulla tempora nesciunt et laboriosam? Culpa, veritatis doloribus saepe
          laborum odio impedit repellendus, omnis commodi quos consequuntur in,
          voluptate amet minima.
        </div>
      </dialog>
    </>
  );
}

export default MenuBar;

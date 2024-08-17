const DEFAULT_CURSOR_SIZE = 36;

class Position {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Cursor {
  cursorEl: HTMLElement | null;
  currentDiameter: number;
  isCursorLocked: boolean;
  isTouchLocked: boolean;
  currentPosition: Position;

  constructor() {
    this.cursorEl = document.getElementById("cursor");

    document.addEventListener("mousemove", this.mousemove.bind(this));
    document.addEventListener("scroll", this.scroll.bind(this));
    document.addEventListener("touchstart", this.touchstart.bind(this));

    const textCursorNodes = Array.from(
      document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, dd, dt, figcaption, blockquote",
      ),
    );

    textCursorNodes.forEach((el) =>
      this.bindTextCursorNodes(el as HTMLElement),
    );

    // const btnNodes = Array.from(
    //   document.querySelectorAll(
    //     ".btn, .fab, .home .tile, .tile--hover, .footer a, .newsletter__button",
    //   ),
    // );

    // btnNodes.forEach((el) => this.bindBtnNodes(el as HTMLElement));

    this.currentDiameter = DEFAULT_CURSOR_SIZE / 2;
    this.isCursorLocked = false;
    this.isTouchLocked = false;
    this.currentPosition = {
      x: 0,
      y: 0,
    };
  }

  scroll() {
    if (!this.isCursorLocked && !this.isTouchLocked && this.cursorEl) {
      this.cursorEl.style.top = this.currentPosition.y + window.scrollY + "px";
      this.cursorEl.style.left = this.currentPosition.x + window.scrollX + "px";
    }
  }

  mousemove({ x, y }: Position) {
    this.currentPosition = {
      x: x,
      y: y,
    };
    if (!this.isCursorLocked && !this.isTouchLocked && this.cursorEl) {
      this.cursorEl.style.top =
        this.currentPosition.y + window.pageYOffset + "px";
      this.cursorEl.style.left =
        this.currentPosition.x + window.pageXOffset + "px";
    }
  }

  touchstart() {
    if (!this.cursorEl) return;
    this.cursorEl.style.display = "none";
    this.isTouchLocked = true;
  }

  bindTextCursorNodes(el: HTMLElement) {
    const fontSize = parseInt(
      window
        .getComputedStyle(el)
        .getPropertyValue("font-size")
        .replace("px", ""),
    );

    el.addEventListener(
      "mouseover",
      () => {
        if (!this.isTouchLocked && this.cursorEl) {
          this.currentDiameter = fontSize * 1.4;
          this.cursorEl.style.height = this.currentDiameter + "px";
          this.cursorEl.classList.add("cursor--text");
        }
      },
      {
        passive: true,
      },
    );

    el.addEventListener(
      "mouseout",
      () => {
        if (!this.isTouchLocked && this.cursorEl) {
          this.currentDiameter = DEFAULT_CURSOR_SIZE;
          this.cursorEl.removeAttribute("style");
          this.cursorEl.classList.remove("cursor--text");
        }
      },
      {
        passive: true,
      },
    );
  }

  // bindBtnNodes(el: HTMLElement) {
  //   let rect: DOMRect | null = null;

  //   el.addEventListener("mouseenter", () => {
  //     if (this.isTouchLocked) return;
  //     this.isCursorLocked = true;
  //     rect = el.getBoundingClientRect();
  //     const borderRadius = window
  //       .getComputedStyle(el)
  //       .getPropertyValue("border-radius")
  //       .replace("px", "");
  //     if (!this.cursorEl) return;
  //     this.cursorEl.classList.add("is-locked");
  //     this.cursorEl.style.width = rect.width + "px";
  //     this.cursorEl.style.height = rect.height + "px";
  //     this.cursorEl.style.borderRadius = borderRadius + "px";
  //     this.cursorEl.style.left =
  //       rect.x + window.pageXOffset + rect.width / 2 + "px";
  //     this.cursorEl.style.top =
  //       rect.y + window.pageYOffset + rect.height / 2 + "px";
  //   });

  //   el.addEventListener("mousemove", (event) => {
  //     if (this.isTouchLocked) return;
  //     if (!rect) return;
  //     const halfHeight = rect.height / 2;
  //     const topOffset = (event.y - rect.top - halfHeight) / halfHeight;
  //     const halfWidth = rect.width / 2;
  //     const leftOffset = (event.x - rect.left - halfWidth) / halfWidth;
  //     if (this.cursorEl)
  //       this.cursorEl.style.transform = `translate(calc(-50% + ${leftOffset}px), calc(-50% + ${topOffset}px))`;
  //     if (el.matches(".tile, .btn, a:not(.fab)"))
  //       el.style.transform = `translate(${leftOffset * 6}px, ${topOffset * 6}px)`;
  //     if (el.classList.contains("fab")) {
  //       const isToggled = el.classList.contains("fab--toggled");
  //       const extra = isToggled ? 45 : 0;
  //       if (el.firstElementChild)
  //         (el.firstElementChild as HTMLElement).style.transform =
  //           `translate(${leftOffset * 6}px, ${topOffset * 6}px) rotate(${extra}deg)`;
  //     }
  //   });
  //   el.addEventListener("mouseleave", () => {
  //     if (this.isTouchLocked) return;
  //     this.isCursorLocked = false;
  //     if (this.cursorEl) {
  //       this.cursorEl.classList.remove("is-locked");
  //       this.cursorEl.classList.remove("cursor--text");
  //       this.cursorEl.style.borderRadius = "100%";
  //       this.cursorEl.style.width = DEFAULT_CURSOR_SIZE + "px";
  //       this.cursorEl.style.height = DEFAULT_CURSOR_SIZE + "px";
  //     }
  //     el.removeAttribute("style");
  //     if (el.firstElementChild) el.firstElementChild.removeAttribute("style");
  //   });
  // }
}

export default Cursor;

"use client"
import { HTMLAttributes, useEffect, useRef } from "react"
import styles from "./style.module.css"


export type Props = HTMLAttributes<HTMLDivElement>

function Marquee(props: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            Array.from(ref.current.children).forEach(child => {
                const duplicatedChild = child.cloneNode(true);
                ref.current?.appendChild(duplicatedChild);
            })
        }
    }, [])

    return (
        <div className="w-full h-full overflow-x-hidden">
            <div className={`${styles.marquee} ${props.className}`} ref={ref}>
                {props.children}
            </div>
        </div>
    )
}

export default Marquee
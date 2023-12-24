import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Cursor() {

    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <motion.div
        className="cursor hidden md:block"
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
        }}
        initial={{ opacity: 0, scale: 0.5}}
        animate={{ opacity: 1, scale: 1}}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        >

        </motion.div>
    )
}
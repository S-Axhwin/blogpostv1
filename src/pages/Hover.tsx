import "./styles.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer.tsx";

export default function App({className}:any) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} className={`box rounded-full ${className} w-4 h-4 bg-primary`}style={{ x, y }} />;
}

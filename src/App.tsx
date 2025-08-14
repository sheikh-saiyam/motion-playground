import { motion } from "motion/react";

const App = () => {
  return (
    <div className="py-20 container mx-auto px-6">
      <motion.h1
        animate={{
          x: [1000, 0,],
        }}
        transition={{
          duration: 2, 
          ease: "anticipate"
        }}
        className="text-2xl font-semibold"
      >
        Motion Playground...
      </motion.h1>
    </div>
  );
};

export default App;

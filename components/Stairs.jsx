import { motion } from "motion/react"; 

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

const reserveIndex = (index) => {
    const totalSleep = 6;
    return totalSleep - index;
};

const Stairs = () => {
    return (
        <>
            {[...Array(10)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reserveIndex(index) * 0.1,
                        }}
                        className="h-full w-full bg-white relative"
                    />
                );
            })}
        </>
    );
};

export default Stairs;

import * as motion from "motion/react-client"
import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Box, Text } from "@repo/ui";


const Header = () => {
  const header = useRef<HTMLHeadingElement>(null);


  const [showStickyHeader, setShowStickyHeader] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (!header.current) {
      return;
    }

    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowStickyHeader(false);
          } else {
            setShowStickyHeader(true);
          }
        });
      }
    );

    headerObserver.observe(header.current);
  }, [])


  return (
    <>
      <Box
        as="header"
        ref={header}
        className="relative p-4 pt-24 bg-gradient-to-b from-primary-400 to-primary-600 overflow-hidden flex justify-end"
      >
        <motion.span whileHover={{ scale: 1.125, rotate: '-8deg' }} >
          <Text as="h1" className="inline-block text-text-light pr-4">Park Dyel</Text>
        </motion.span>
      </Box>
      {showStickyHeader &&
        <>
          <motion.header layout initial={{ opacity: 0.25 }}
            animate={{ opacity: 1 }} exit={{ opacity: 0.25 }}
            className="sticky top-0 bg-primary-600 p-2">
            <Text as="h6" className="inline-block text-text-light pr-4">Park Dyel</Text>
          </motion.header>
          <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white" style={{ originX: 0, scaleX: scrollYProgress }} />
        </>
      }
    </>)
}

export default Header;
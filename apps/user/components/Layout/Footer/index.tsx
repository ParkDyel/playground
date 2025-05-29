import { Box, Text } from "@repo/ui";
import { motion } from "motion/react";

interface FooterProps {
  onDetail: () => void;
}

const Footer = ({ onDetail }: FooterProps) => {
  return (
    <Box as="footer" className="sticky bottom-0 bg-primary-400 p-2">
      <Box as={motion.button} onClick={onDetail} className="text-blue-700" whileHover={{ originX: 0, scale: 1.05 }}>
        <Text>저에 대해서 궁금하신가요?</Text>
      </Box>
    </Box>
  );
};

export default Footer;
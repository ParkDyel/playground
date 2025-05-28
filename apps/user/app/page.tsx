"use client";

import { Text, useModal, Modal, Button, Box } from "@repo/ui";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Page = () => {
  const { ModalWrap, handleModalOpen, handleModalClose } = useModal();
  const handleClick = async () => {
    await handleModalOpen();
  };

  const handleClose = async () => {
    handleModalClose({ type: "close" });
  };

  return (
    <>
      <article className="p-4">
        <Text>안녕하세요, 저는 Dyel입니다. </Text>
        <button onClick={handleClick} className="underline text-blue-500">
          <Text>저에 대해서 궁금하신가요?</Text>
        </button>
      </article>
      <ModalWrap>
        <Modal.ContentWrap>
          <Box>
            <Text as="h3">안녕하세요, 저는 Dyel입니다.</Text>
            <Text as="a">프론트엔드 개발을 하고 있는 유사 ㄱH발자입니다.</Text>
            <Box className="flex gap-2 mt-4 justify-center">
              <Button onClick={handleClose}>그렇군요</Button>
              <Link href="https://github.com/parkdyel" target="_blank" rel="noopener noreferrer">
                <Button onClick={handleClose} variant="primary" >
                  <FaGithub className="text-[1.2em]" />
                  GitHub에 가보기
                </Button>
              </Link>
            </Box>
          </Box>
        </Modal.ContentWrap>
      </ModalWrap>
    </>
  );
};

export default Page;

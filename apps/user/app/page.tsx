"use client";

import { Text, useModal, Modal, Button, Box } from "@repo/ui";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";


const Page = () => {

  const { ModalWrap, handleModalOpen, handleModalClose } = useModal();

  const handleClick = async () => {
    const res = await handleModalOpen();
  };


  return (
    <>
      <Header />
      <Box className="h-[calc(100dvh-1em)] bg-bg-dark">
        1
      </Box>
      <article>

      </article>
      <Footer onDetail={handleClick} />
      <ModalWrap>
        <Modal.ContentWrap>
          <Box>
            <Text>프론트엔드 개발을 하고 있는 유사 ㄱH발자입니다.</Text>
            <Box className="flex gap-2 mt-4 justify-center">
              <Button onClick={() => handleModalClose({ type: "close" })}>그렇군요</Button>
              <Link href="https://github.com/parkdyel" target="_blank" rel="noopener noreferrer">
                <Button onClick={() => handleModalClose({ type: "confirm" })} variant="primary" >
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

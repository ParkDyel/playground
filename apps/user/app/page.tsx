"use client";

import { Text, useModal, Modal, Button, Box } from "@repo/ui";

const Page = () => {
  const { ModalWrap, handleModalOpen } = useModal();
  const handleClick = () => {
    handleModalOpen();
  }

  return (
    <>
      <article className="p-4">
        <Text>안녕하세요, 저는 Dyel입니다.{' '}</Text>
        <button onClick={handleClick} className="underline text-blue-500">
          <Text>저에 대해서 궁금하신가요?</Text>
        </button>
      </article>
      <ModalWrap>
        <Modal.ContentWrap>
          <Box>
            <Text as="h3">안녕하세요, 저는 Dyel입니다.</Text>
            <Text>프론트엔드 개발을 하고 있는 유사 ㄱH발자입니다.</Text>
            <Box className="flex gap-2 mt-4 justify-center">
              <Button>더 알아보기</Button>
              <Button>그렇군요</Button>
            </Box>
          </Box>
        </Modal.ContentWrap>
      </ModalWrap>
    </>
  );
};

export default Page;

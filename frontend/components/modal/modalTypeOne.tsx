import React from "react";
import { Modal, Button, Text } from "@nextui-org/react";

export interface ModalProps {
  visibleMod: boolean;
  onClickCloses: () => void;
  textModal: string;
}

export default function ModalTypeOne(props: ModalProps) {
  const closeHandler = () => {
    props.onClickCloses();
  };
  return (
    <Modal
      closeButton
      preventClose
      aria-labelledby="modal-title"
      open={props.visibleMod}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Дякую що ви з нами!
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text id="modal-title" size={18}>
          {props.textModal}
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="primary" onPress={closeHandler}>
          Закрити
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export interface ModalFrameProps {
  handleModal: (e: React.MouseEvent<HTMLDivElement>) => void;
  state: boolean;
  children: React.ReactNode;
}
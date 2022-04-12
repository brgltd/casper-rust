export default interface TopbarModalProps {
  isOpen: boolean;
  numCorrect: number;
  numLevels: number;
  onClose: () => void;
}

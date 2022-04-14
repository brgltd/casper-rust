export default interface TopbarModalProps {
  isOpen: boolean;
  numCorrect: number;
  numRemaining: number;
  onClose: () => void;
}

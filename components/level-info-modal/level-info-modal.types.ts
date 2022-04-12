export default interface LevelInfoModalProps {
  id: number;
  numRemaining: number;
  isOpen: boolean;
  isCorrect: boolean;
  onClose: () => void;
}

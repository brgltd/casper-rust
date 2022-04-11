import { MutableRefObject } from "react";
import type monaco from "monaco-editor";

export default interface LevelInfoProps {
  id: number;
  numLevels: number;
  editorRef: MutableRefObject<null | monaco.editor.IStandaloneCodeEditor>;
  expectedValue: string;
}

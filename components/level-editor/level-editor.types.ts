import type monaco from "monaco-editor";
import { MutableRefObject } from "react";

export default interface LevelEditorProps {
  editorRef: MutableRefObject<null | monaco.editor.IStandaloneCodeEditor>;
}

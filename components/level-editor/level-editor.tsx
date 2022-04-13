import Editor from "@monaco-editor/react";
import getDynamicHeight from "../../utils/get-dynamic-height";
import type monaco from "monaco-editor";
import type LevelEditorProps from "./level-editor.types";
import styles from "./level-editor.module.css";

export default function LevelEditor({
  editorRef,
  initialValue,
}: LevelEditorProps): JSX.Element {
  function onMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }

  return (
    <div className={styles.wrapper}>
      <Editor
        className={styles.monaco}
        height={getDynamicHeight()}
        defaultLanguage="rust"
        defaultValue={initialValue}
        theme="vs-dark"
        onMount={onMount}
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          tabSize: 4,
        }}
      />
    </div>
  );
}

import Editor from "@monaco-editor/react";
import getDynamicHeight from "../../utils/get-dynamic-height";
import styles from "./level-editor.module.css";

const value = `fn set_key<T: ToBytes + CLTyped>(name: &str, value: T) {
  match runtime::get_key(name) {
    Some(key) => {
      let key_ref = key.try_into().unwrap_or_revert(); // this is a really long line, I want to know a way to handle this
      storage::write(key_ref, value);
    }
    None => {
      let key = storage::new_uref(value).into();
      runtime::put_key(name, key);
    }
  }
}`;

export default function LevelEditor(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Editor
        className={styles.monaco}
        height={getDynamicHeight()}
        defaultLanguage="rust"
        defaultValue={value}
        theme="vs-dark"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
        }}
      />
    </div>
  );
}

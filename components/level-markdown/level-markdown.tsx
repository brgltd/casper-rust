import { useState, useEffect } from "react";
import Prism from "prismjs";
import { Scrollbars } from "react-custom-scrollbars";
import type ContentHTML from "../../types/content-html";
import type RenderThumbnailVertical from "./level-markdown.types";
import "prismjs/components/prism-rust.min";
import "prismjs/themes/prism-tomorrow.css";
import styles from "./level-markdown.module.css";

export default function LevelMarkdown({
  contentHTML,
}: ContentHTML): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  function onMouseEnter() {
    setIsHover(true);
  }

  function onMouseLeave() {
    setIsHover(false);
  }

  function renderThumbVertical({ style }: RenderThumbnailVertical) {
    return (
      <div
        style={{
          ...style,
          backgroundColor: "#a7a7a7",
          opacity: isHover ? 1 : 0,
          borderRadius: "20px",
          willChange: "opacity",
          transition: "opacity 800ms",
        }}
      />
    );
  }

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <article onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Scrollbars
        style={{ width: "100%", height: "100vh" }}
        renderThumbVertical={renderThumbVertical}
        universal
      >
        <div
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: contentHTML }}
        />
      </Scrollbars>
    </article>
  );
}

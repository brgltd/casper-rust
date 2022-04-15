const CONFIG = Object.freeze({
  // ISR revalidation time
  REVALIDATE: parseInt(process.env.REVALIDATE || "120"),

  // Breakpoint in px
  BREAKPOINT: 993,

  // Throttle time in ms
  THROTTLE: 100,

  // URLs
  GITHUB: "https://github.com/brgltd/casper-interactive-tutorial",
  CASPER: "https://docs.casperlabs.io/",
  ANSWERS:
    "https://github.com/brgltd/casper-interactive-tutorial/blob/main/content-metadata/expected-values",
  SITE: "https://casper-rust.vercel.app/",
});

export default CONFIG;

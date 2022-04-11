const CONFIG = Object.freeze({
  // ISR revalidation time
  REVALIDATE: parseInt(process.env.REVALIDATE || "120"),

  // Mobile breakpoint in px
  BREAKPOINT: 768,

  // Throttle time in ms
  THROTTLE: 100,

  // URLs
  GITHUB: "https://github.com/brgltd/casper-interactive-tutorial",
  CASPER: "https://docs.casperlabs.io/",
  ANSWERS:
    "https://github.com/brgltd/casper-interactive-tutorial/expected-values/content-metadata",
});

export default CONFIG;

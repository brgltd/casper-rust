const config = {
  revalidate: parseInt(process.env.REVALIDATE || "120"),
};

export default config;

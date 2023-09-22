const config = {
  webServer: {
    command: 'npm run start',
    port: 3000,
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
      },
    },
  ],
};

export default config;

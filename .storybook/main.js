module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  // ? Storybook 구성파일 변경하기. 응용 프로그램의 CSS 파일을 사용할 수 있음.
  stories: ["../src/components/**/*.stories.js"],

  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
};

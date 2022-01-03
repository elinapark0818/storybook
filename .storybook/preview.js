// ? Storybook 구성파일 변경하기. 응용 프로그램의 CSS 파일을 사용할 수 있음.
import "../src/index.css";

// ? 👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
// * parameters 는 일반적으로 Storybook의 기능과 애드온 동작을 제어하는데 사용된다.

// * actions : 클릭하면 Storybook UI 의 작업 패널을 나타내는 콜백을 만들 수 있다.
// * => 핀 버튼을 만들 때 UI에서 버튼 클릭이 성공했는지 확인할 수 있다.

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

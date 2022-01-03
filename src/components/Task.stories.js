import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

// * Template.bind({}) : 표준 자바스크립트 함수의 복사본을 만드는 기술.
// * => 이 기술을 사용하여 내보낸 각 스토리가 고유한 속성을 설정할 수 있는 동일한 구현을 사용한다

export const Default = Template.bind({});

// * args : Storybook을 다시 시작하지 않아도 컨트롤 애드온으로 구성요소를 실시간 편집할 수 있다.
// * => args 값이 변경되면 구성요소도 변경된다.

Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updateAt: new Date(2022, 0, 1, 0, 3),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

import 헤드라인 from './헤드라인';

/**@type{import('@storybook/react').Meta} */
export default {
  component: 헤드라인,
};

/**@type{import('@storybook/react').StoryObj} */
export const 기본표시 = {
  // props를 스토리북에서는 args 라고 부릅니다.
  args: {
    children: '테스트지롱',
  },
};

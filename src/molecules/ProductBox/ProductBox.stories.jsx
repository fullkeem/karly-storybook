import ProductBox from './ProductBox';

/**@type{import('@storybook/react').Meta} */
export default {
  component: ProductBox,
};

/**@type{import('@storybook/react').StoryObj} */
export const 기본표시 = {
  args: {
    isKalryOnly: true,
    is한정수량: true,
    is샛별배송: true,
  },
};

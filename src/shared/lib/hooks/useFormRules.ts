import { Rule } from 'antd/es/form';

export const useFormRules = () => {
  const rules = {
    required: (message = 'Обязательно к заполнению'): Rule => ({
      required: true,
      message,
    }),
  };

  return rules;
};

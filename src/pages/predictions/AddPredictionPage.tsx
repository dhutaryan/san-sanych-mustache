import { Button } from 'antd';

import { PredictionForm, PredictionFormValue } from '@features/predictions';

import { PageTitle } from '@shared/ui';

const AddPredictionPage = () => {
  const onSubmit = (values: PredictionFormValue) => {
    console.log(values);
  };

  return (
    <>
      <PageTitle
        title="Новый прогноз"
        action={
          <Button type="primary" htmlType="submit" form="prediction-form">
            Создать
          </Button>
        }
      />

      <PredictionForm submit={onSubmit} />
    </>
  );
};

export default AddPredictionPage;

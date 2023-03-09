import styled from '@emotion/styled';
import { DatePicker, DatePickerProps, Space } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

import { PastPredictions, PredictionsPeriodParam } from '@widgets/predictions';

import { PageTitle } from '@shared/ui';

const DateMonthPicker = styled(DatePicker)`
  max-width: 20rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const StatisticsPage = () => {
  const today = dayjs();
  const [period, setPeriod] = useState<PredictionsPeriodParam>({
    month: today.month(),
    year: today.year(),
  });
  const onDateChange: DatePickerProps['onChange'] = (date) => {
    if (date) {
      setPeriod({ month: date.month(), year: date.year() });
    }
  };

  return (
    <Space direction="vertical">
      <PageTitle title="Статистика" />
      <DateMonthPicker
        picker="month"
        placeholder="Выберите дату"
        format="MMMM YYYY"
        allowClear={false}
        defaultValue={today}
        onChange={onDateChange}
      />
      <PastPredictions period={period} />
    </Space>
  );
};

export default StatisticsPage;

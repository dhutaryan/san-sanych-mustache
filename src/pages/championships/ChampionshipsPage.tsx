import { ChampionshipsList } from '@widgets/championships';

import { AddChampionship } from '@features/championships';

import { PageTitle } from '@shared/ui';

const ChampionshipsPage = () => {
  return (
    <>
      <PageTitle title="Список чемпионатов" action={<AddChampionship />} />
      <ChampionshipsList />
    </>
  );
};

export default ChampionshipsPage;

import { ChampionshipsList } from '@widgets/championships';

import { PageTitle } from '@shared/ui';

const ChampionshipsPage = () => {
  return (
    <>
      <PageTitle title="Список чемпионатов" />
      <ChampionshipsList />
    </>
  );
};

export default ChampionshipsPage;

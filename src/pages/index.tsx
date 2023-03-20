import { Spin } from 'antd';
import { FC, lazy, ReactNode, Suspense } from 'react';
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom';

import { useSessiontUser } from '@entities/session';

import { RoutePath } from '@shared/lib';

const PredictionsPage = lazy(() => import('./predictions/PredictionsPage'));
const AddPredictionPage = lazy(() => import('./predictions/AddPredictionPage'));
const StatisticsPage = lazy(() => import('./statistics/StatisticsPage'));

const ChampionshipsPage = lazy(
  () => import('./championships/ChampionshipsPage'),
);

const ROUTES: RouteProps[] = [
  {
    path: RoutePath.PREDICTIONS,
    element: <PredictionsPage />,
  },
  {
    path: RoutePath.STATISTICS,
    element: <StatisticsPage />,
  },
];

const PRIVATE_ROUTES: RouteProps[] = [
  {
    path: RoutePath.ADD_PREDICTION,
    element: <AddPredictionPage />,
  },
  {
    path: RoutePath.CHAMPIONSHIPS,
    element: <ChampionshipsPage />,
  },
];

export const Routing = () => {
  const { isAdmin } = useSessiontUser();

  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<SuspenseElement element={route.element} />}
        />
      ))}

      {isAdmin &&
        PRIVATE_ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<SuspenseElement element={route.element} />}
          />
        ))}
      <Route
        path="*"
        element={<Navigate to={RoutePath.PREDICTIONS} replace />}
      />
    </Routes>
  );
};

const SuspenseElement: FC<{ element: ReactNode }> = ({ element }) => {
  return (
    <Suspense fallback={<Spin delay={300} className="overlay" size="large" />}>
      {element}
    </Suspense>
  );
};

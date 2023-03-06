import { Spin } from 'antd';
import { lazy, Suspense } from 'react';
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom';

import { RoutePath } from '@shared/lib';

const PredictionsPage = lazy(() => import('./predictions/PredictionsPage'));
const StatisticsPage = lazy(() => import('./statistics/StatisticsPage'));

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

export const Routing = () => {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense
              fallback={<Spin delay={300} className="overlay" size="large" />}
            >
              {route.element}
            </Suspense>
          }
        />
      ))}
      <Route
        path="*"
        element={<Navigate to={RoutePath.PREDICTIONS} replace />}
      />
    </Routes>
  );
};

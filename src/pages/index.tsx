import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PredictionsPage = lazy(() => import('./predictions/PredictionsPage'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<PredictionsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

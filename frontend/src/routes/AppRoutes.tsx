import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { StudentDashboardPage } from '../pages/StudentDashboardPage';
import { SubjectExplorerPage } from '../pages/SubjectExplorerPage';
import { SchedulePlannerPage } from '../pages/SchedulePlannerPage';
import { GeneratedResultsPage } from '../pages/GeneratedResultsPage';
import { SavedSchedulesPage } from '../pages/SavedSchedulesPage';
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rutas Públicas */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegisterPage />} />

      {/* Rutas Protegidas para Estudiantes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <StudentDashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/explorador"
        element={
          <ProtectedRoute>
            <SubjectExplorerPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/planificador"
        element={
          <ProtectedRoute>
            <SchedulePlannerPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/generados"
        element={
          <ProtectedRoute>
            <GeneratedResultsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/guardados"
        element={
          <ProtectedRoute>
            <SavedSchedulesPage />
          </ProtectedRoute>
        }
      />

      {/* Rutas Protegidas para Administradores */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute requireAdmin={true}>
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

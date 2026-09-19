import React, { createContext, useContext, useState, useEffect } from 'react';
import { ConflictValidationResult, Group, Subject } from '../types';
import { scheduleApi } from '../api/schedule.api';

interface SchedulePlannerContextType {
  periodoId: number;
  setPeriodoId: (id: number) => void;
  selectedSubjects: Subject[];
  selectedGroups: Group[];
  conflictResult: ConflictValidationResult | null;
  isValidating: boolean;
  toggleSubject: (subject: Subject) => void;
  removeSubject: (subjectId: number) => void;
  selectGroup: (group: Group) => void;
  removeGroup: (groupId: number) => void;
  applyGroupCombination: (groups: Group[]) => void;
  clearAll: () => void;
}

const SchedulePlannerContext = createContext<SchedulePlannerContextType | undefined>(undefined);

export const SchedulePlannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [periodoId, setPeriodoId] = useState<number>(1); // Default a 1 (2026-2)
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<Group[]>([]);
  const [conflictResult, setConflictResult] = useState<ConflictValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  // Validar conflictos en tiempo real cuando cambian los grupos seleccionados
  useEffect(() => {
    if (selectedGroups.length === 0) {
      setConflictResult(null);
      return;
    }

    const groupIds = selectedGroups.map((g) => g.id);
    setIsValidating(true);
    scheduleApi.validateConflicts(groupIds)
      .then((res) => {
        setConflictResult(res);
      })
      .catch(() => {
        // En caso de error de red
      })
      .finally(() => {
        setIsValidating(false);
      });
  }, [selectedGroups]);

  const toggleSubject = (subject: Subject) => {
    setSelectedSubjects((prev) => {
      const exists = prev.some((s) => s.id === subject.id);
      if (exists) {
        // Remover grupos asociados al quitar la materia
        setSelectedGroups((grpPrev) => grpPrev.filter((g) => g.materiaId !== subject.id));
        return prev.filter((s) => s.id !== subject.id);
      } else {
        return [...prev, subject];
      }
    });
  };

  const removeSubject = (subjectId: number) => {
    setSelectedSubjects((prev) => prev.filter((s) => s.id !== subjectId));
    setSelectedGroups((prev) => prev.filter((g) => g.materiaId !== subjectId));
  };

  const selectGroup = (group: Group) => {
    setSelectedGroups((prev) => {
      // Regla: Reemplazar el grupo de la misma materia si ya existía uno
      const filtered = prev.filter((g) => g.materiaId !== group.materiaId);
      return [...filtered, group];
    });
  };

  const removeGroup = (groupId: number) => {
    setSelectedGroups((prev) => prev.filter((g) => g.id !== groupId));
  };

  const applyGroupCombination = (groups: Group[]) => {
    setSelectedGroups(groups);
  };

  const clearAll = () => {
    setSelectedSubjects([]);
    setSelectedGroups([]);
    setConflictResult(null);
  };

  return (
    <SchedulePlannerContext.Provider value={{
      periodoId,
      setPeriodoId,
      selectedSubjects,
      selectedGroups,
      conflictResult,
      isValidating,
      toggleSubject,
      removeSubject,
      selectGroup,
      removeGroup,
      applyGroupCombination,
      clearAll
    }}>
      {children}
    </SchedulePlannerContext.Provider>
  );
};

export const useSchedulePlanner = () => {
  const context = useContext(SchedulePlannerContext);
  if (!context) {
    throw new Error('useSchedulePlanner debe ser usado dentro de SchedulePlannerProvider');
  }
  return context;
};

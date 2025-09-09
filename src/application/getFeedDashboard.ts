import type { Dashboard } from "../domain/Dashboard";
import type { DashboardRepository } from "../domain/DashboardRepository";

// Это наш Use Case (сценарий использования)
export const getFeedDashboard = (postRepository: DashboardRepository): Dashboard[] => {

  return postRepository.findAll();
};
import type { Dashboard } from "./Dashboard";

export interface DashboardRepository {
  findAll(): Dashboard[];
}
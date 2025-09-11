import type { Dashboard } from "./Dashboard";

export interface DashboardRepository {
  findAll(): { [userId: string]: Dashboard };
}
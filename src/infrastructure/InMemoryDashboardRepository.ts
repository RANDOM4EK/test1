import type { Dashboard } from "../domain/Dashboard";
import type { DashboardRepository } from "../domain/DashboardRepository";

import profileImage from '../../image/profileIcon.png';
import findFrendsImage from '../../image/findFrendsIcon.png';
import analyticsImage from '../../image/activityIconHeader.png';
import settingsImage from '../../image/settingsIcon.png';
import securityImage from '../../image/securityDataIcon.png';
import logOutImage from '../../image/logOutIcon.png';

// 👇 Привязываем Dashboard к конкретному userId
const panel: { [userId: string]: Dashboard } = {
  "user-steve": {
    explorePanel: {
      profile: "profile",
      profileImageUrl: profileImage,
      findFrends: "findFrends",
      findFrendsImageUrl: findFrendsImage,
      analytics: "analytics",
      analyticsImageUrl: analyticsImage,
    },
    settingsPanel: {
      settings: "settings",
      settingsImageUrl: settingsImage,
      security: "security",
      securityImageUrl: securityImage,
      logOut: "logOut",
      logOutImageUrl: logOutImage,
    },
  },
  // Можно добавить других пользователей по аналогии
};

export const InMemoryDashboardRepository: DashboardRepository = {
  findAll(): { [userId: string]: Dashboard } {
    return panel;
  },
};
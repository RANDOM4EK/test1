import type { Dashboard } from "../domain/Dashboard";
import type { DashboardRepository } from "../domain/DashboardRepository";

import profileImage from '../../image/profileIcon.png'
import findFrendsImage from '../../image/findFrendsIcon.png'
import analyticsImage from '../../image/activityIconHeader.png'
import settingsImage from '../../image/settingsIcon.png'
import securityImage from '../../image/securityDataIcon.png'
import logOutImage from '../../image/logOutIcon.png'

const panel: Dashboard[] = [
  {
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
];

export const InMemoryDashboardRepository: DashboardRepository = {
  findAll(): Dashboard[] {
    return panel;
  },
};

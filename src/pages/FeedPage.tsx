import { Flex } from "@chakra-ui/react";
import Header from "../component/Header";
import PostPanel from "../component/PostPanel";
import SocialPanel from "../component/SocialPanel";
import UserPanel from "../component/UserPanel";

// 1. Импортируем наши новые части
import { inMemoryPostRepository } from '../infrastructure/InMemoryPostRepository';
import { getFeedPosts } from '../application/getFeedPosts';
import { getCurrentUser } from "../application/getCurrentUser";
import { inMemoryUserRepository } from "../infrastructure/InMemoryUserRepository";
import { getFeedDashboard } from "../application/getFeedDashboard";
import { InMemoryDashboardRepository } from "../infrastructure/InMemoryDashboardRepository";

function FeedPage() {
  // 2. "Собираем" зависимости и получаем данные
  // В реальном приложении это может быть внутри useEffect
  const posts = getFeedPosts(inMemoryPostRepository);
  const currentUser = getCurrentUser(inMemoryUserRepository)
  const dashboard = getFeedDashboard(InMemoryDashboardRepository)

  return (
    <Flex flexDirection="column">
      <Header />
      <Flex>
        <UserPanel user={currentUser} dashboard={dashboard} />
        <PostPanel posts={posts} />
        <SocialPanel />
      </Flex>
    </Flex>
  );
}

export default FeedPage;
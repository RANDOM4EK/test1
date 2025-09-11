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
import { getFeedHeader } from "../application/getFeedHeader";
import { InMemoryHeaderRepository } from '../infrastructure/InMemoryHeaderRepository'
import { getFeedBuzzBoard } from "../application/getFeedBuzzBoard";
import { InMemoryBuzzBoardRepository } from "../infrastructure/InMemmoryBuzzBoardRepository";


function FeedPage() {
  // 2. "Собираем" зависимости и получаем данные
  // В реальном приложении это может быть внутри useEffect
  const posts = getFeedPosts(inMemoryPostRepository);
  const currentUser = getCurrentUser(inMemoryUserRepository)
  const dashboard = getFeedDashboard(InMemoryDashboardRepository)
  const headerelem = getFeedHeader(InMemoryHeaderRepository)
  const buzzElem = getFeedBuzzBoard(InMemoryBuzzBoardRepository)

  return (
    <Flex flexDirection="column">
      <Header headerElem={headerelem}/>
      <Flex>
        <UserPanel user={currentUser} dashboard={dashboard} />
        <PostPanel posts={posts} />
        <SocialPanel buzzElem={buzzElem}/>
      </Flex>
    </Flex>
  );
}

export default FeedPage;
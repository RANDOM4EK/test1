import { Flex, Image, Text } from "@chakra-ui/react";
import type { User } from "../domain/User";
import type { Dashboard } from "../domain/Dashboard";

type Props = {
  user: User | null; // 👈 один пользователь
  dashboard: { [userId: string]: Dashboard }; // 👈 dashboard по userId
};

function UserPanel({ user, dashboard }: Props) {
  if (!user) return null;

  const dash = dashboard[user.id]; // 👈 получаем dashboard по user.id
  if (!dash) return null;

  return (
    <Flex flexDirection="row" justifyContent="center" padding="24px">
      <Flex width="250px" flexDirection="column" paddingTop="40px">
        <Image
          src={user.avatarUrl}
          width="100px"
          height="100px"
          borderRadius="full"
          alt={`${user.name} avatar`}
        />
        <Text fontSize="xl" fontWeight="bold" marginTop="12px">
          {user.name}
        </Text>

        {/* Explore Panel */}
        <Flex flexDirection="column" width="100%" marginTop="40px" gap="12px">
          <Text fontSize="md" fontWeight="semibold">Explore Panel</Text>
          <Flex gap="10px" alignItems="center">
            <Image src={dash.explorePanel.profileImageUrl} boxSize="20px" />
            <Text>{dash.explorePanel.profile}</Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Image src={dash.explorePanel.findFrendsImageUrl} boxSize="20px" />
            <Text>{dash.explorePanel.findFrends}</Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Image src={dash.explorePanel.analyticsImageUrl} boxSize="20px" />
            <Text>{dash.explorePanel.analytics}</Text>
          </Flex>
        </Flex>

        {/* Settings Panel */}
        <Flex flexDirection="column" width="100%" marginTop="40px" gap="12px">
          <Text fontSize="md" fontWeight="semibold">Settings</Text>
          <Flex gap="10px" alignItems="center">
            <Image src={dash.settingsPanel.settingsImageUrl} boxSize="20px" />
            <Text>{dash.settingsPanel.settings}</Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Image src={dash.settingsPanel.securityImageUrl} boxSize="20px" />
            <Text>{dash.settingsPanel.security}</Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Image src={dash.settingsPanel.logOutImageUrl} boxSize="20px" />
            <Text>{dash.settingsPanel.logOut}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default UserPanel;
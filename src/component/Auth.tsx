import { Flex, Stack, Input, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Здесь можно добавить проверку email и пароля
    if (email && password) {
      // Условно считаем, что вход успешен
      navigate("/"); // Переход на FeedPage
    } else {
      alert("Введите email и пароль");
    }
  };

  return (
    <Flex
      width="300px"
      bg="gray.100"
      padding="24px"
      borderRadius="md"
      boxShadow="md"
      direction="column"
      align="center"
      justify="center"
    >
      <Heading size="md" marginBottom="16px" color="gray.700">
        Авторизация
      </Heading>
      <Stack spacing={4} width="100%">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          type="password"
        />
        <Button colorScheme="blue" onClick={handleLogin}>
          Войти
        </Button>
      </Stack>
    </Flex>
  );
}

export default AuthForm;
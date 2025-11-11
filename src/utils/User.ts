export const FAKE_USER = {
  username: "TestUser",
  password: "123456",
}

export const createMockToken = () => {
  const payload = {
    sub: "1234567890",
    name: "John Doe",
    iat: Date.now() / 1000,
    exp: Date.now() / 1000 + 60,
  }

  return btoa(JSON.stringify(payload)) + ".khdehflkewfoieckvvneuhv"
}

export const parseMockToken = (token: string) => {
  try {
    const [payload] = token.split(".")
    return JSON.parse(atob(payload))
  } catch {
    return null
  }
}

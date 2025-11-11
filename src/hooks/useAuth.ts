import { useEffect, useState } from "react"
import { createMockToken, parseMockToken } from "../utils/User"

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"))


  useEffect(() => {
    const interval = setInterval(() => {
      const existing = localStorage.getItem("token")
      if (!existing) return

      const payload = parseMockToken(existing)
      if (payload && payload.exp * 1000 < Date.now() + 10_000) {
        const newToken = createMockToken()
        console.log("Token refreshed")
        localStorage.setItem("token", newToken)
        setToken(newToken)
      }
    }, 5000) //check every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return { token }
}

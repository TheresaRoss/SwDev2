export default async function getUserData(token: string) {
  const res = await fetch("http://localhost:5001/api/v1/auth/me", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Boom");
  }
  return await res.json();
}

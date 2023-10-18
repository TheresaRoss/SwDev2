export default async function userLogin(Email: string, Password: string) {
  //console.log(Email, Password);
  const res = await fetch("http://localhost:5001/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: Email ? Email : "",
      password: Password ? Password : "",
    }),
    cache: "no-cache",
  });
  if (!res.ok) {
    const err = await res.json();
    //console.log(err);
    throw new Error(err.msg);
  }

  return await res.json();
}

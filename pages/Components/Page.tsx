async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data = await getPosts()
  console.log('testing to see if data passes through', data)
  return (
    <>
      <h1>Hell this is a test</h1>
    </>
  )
}

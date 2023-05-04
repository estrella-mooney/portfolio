import getPostsAPI from '../api/getPosts'

// export async function getPosts() {
//   console.log('Fetching posts...')
//   const res = await fetch('http://localhost:3000')
//   if (!res.ok) {
//     console.log('Response status', res.status)
//   }
//   const data = await res.json()
//   console.log('API response:', data)
//   return data
// }

export async function getPosts() {
  const res = await fetch('http://localhost:3000/api/getPosts')
  if (!res.ok) {
    console.log('Response status', res.status)
    throw new Error('Failed to retrieve posts')
  }
  const data = await res.json()
  console.log('API response:', data)
  return data
}

// export default async function Home() {
//   const data = await getPosts()
//   console.log('Received data:', data)

//   console.log(data)
//   console.log('testing to see if data passes through', data)
//   return (
//     <>
//       <h1>Hell this is a test</h1>
//     </>
//   )
// }

export default async function Page() {
  const data = await getPosts()
  console.log('Received data:', data)

  console.log(data)
  console.log('testing to see if data passes through', data)
  return (
    <>
      <h1>Hello this is a test</h1>
    </>
  )
}

// async function getPosts() {
//   const res = await fetch('http://localhost:3000/api/getPosts')
//   if (!res.ok) {
//     console.log('Response status', res.status)
//   }
//   return res.json()
// }

// export default async function Home() {
//   const data = await getPosts()

//   // Output the data in a formatted way
//   console.log(JSON.stringify(data, null, 2))

//   return (
//     <>
//       <h1>Hell this is a test</h1>
//     </>
//   )
// }

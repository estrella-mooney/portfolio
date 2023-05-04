export function Hello() {
  return <></>
}

// export async function getPosts() {
//   console.log('hello is anything even working?')
//   const res = await fetch('http://localhost:3000/api/getPosts')
//   if (!res.ok) {
//     console.log('Response status', res.status)
//     throw new Error('Failed to retrieve posts')
//   }
//   const data = await res.json()
//   console.log('API response:', data)
//   return data
// }

// export default async function Page() {
//   const data = await getPosts()
//   console.log('Received data:', data)

//   console.log(data)
//   console.log('testing to see if data passes through', data)
//   return (
//     <>
//       <h1>Hello this is a test</h1>
//     </>
//   )
// }

import Users from '@/components/Users';

async  function fectchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  // console.log(data.data);
  return data.data
}

async function HomePage() {

  const users = await fectchUsers()

  return (
    <Users users={users}/>
  )
}

export default HomePage;
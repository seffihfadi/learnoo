import { getProfile } from "@/lib/func"

export default async function Dashboard() {
  const profile = await getProfile()
  return (
    <section>
      <h1 className="text-3xl my-8 capitalize">{profile.full_name.toLocaleLowerCase()} Dashboard</h1>
    </section>
  )
}

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function handleLogout () {
  "use server"
  const cookieStore = await cookies();

  cookieStore.delete('id_token');
  cookieStore.delete('refresh_token');

  redirect('/auth/signin');
}


export default function LogoutForm() {

  return (
    <form action={handleLogout}>
      <button
        className="lite transition-colors hover:text-muted hover:bg-primary !pl-5 w-fit flex items-center"
      >
        Logout
        <i className="uil uil-sign-out-alt text-[18px] ml-2"></i>
      </button>
    </form>
  );
}


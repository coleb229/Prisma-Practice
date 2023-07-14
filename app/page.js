import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold mb-8'>Sign in to your account</h1>
        <div className='flex flex-col items-center justify-center'>
          <label className='text-xl font-bold mb-2'>Email</label>
          <input
            className='border border-gray-400 rounded-md p-2 mb-4'
            type='email'
          />
          <label className='text-xl font-bold mb-2'>Password</label>
          <input
            className='border border-gray-400 rounded-md p-2 mb-4'
            type='password'
          />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Sign in
          </button>
        </div>
      </form>
    </main>
  )
}

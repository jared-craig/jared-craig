import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <div>
        <span>Hello, my name is</span>
      </div>
      <div className='text-3xl font-bold'>
        <span>Jared Craig</span>
      </div>
      <div>
        <span>Here are a few of my projects:</span>
      </div>
      <div className='flex flex-col items-center justify-between p-24'>
        <div className='text-2xl font-semibold p-8'>
          <Link href='https://hotsgg.com/' target='_blank'>
            HotsGG
          </Link>
        </div>
        <div className='text-2xl font-semibold p-8'>
          <Link href='https://glb2.app/' target='_blank'>
            GLB2GM
          </Link>
        </div>
      </div>
    </main>
  );
}

import Header from '@/components/Header';
import SubHeader from '@/components/SubHeader';

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-purple-600">
      <div className="w-[59%] relative max-lg:w-[93%] h-[760px] bg-white shadow-lg rounded-2xl p-12 px-[52px]">
        <Header />
        <SubHeader />
      </div>
    </div>
  );
}

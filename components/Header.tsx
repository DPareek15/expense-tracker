import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { NEXT_CACHE_TAGS_HEADER } from 'next/dist/lib/constants';

export default function Header() {
  return (
    <nav className="flex justify-between items-center">
      <LogoSection />
      <SearchBar />
      <Button />
    </nav>
  );
}

function LogoSection() {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-purple-600 flex items-center justify-center p-[11px] rounded-lg">
        <div className="w-[26px] h-[26px] items-center justify-center flex">
          <SavingsOutlinedIcon
            sx={{ fontSize: '25px' }}
            className="text-white"
          />
        </div>
      </div>
      <div className="flex gap-1 text-[24px]">
        <span className="font-bold text-purple-600">TrackX</span>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="h-[46px] bg-slate-50 flex items-center text-sm rounded-md pl-3 gap-1 w-[300px]">
      <div>
        <SearchOutlinedIcon className="text-slate-400" />
      </div>
      <input
        placeholder="Search an expense"
        className="bg-transparent outline-none w-full font-light"
      />
    </div>
  );
}

function Button() {
  return (
    <button className="bg-purple-600 gap-1 p-[12px] flex text-sm rounded-md text-white items-center justify-center pr-[18px] hover:bg-purple-700">
      <AddOutlinedIcon sx={{ fontSize: '20px' }} />
      <span>New Expense</span>
    </button>
  );
}

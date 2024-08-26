import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function SubHeader() {
  return (
    <div className="mt-[90px] flex justify-between">
      <WalletOptions />
      <ClearAllButton />
    </div>
  );
}

function WalletOptions() {
  return (
    <div className="boredr p-2 rounded-md flex items-center gap-2 cursor-pointer">
      <HomeOutlinedIcon className="text-purple-600" sx={{ fontSize: '27px' }} />
      <span className="text-[15px] mt-1 text-slate-500"> Home Wallet</span>
      <KeyboardArrowDownOutlinedIcon
        fontSize="small"
        className="mt-[4px] text-slate-500"
      />
    </div>
  );
}

function ClearAllButton() {
  return (
    <button className="border transition-all text-slate-500 px-6 hover: bg-slate-50 flex text-sm rounded-md items-center justify-center">
      <span className="max-md:hidden">Clear All</span>
    </button>
  );
}

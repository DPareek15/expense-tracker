import Image from 'next/image';
import Expense from './Expense';

export function AllExpenses() {
  return <div className="mt-16"></div>;
}

function ListHeader() {
  return (
    <div className="flex justify-between mb-4 items-center px-1">
      <div>
        <span className="font-bold text-[15px] text-slate-700">Date</span>
      </div>
      <div className="flex gap-7 text-slate-400 text-[13px] font-semibold">
        <span> Number of Transactions : </span>
        <span> Value : </span>
      </div>
    </div>
  );
}

function ExpenseList() {
  return (
    <div className="flex p-1 mt-4 items-center flex-col gap-5 h-[400px] overflow-y-auto">
      <Expense />
    </div>
  );
}

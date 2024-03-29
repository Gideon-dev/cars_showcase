"use client"

import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

interface showMoreProps{
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({pageNumber, isNext, setLimit}: showMoreProps) => {
  const router = useRouter();
  const handleNavigation = () =>{
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit)
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      { !isNext && (
        <CustomButton 
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}

        />
      )}

    </div>
  )
}

export default ShowMore
"use client";

import CustomButton from "./CustomButton";
import { FC } from "react";

type Props = {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

const ShowMore: FC<Props> = ({ pageNumber, isNext, setLimit }) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
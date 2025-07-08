import React from 'react'

const Controls = ({toggleZoom , frameZoom , resetPage , activePage}) => {
  return (
    <div className="absolute top-3 right-3 space-x-2 z-10">
      <button
        className="text-2xl text-pink-400 cursor-pointer hidden lg:inline-block"
        onClick={toggleZoom}
      >
        <i
          className={
            frameZoom ? "bxr  bx-search-minus bxr" : " bxr bx-search-plus"
          }
        ></i>
      </button>
      <button
        onClick={resetPage}
        className={`text-2xl ${
          activePage === 0
            ? "text-pink-200 cursor-not-allowed"
            : "text-pink-400 cursor-pointer"
        }`}
      >
        <i className="bx bx-x-circle"></i>
      </button>
    </div>
  );
}

export default Controls
"use client";


const Explorebtn = () => {
  return (
    <button id="explore-btn" className="mt-7 mx-auto" onClick={()=>{console.log("Clicked")}}>
        <a href="#events">
            Explore Events
            <img src="/icons/arrow-down.svg" width={24} height={24} alt="arrow-down" />
        </a>
    </button>
  )
}

export default Explorebtn
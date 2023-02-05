import React, { useState, useEffect } from 'react';
import Image from '../../assets/profile.jpg';

export default function MainImageSection() {
    const titleArray = ['developer', 'coder', 'dev', 'enthusiast', 'bugfixer', 'solver', 'thinker', 'robert'];
    const initialTimeout = 200;

    const [title, setTitle] = useState(titleArray[0]);

    useEffect(() => {
      const changeTitle = ( index: number) => {
        if (index > titleArray?.length - 1) {
            return;
        }

        const diff = Math.abs(index - titleArray.length / 2);
        const timeout = initialTimeout * (diff !== 0 ? diff : 1);

        setTimeout(() => {
            setTitle(titleArray[index]);
            changeTitle(index + 1);
        }, timeout)
    }

        changeTitle(0);
    })


    return (<header className="bg-white shadow">
    <div className="flex justify-center relative">
      <img className='mx-auto profile-image w-full overflow-hidden' src={Image} alt="profile" />
      <div className="z-10 absolute h-full w-full bg-gradient-to-r from-white via-white to-transparent"></div>
      <div className="absolute h-full z-20 left-0 w-1/2 justify-center flex">
        <div className='m-auto'>
          <div className="font-bold font-mono lg:text-6xl md:text-5xl sm:text-4xl text-2xl mb-4">
            {"<"}<span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">{title}</span>{">"}
            </div>
          <div className="font-sanss mx-4">Frontend Developer who focuses on writing clean and effective code</div>
        </div>
      </div>
    </div>

  </header>)
}
/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import { getDefaultContent } from "./header-bar.content";
import Image from 'next/image';
import SearchIcon from '../icons/search-icon';

function HeaderBar({ logoImage, mobileLogoImage, logoAlt, content }) {
  let navigation;

  if (!content) {
    navigation = getDefaultContent();
  } else {
    navigation = content;
  }

  return (
    <div className="flex gap-5 justify-between px-6 pb-1.5 bg-white border-b border-solid border-b-zinc-300 max-md:flex-wrap max-md:pl-5">
      <nav className="flex gap-5 justify-between mt-1.5">
        <div className="flex flex-col my-auto basis-0">
          <div className="flex flex-col mt-2 bg-primary-Dark">
            <div className="shrink-0 mt-2 h-0.5 rounded-sm bg-primaryDark" />
            <div className="shrink-0 mt-2 h-0.5 rounded-sm bg-primaryDark" />
            <div className="shrink-0 mt-2 h-0.5 rounded-sm bg-primaryDark" />
          </div>
          <p className="mt-2 text-xs leading-3 text-center uppercase text-primaryDark ">Menu</p>
        </div>
        <div className="pl-0 md:pl-48 lg:pl-0">
          <Image loading="lazy" src={logoImage} alt={logoAlt} className="hidden lg:flex" width="300" height="200" />
          <Image loading="lazy" src={mobileLogoImage} alt={logoAlt} className="flex lg:hidden m-2" width="200" height="200" />
        </div>
      </nav>
      <div className="flex flex-row gap-8 my-auto text-base leading-5 text-center text-white uppercase whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        {navigation.group[0].level1.map((item, index) => (
          <div key={index} className="hidden lg:flex grow justify-center px-8 py-4 align-middle leading-5 text-base bg-primaryAccent text-primaryLight hover:bg-primaryDark hover:text-secondaryAccent rounded-3xl max-md:px-5">
            <a href={item.src} key={index} className="text-primaryLight hover:bg-primaryDark hover:text-secondaryAccent">{item.text}</a>
          </div>
        ))}
        <div className="self-start lg:pl-4 lg:pt-3 pt-2 pl-2 w-10 h-10 lg:w-14 lg:h-14 rounded-3xl bg-zinc-100">
          <SearchIcon size="24" color="#CF4B08"/>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
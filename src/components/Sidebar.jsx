import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import { categories } from './../utils/constants';
import { Context } from '../context/contextApi';
import SidebarMenuItem from './SidebarMenuItem';

export default function Sidebar() {

  const {selectCategories, setSelectCategories, mobileMenu} = useContext(Context);

  const nagative = useNavigate();

  const clickHandler = (name, type) =>{
    switch(type){
      case 'category':
        return setSelectCategories(name)
      case 'home':
        return setSelectCategories(name)
      case 'menu':
        return false;
      default:
        break;
    }
  }

  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-4 dark:bg-black bg-white absolute md:relative z-10 translate-x-[240] md:translate-x-0 transition-all'>
      <div className='flex px-5 flex-col'>
        {
          categories.map((item) =>{
            return(
              <React.Fragment key={item.name}>
                <SidebarMenuItem
                  text={item.type === 'home'? 'Home': item.name}
                  icon={item.icon}
                  action={() => {
                    clickHandler(item.name, item.type);
                    nagative('/');
                  }}
                  className={`${selectCategories === item.name ? 'dark:bg-white/[0.15] bg-black/[0.05] font-semibold' : ''}`}

                />
                {item.divider && (
                  <hr className='my-5 dark:border-white/[0.2]' />
                )}
              </React.Fragment>
            )
          })
        }
        <hr className='my-5 dark:border-white/[0.2]'/>
        <div className='dark:text-white/[0.5] text-gray-500 text-[12px]'>@2024 by Huynh ca</div>
      </div>
    </div>
  )
}

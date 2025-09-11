import type { HeaderElem } from "../domain/HeaderElem" 
import type { HeaderRepository } from "../domain/HeaderRepositoty" 

import logo from '../../image/logo.jpg'
import profileImg from '../../image/Avatar5.png'
import noticeIconHeader from '../../image/noticeIconHeader.png'
import activityIconHeader from '../../image//activityIconHeader.png'
import settingsIconHeader from '../../image/settingsIconHeader.png'


const header:HeaderElem[] = [
    {
        logo: logo,
        logoUser: profileImg,
        name: "Steve Rogers",
        handle: "@steve_rogers",
        settingIcon: settingsIconHeader,
        activityIcon: activityIconHeader,
        noticeIcon: noticeIconHeader
    }
]

export const InMemoryHeaderRepository: HeaderRepository = {
  findAll(): HeaderElem[] {
      return header;
    },
};
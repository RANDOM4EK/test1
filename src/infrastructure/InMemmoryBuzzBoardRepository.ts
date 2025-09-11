import type { BuzzBoard } from "../domain/BuzzBoard";
import type { BuzzBoardRepository } from "../domain/BuzzBoardRepository";

import imgProfile from '../../image/Avatar.png'
import imgProfile1 from '../../image/Avatar3.png'
import imgProfile2 from '../../image/LitleAvatar.png'
import imgProfile3 from '../../image/LitleAvatar2.png'
import postImg from '../../image/dog.png'
import pipleIcon from '../../image/pipleIcon.png'


const buzzElem:BuzzBoard[] = [
    {
    peopleYmayKnow: {
        imagePpofileUrl: imgProfile,
        name: 'Tony Stark',
        commit: ' I am a metal man, who saves lots..',
        counterFollowers: '6M+ Followers',
        imagePpofileUrl1: imgProfile1,
        name1: 'Bruce Banners',
        commit1: 'Green human with scietific kno....',
        counterFollowers1: '3M+ Followers',
        imagePpofileUrl2: imgProfile2,
        name2:'Natasha Ramanoff',
        commit2: 'Tagged you in her 250th post a..',
        imagePpofileUrl3: imgProfile3,
        name3:'Barton Clint',
        commit3: 'Liked your comment on their po...'
    },
    boostYpost: {
        imageMyPost: postImg,
        name: '@steve_rogers',
        handle: 'With my lovable',
        commit: 'dog named Bruno with a smile &....',
        imagesProfile: pipleIcon,
        counterLikes: '& 180 others liked your post & ...',
    }
}
]

export const InMemoryBuzzBoardRepository: BuzzBoardRepository = {
  findAll(): BuzzBoard[] {
      return buzzElem;
    },
};
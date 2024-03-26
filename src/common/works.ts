import disneyImg from '@/assets/images/works/disney.png';
import tictctoeImg from '@/assets/images/works/tictctoe.png';
import movieImg from '@/assets/images/works/movie.png';
import starbucksImg from '@/assets/images/works/starbucks.png';
import appleImg from '@/assets/images/works/apple.png';

export const works = [
  {
    id: 'disney',
    title: 'Disney Plus',
    titleKr: '디즈니 플러스 클론',
    description: '간편 로그인, TMDB API 활용한 추천 영화 목록, 검색 등 구현',
    used: 'React, Redux, Firebase, Axios, Swiper',
    github: 'https://github.com/eegyuhong/react-disney-plus',
    link: 'https://react-disney-plus-113f9.web.app/',
    bgImage: disneyImg.src
  },
  {
    id: 'tictactoe',
    title: 'Tictactoe',
    titleKr: '틱택토 게임 웹',
    description: '게임 및 로그 기록, 이전 로그로 게임 되돌리 기능 구현',
    used: 'React',
    github: 'https://github.com/eegyuhong/react-tictactoe',
    link: 'https://eegyuhong.github.io/react-tictactoe/',
    bgImage: tictctoeImg.src
  },
  {
    id: 'movie',
    title: 'Movie App',
    titleKr: 'OMDb API 영화 검색 웹',
    description: 'OMDb API를 활용, 영화 검색 및 상세 보기 등 구현',
    used: 'Typescript, Parcel, Eslint',
    github: 'https://github.com/eegyuhong/vanilla-movie-ts',
    link: 'https://vanilla-movie-ts.vercel.app/#/',
    bgImage: movieImg.src
  },
  {
    id: 'starbucks',
    title: 'Starbucks',
    titleKr: '스타벅스 웹 클론',
    description: '클론 웹으로, home + signin 페이지를 만든 예제',
    used: 'Javascript, GSAP, Swiper',
    github: 'https://github.com/eegyuhong/vanilla-starbucks',
    link: 'https://elegant-tapioca-a44bc7.netlify.app',
    bgImage: starbucksImg.src
  },
  {
    id: 'apple',
    title: 'Apple',
    titleKr: '애플 웹 클론',
    description: '클론 웹으로, home + signin 페이지를 만든 예제',
    used: 'Javascript',
    github: 'https://github.com/eegyuhong/vanilla-apple-ipad',
    link: 'https://vanilla-apple-ipad.vercel.app/',
    bgImage: appleImg.src
  }
];

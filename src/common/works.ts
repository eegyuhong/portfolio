import insightImg from '@/assets/images/works/insight.png';
import crawlerImg from '@/assets/images/works/crawler.png';
import portfolioImg from '@/assets/images/works/portfolio.png';
import disneyImg from '@/assets/images/works/disney.png';
import tictctoeImg from '@/assets/images/works/tictctoe.png';
import movieImg from '@/assets/images/works/movie.png';
import starbucksImg from '@/assets/images/works/starbucks.png';
import appleImg from '@/assets/images/works/apple.png';

export const works = [
  {
    id: 'insight',
    title: 'Insight Board',
    titleKr: '포트폴리오 방문자 현황',
    description: '서버리스 함수를 이용한 프로젝트별 방문 로그 수집 구현',
    used: 'Nextjs, Supabase Edge Functions, Recharts',
    github: 'https://github.com/eegyuhong/insight-board',
    link: 'https://insight-board-omega.vercel.app/',
    bgImage: insightImg.src
  },
  {
    id: 'crawler',
    title: 'Crawler',
    titleKr: '상품 정보 크롤러',
    description: '플랫폼 입점 브랜드의 전체 상품 목록에 대한 크롤러 구현',
    used: 'Nextjs, playwright, Docker, Railway',
    github: 'https://github.com/eegyuhong/test-product-crawler',
    link: 'https://test-product-crawler-production-5e1b.up.railway.app/',
    bgImage: crawlerImg.src
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    titleKr: '개인용 포트폴리오',
    description: '자기소개 및 프로젝트 소개 등을 다양한 애니메이션으로 구현',
    used: 'React, Nextjs, zustand, tailwindcss',
    github: 'https://github.com/eegyuhong/portfolio',
    link: 'https://vercel.com/eegyuhongs-projects/portfolio/',
    bgImage: portfolioImg.src
  },
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

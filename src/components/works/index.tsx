import Contents from './components/contents';
import Title from './components/title';
import { works } from '@/common/works';

export default function Works() {
  return (
    <>
      <Title />
      {works.map((el) => (
        <Contents work={el} key={el.id} />
      ))}
    </>
  );
}

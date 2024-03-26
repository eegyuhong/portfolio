import Header from '@/components/header';
import Front from '@/components/front';
import About from '@/components/about';
import Works from '@/components/works';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Front />
      <div className="xl:pl-[72px]">
        <About />
        <hr />
        <Works />
        <hr />
        <Contact />
      </div>
    </main>
  );
}

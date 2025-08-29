import homeImage from 'public/home.jpg'
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div >
      <Hero 
       imgData={homeImage}
       imgAlt='cart factory'
       title='Professional Cloud Hosting'  />
    </div>
  );
}

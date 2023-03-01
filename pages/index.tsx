import Head from 'next/head';
import { Inter } from 'next/font/google';
import ProductGrid from '@/components/Products';
import { PageHeading } from '@/components/Typography';
import Textarea from '../components/CanvasInputs/textarea';

const inter = Inter({ subsets: ['latin'] });

const sampleproducts = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  // {
  //   id: 2,
  //   name: 'Nomad Tumbler',
  //   href: '#',
  //   price: '$35',
  //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
  //   imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  // },
  // {
  //   id: 3,
  //   name: 'Focus Paper Refill',
  //   href: '#',
  //   price: '$89',
  //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
  //   imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  // },
  // {
  //   id: 4,
  //   name: 'Machined Mechanical Pencil',
  //   href: '#',
  //   price: '$35',
  //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
  //   imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  // }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Wave Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeading text='Work with us'/>

      <form action="#" method="POST" className={inter.className}>
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                About
              </label>
              <div className="mt-1">
                <Textarea />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>
          </div>
        </div>
      </form>

      <ProductGrid products={sampleproducts} />
    </>
  )
}

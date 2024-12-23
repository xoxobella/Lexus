'use client'
import { Link } from "react-router-dom";
import { Fragment, useState } from 'react'
import Product1 from '../../assets/image/product/product1.webp'
import Product2 from '../../assets/image/prodcut2/image5.avif'
import sofa from '../../assets/image/product/sofa.avif'
import mattres from '../../assets/image/product/Mattres.avif'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../Context/Addtocart/Cart.jsx'; // Import the useCart hook
import { VscAccount } from 'react-icons/vsc'; // Import the VscAccount icon
import { useSelector } from 'react-redux'; // Import useSelector to access auth state

const navigation = {
  categories: [
    {
      id: 'sofa',
      name: 'Sofa',
      featured: [
        {
          name: 'Modern Sectional',
          href: '#',
          imageSrc: [Product1],
          imageAlt: 'Modern L-shaped sectional sofa in gray',
        },
        {
          name: 'Leather Couch',
          href: '#',
          imageSrc: [Product2],
          imageAlt: 'Brown leather sofa in contemporary living room',
        },
        {
          name: 'Loveseat',
          href: '#',
          imageSrc: [sofa],
          imageAlt: 'Compact two-seater loveseat in beige',
        },
        {
          name: 'Recliner',
          href: '#',
          imageSrc: [sofa],
          imageAlt: 'Modern reclining sofa with adjustable headrest',
        },
      ],
    },
    {
      id: 'men',
      name: 'Bedroom',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: [mattres],
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: [mattres],
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '/Aboutus' },
    { name: 'Stores', href: '/Store' },
  ],
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const { cartCount, addToCart } = useCart(); // Use the context
  const { isAuthenticated } = useSelector((state) => state.auth); // Access authentication state

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="relative">
                            <img
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                            />
                            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                              20% OFF
                            </div>
                          </div>
                          <a href={item.href} className="mt-6 block font-medium text-gray-900" onClick={addToCart}>
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))} 
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <h1 className="text-black font-serif text-xl hover:text-gray-500">Koala</h1>
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden z-20 lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton
                          className="relative z-10 -mb-px flex items-center border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:border-black hover:text-gray-900 data-[open]:border-black data-[open]:text-black"
                        >
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full bg-white text-sm text-gray-500 shadow-lg transform opacity-0 scale-95 transition-all duration-200 ease-out data-[open]:opacity-100 data-[open]:scale-100"
                      >
                        {/* Shadow element for visual effect */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-16">
                              <div className="grid grid-cols-4 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm transition-transform duration-200 ease-out hover:scale-105"
                                  >
                                    <div className="relative">
                                      <img
                                        alt={item.imageAlt}
                                        src={item.imageSrc}
                                        className="aspect-square w-full rounded-lg bg-gray-100 object-cover transition-opacity duration-200 ease-out group-hover:opacity-75"
                                      />
                                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                                        20% OFF
                                      </div>
                                    </div>
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900 hover:text-gray-700" onClick={addToCart}>
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {/* Conditionally render the account icon based on authentication state */}
                  {isAuthenticated ? (
                    <Link to="/profile" className="flex items-center">
                      <VscAccount className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" />
                    </Link>
                  ) : (
                    <Link to="/login" className="flex items-center">
                      <VscAccount className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" />
                    </Link>
                  )}
                </div>
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{cartCount}</span> {/* Update cart count display */}
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
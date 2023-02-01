import React from 'react';
import NavigationItem from '../navigation-item/navigation-item';
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavigationModel from '../../models/navigation';
import NavigationItemMobile from '../navigation-item-mobile/navigation-item-mobile';

const navItems: Array<NavigationModel> = [{ title: 'about', current: true, href: '' }, { title: 'biography', href: 'biography' }, { title: 'contact' }]

function NavigationHeader() {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-transparent">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src="./favicon.ico"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navItems.map((item) => (
                                                    <NavigationItem {...item}></NavigationItem>
                                                    // <a
                                                    //   key={item.name}
                                                    //   href={item.href}
                                                    //   className={classNames(
                                                    //     item.current
                                                    //       ? 'bg-gray-900 text-white'
                                                    //       : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    //     'px-3 py-2 rounded-md text-sm font-medium'
                                                    //   )}
                                                    //   aria-current={item.current ? 'page' : undefined}
                                                    // >
                                                    //   {item.name}
                                                    // </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="-mr-2 flex md:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                    {navItems.map((item) => (
                                        <NavigationItemMobile {...item}></NavigationItemMobile>
                                    ))}
                                </div>

                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}

export default NavigationHeader;
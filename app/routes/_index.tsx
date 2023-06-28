/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Link } from '@remix-run/react'
import { Fragment, useState } from 'react'
import {
	default as HeroIcons20Solid,
	href as solid20icons,
} from '~/components/icons/heroicons/20/solid/index.tsx'
import {
	default as HeroIcons24Outline,
	href as outline24icons,
} from '~/components/icons/heroicons/24/outline/index.tsx'
import { cn } from '~/utils/misc.ts'

// preload the svg sprites
export const links = () => [
	{ rel: 'preload', href: outline24icons, as: 'image' },
	{ rel: 'preload', href: solid20icons, as: 'image' },
]

// optional: define explicit component for each icon
const HomeIcon = (props: any) => <HeroIcons24Outline id="home" {...props} />
const UsersIcon = (props: any) => <HeroIcons24Outline id="users" {...props} />
const FolderIcon = (props: any) => <HeroIcons24Outline id="folder" {...props} />
const CalendarIcon = (props: any) => (
	<HeroIcons24Outline id="calendar" {...props} />
)
const DocumentDuplicateIcon = (props: any) => (
	<HeroIcons24Outline id="document-duplicate" {...props} />
)
const ChartPieIcon = (props: any) => (
	<HeroIcons24Outline id="chart-pie" {...props} />
)
const Cog6ToothIcon = (props: any) => (
	<HeroIcons24Outline id="cog-6-tooth" {...props} />
)
const XMarkIcon = (props: any) => <HeroIcons24Outline id="x-mark" {...props} />
const Bars3Icon = (props: any) => <HeroIcons24Outline id="bars-3" {...props} />
const BellIcon = (props: any) => <HeroIcons24Outline id="bell" {...props} />

const ChevronDownIcon = (props: any) => (
	<HeroIcons20Solid id="chevron-down" {...props} />
)
const MagnifyingGlassIcon = (props: any) => (
	<HeroIcons20Solid id="magnifying-glass" {...props} />
)

const navigation = [
	{ name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
	{ name: 'Team', href: '#', icon: UsersIcon, current: false },
	{ name: 'Projects', href: '#', icon: FolderIcon, current: false },
	{ name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
	{ name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
	{ name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
	{ id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
	{ id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
	{ id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
	{ name: 'Your profile', href: '#' },
	{ name: 'Sign out', href: '#' },
]

export default function Example() {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
			<div>
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as="div"
						className="relative z-50 lg:hidden"
						onClose={setSidebarOpen}
					>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-gray-900/80" />
						</Transition.Child>

						<div className="fixed inset-0 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="-translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="-translate-x-full"
							>
								<Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
											<button
												type="button"
												className="-m-2.5 p-2.5"
												onClick={() => setSidebarOpen(false)}
											>
												<span className="sr-only">Close sidebar</span>
												<XMarkIcon
													className="h-6 w-6 text-white"
													aria-hidden="true"
												/>
											</button>
										</div>
									</Transition.Child>
									{/* Sidebar component, swap this element with another sidebar if you like */}
									<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
										<div className="flex h-16 shrink-0 items-center gap-4">
											<EpicLogo className="h-8 w-auto" />
											<h1 className="text-2xl font-semibold text-white">
												Epic Stack
											</h1>
										</div>
										<nav className="flex flex-1 flex-col">
											<ul className="flex flex-1 flex-col gap-y-7">
												<li>
													<ul className="-mx-2 space-y-1">
														{navigation.map(item => (
															<li key={item.name}>
																<a
																	href={item.href}
																	className={cn(
																		item.current
																			? 'bg-gray-800 text-white'
																			: 'text-gray-400 hover:bg-gray-800 hover:text-white',
																		'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
																	)}
																>
																	<item.icon
																		className="h-6 w-6 shrink-0"
																		aria-hidden="true"
																	/>
																	{item.name}
																</a>
															</li>
														))}
													</ul>
												</li>
												<li>
													<div className="text-xs font-semibold leading-6 text-gray-400">
														Your teams
													</div>
													<ul className="-mx-2 mt-2 space-y-1">
														{teams.map(team => (
															<li key={team.name}>
																<a
																	href={team.href}
																	className={cn(
																		team.current
																			? 'bg-gray-800 text-white'
																			: 'text-gray-400 hover:bg-gray-800 hover:text-white',
																		'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
																	)}
																>
																	<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
																		{team.initial}
																	</span>
																	<span className="truncate">{team.name}</span>
																</a>
															</li>
														))}
													</ul>
												</li>
												<li className="mt-auto">
													<Link
														to="#"
														className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
													>
														<Cog6ToothIcon
															className="h-6 w-6 shrink-0"
															aria-hidden="true"
														/>
														Settings
													</Link>
												</li>
											</ul>
										</nav>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
						<div className="flex h-16 shrink-0 items-center gap-4">
							<EpicLogo className="h-8 w-auto" />
							<h1 className="text-2xl font-semibold text-white">Epic Stack</h1>
						</div>
						<nav className="flex flex-1 flex-col">
							<ul className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul className="-mx-2 space-y-1">
										{navigation.map(item => (
											<li key={item.name}>
												<a
													href={item.href}
													className={cn(
														item.current
															? 'bg-gray-800 text-white'
															: 'text-gray-400 hover:bg-gray-800 hover:text-white',
														'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
													)}
												>
													<item.icon
														className="h-6 w-6 shrink-0"
														aria-hidden="true"
													/>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</li>
								<li>
									<div className="text-xs font-semibold leading-6 text-gray-400">
										Your teams
									</div>
									<ul className="-mx-2 mt-2 space-y-1">
										{teams.map(team => (
											<li key={team.name}>
												<a
													href={team.href}
													className={cn(
														team.current
															? 'bg-gray-800 text-white'
															: 'text-gray-400 hover:bg-gray-800 hover:text-white',
														'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
													)}
												>
													<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
														{team.initial}
													</span>
													<span className="truncate">{team.name}</span>
												</a>
											</li>
										))}
									</ul>
								</li>
								<li className="mt-auto">
									<Link
										to="#"
										className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
									>
										<Cog6ToothIcon
											className="h-6 w-6 shrink-0"
											aria-hidden="true"
										/>
										Settings
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="lg:pl-72">
					<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
						<button
							type="button"
							className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
							onClick={() => setSidebarOpen(true)}
						>
							<span className="sr-only">Open sidebar</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>

						{/* Separator */}
						<div
							className="h-6 w-px bg-gray-900/10 lg:hidden"
							aria-hidden="true"
						/>

						<div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
							<form className="relative flex flex-1" action="#" method="GET">
								<label htmlFor="search-field" className="sr-only">
									Search
								</label>
								<MagnifyingGlassIcon
									className="pointer-events-none absolute inset-y-5 left-0 h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
								<input
									id="search-field"
									className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
									placeholder="Search..."
									type="search"
									name="search"
								/>
							</form>
							<div className="flex items-center gap-x-4 lg:gap-x-6">
								<button
									type="button"
									className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon
										className="h-6 w-6 text-gray-400 hover:text-gray-500"
										aria-hidden="true"
									/>
								</button>

								{/* Separator */}
								<div
									className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
									aria-hidden="true"
								/>

								{/* Profile dropdown */}
								<Menu as="div" className="relative">
									<Menu.Button className="-m-1.5 flex items-center p-1.5">
										<span className="sr-only">Open user menu</span>
										<img
											className="h-8 w-8 rounded-full bg-gray-50"
											src="/img/kent.jpg"
											alt=""
										/>
										<span className="hidden lg:flex lg:items-center">
											<span
												className="ml-4 text-sm font-semibold leading-6 text-gray-900"
												aria-hidden="true"
											>
												Kent C. Dodds
											</span>
											<ChevronDownIcon
												className="ml-2 h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</span>
									</Menu.Button>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
											{userNavigation.map(item => (
												<Menu.Item key={item.name}>
													{({ active }) => (
														<a
															href={item.href}
															className={cn(
																active ? 'bg-gray-50' : '',
																'block px-3 py-1 text-sm leading-6 text-gray-900',
															)}
														>
															{item.name}
														</a>
													)}
												</Menu.Item>
											))}
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<main className="py-10">
						<div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
					</main>
				</div>
			</div>
		</>
	)
}

function EpicLogo({ className }: { className: string }) {
	return (
		<svg className={className} fill="none" viewBox="0 0 65 65">
			<path
				fill="currentColor"
				d="M39.445 25.555 37 17.163 65 0 47.821 28l-8.376-2.445Zm-13.89 0L28 17.163 0 0l17.179 28 8.376-2.445Zm13.89 13.89L37 47.837 65 65 47.821 37l-8.376 2.445Zm-13.89 0L28 47.837 0 65l17.179-28 8.376 2.445Z"
			></path>
		</svg>
	)
}

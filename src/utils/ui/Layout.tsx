import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<header>
				<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 mb-10">
					<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
						<a href="../" className="flex items-center">
							{/* <img
								src={"https://zupimages.net/up/23/06/wgz9.png"}
								className="h-auto max-w-lg rounded-lg"
								alt="Zombie acopalypse Logo"
							/> */}
							<h1 className="text-white text-xl">Zombie apocalypse</h1>
						</a>
						<div className="flex items-center lg:order-2 text-white text-xl">
							0 / 3 dans votre équipe
						</div>
					</div>
				</nav>
			</header>
			{children}
		</div>
	);
};

import { FC, PropsWithChildren } from "react";
import "./layout.css";
export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<header>
				<div className="overlay">
					<a href="/">
						<h1>Zombie apocalypse</h1>
					</a>
					<h3>0 / 3 dans l'équipe</h3>
					<p>
						Ce jeu doit permettre de constituer une équipe pour survivre à la
						prochaine invasion de zombies
					</p>
					<br></br>
				</div>
			</header>
			{children}
		</div>
	);
};

import { FC, PropsWithChildren, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ZombieContextType } from "../../config/types/zombie";
import { ZombieContext } from "../../config/zombie/zombieContext";
import "./header.css";
export const Header: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const navigate = useNavigate();
	const { zombies } = useContext(ZombieContext) as ZombieContextType;
	return (
		<div>
			<header>
				<div className="overlay">
					<div onClick={() => navigate(`/`)}>
						<h1>Zombie apocalypse</h1>
					</div>
					<h3>{zombies.length} / 3 dans l'équipe</h3>
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

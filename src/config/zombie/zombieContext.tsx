import * as React from "react";
import { IZombie, ZombieContextType } from "../types/zombie";

export const ZombieContext = React.createContext<ZombieContextType | null>(
	null,
);

const ZombieProvider: React.FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	const [zombies, setZombies] = React.useState<IZombie[]>([]);

	const saveZombieTeam = (zombie: IZombie) => {
		const newZombie: IZombie = {
			id: zombie.id,
			email: zombie.email,
			first_name: zombie.email,
			last_name: zombie.last_name,
			avatar: zombie.avatar,
		};
		if (zombies.length <= 2) {
			setZombies([...zombies, newZombie]);
		} else {
			alert("You can only select 3 zombies");
		}
	};

	const updateZombieTeam = (id: number) => {
		zombies.filter((zombie: IZombie) => {
			if (zombie.id === id) {
				setZombies(prev => prev.filter(zombie => zombie.id !== id));
			}
		});
	};
	return (
		<ZombieContext.Provider
			value={{ zombies, saveZombieTeam, updateZombieTeam }}
		>
			{children}
		</ZombieContext.Provider>
	);
};

export default ZombieProvider;

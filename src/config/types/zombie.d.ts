export type IZombie = {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
};

export type ZombieContextType = {
	zombies: IZombie[];
	saveZombieTeam: (zombies: IZombie) => void;
	updateZombieTeam: (id: number) => void;
};

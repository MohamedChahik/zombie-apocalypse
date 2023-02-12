import { useCallback, useState } from "react";
import { useFetchWrapper } from "../../../config/helpers/fetch-wrapper";

type ZombieType = {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
};

export const useZombieActions = () => {
	const fetchWrapper = useFetchWrapper();
	const [zombieDescription, setZombieDescription] = useState<ZombieType>();

	const getZombieDescription = useCallback(async (id: string) => {
		try {
			const zombie = await fetchWrapper.get(
				`https://reqres.in/api/users/${id}`,
				"",
			);
			setZombieDescription({ ...zombie.data });
		} catch (e: unknown) {
			console.log("message erreur", e);
		}
	}, []);

	return {
		getZombieDescription,
		zombieDescription,
	};
};

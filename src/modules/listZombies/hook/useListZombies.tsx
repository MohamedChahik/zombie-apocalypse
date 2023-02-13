import { useCallback, useState } from "react";
import { useFetchWrapper } from "../../../config/helpers/fetch-wrapper";

export type ZombieType = {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
};

export const useListZombiesActions = () => {
	const fetchWrapper = useFetchWrapper();
	const [listZombies, setStateListZombies] = useState<ZombieType[]>([]);

	const getListZombies = useCallback(async () => {
		try {
			const zombies = await fetchWrapper.get(
				"https://reqres.in/api/users/",
				"",
			);
			setStateListZombies({ ...zombies.data });
		} catch (e: unknown) {
			console.log("message erreur", e);
		}
	}, []);

	return {
		getListZombies,
		listZombies,
	};
};

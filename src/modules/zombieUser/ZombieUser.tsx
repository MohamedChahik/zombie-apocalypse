import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useZombieActions } from "./hook/useListZombies";

const ZombieUser = () => {
	const { getZombieDescription, zombieDescription } = useZombieActions();
	let { id } = useParams();

	useEffect(() => {
		if (id) getZombieDescription(id);
	}, [id]);

	return (
		<>
			<h1 className="text-center text-xl font-bold">
				Utilisateur d'Apocalypse
			</h1>
			{zombieDescription ? (
				<div className="flex-center flex justify-center h-96 mt-10">
					<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
						<h1 className="text-center text-xl text-white mt-6">
							Numéro : {zombieDescription.id}
						</h1>
						<div className="flex flex-col items-center pb-10 mt-16">
							<img
								className="w-24 h-24 mb-3 rounded-full shadow-lg"
								src={zombieDescription.avatar}
							/>
							<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
								{zombieDescription.first_name} {zombieDescription.last_name}
							</h5>
							<span className="text-sm text-gray-500 dark:text-gray-400">
								{zombieDescription.email}
							</span>
						</div>
					</div>
				</div>
			) : (
				<div className="mt-36 text-center text-xl font-bold">
					Aucun utilisateur avec cette identifiant
				</div>
			)}
		</>
	);
};

export default ZombieUser;

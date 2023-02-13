import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IZombie, ZombieContextType } from "../../config/types/zombie";
import { ZombieContext } from "../../config/zombie/zombieContext";
import { useListZombiesActions, ZombieType } from "./hook/useListZombies";

const ListZombies = () => {
	const navigate = useNavigate();

	const { getListZombies, listZombies } = useListZombiesActions();
	const { saveZombieTeam, updateZombieTeam, zombies } = useContext(
		ZombieContext,
	) as ZombieContextType;

	useEffect(() => {
		getListZombies();
	}, []);

	const handleSaveTodo = (e: React.FormEvent, result: IZombie | any) => {
		e.preventDefault();
		saveZombieTeam(result);
	};

	return (
		<>
			<div className="flex flex-row gap-3 flex-wrap justify-center mb-3">
				{listZombies !== undefined &&
					Object.values(listZombies).map((item: ZombieType, index: number) => {
						return (
							<div
								className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
								key={index}
							>
								<div className="flex flex-col items-center pb-10">
									<img
										className="w-24 h-24 mb-3 rounded-full shadow-lg mt-6 cursor-pointer"
										src={item.avatar}
										alt={item.first_name}
										onClick={() => navigate(`zombie/${item.id}`)}
									/>
									<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
										{item.first_name} {item.last_name}
									</h5>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										{item.email}
									</span>
									<div className="flex mt-4 space-x-3 md:mt-6">
										{zombies.map(zombie => zombie.id).includes(item.id) ? (
											<button
												className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
												onClick={e => updateZombieTeam(item.id)}
											>
												Retirez de l'équipe
											</button>
										) : (
											<button
												className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
												onClick={e => handleSaveTodo(e, item)}
											>
												Ajout dans l'équipe
											</button>
										)}
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default ListZombies;

import { Routes } from "react-router-dom";
import { listZombiesRouting } from "../../modules/listZombies/listZombies.routing";
import { zombieUserRouting } from "../../modules/zombieUser/zombieUser.routing";
export const AppRouter = () => (
	<Routes>
		{listZombiesRouting}
		{zombieUserRouting}
	</Routes>
);

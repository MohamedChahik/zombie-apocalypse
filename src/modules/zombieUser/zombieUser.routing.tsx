import { Route } from "react-router-dom";
import ZombieUser from "./ZombieUser";

export const zombieUserRouting = (
	<Route path="/zombie/:id" element={<ZombieUser />} />
);

import GUI from "lil-gui";
import { useCallback, useEffect, useMemo } from "react";

export const useGUI = (setGUI: (gui: GUI) => void) => {
	const gui = useMemo(() => new GUI({ closeFolders: true }), []);
	useEffect(() => {
		setGUI(gui);
		return () => {
			gui.destroy();
		};
	}, [gui, setGUI]);
	const updateDisplays = useCallback(() => {
		gui.folders.forEach((folder) =>
			folder.controllers.forEach((controller) => controller.updateDisplay()),
		);
	}, [gui]);
	return updateDisplays;
};

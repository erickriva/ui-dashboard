import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import { MyThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import SettingsContent from "./components/SettingsContent";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignIn/SignUp";

function App() {
	return (
		<MyThemeProvider>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chats" element={<Chats />} />
					<Route path="/profile" element={<Profile />} />

					<Route path="/settings" element={<Settings />}>
						<Route path=":settingId" element={<SettingsContent />} />
					</Route>

					<Route path="/support" element={<Support />} />

					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />

					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>
		</MyThemeProvider>
	);
}

export default App;

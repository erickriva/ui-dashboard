import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import { MyThemeProvider } from "./contexts/ThemeContext";
import { AlertContextProvider } from "./contexts/AlertContext";

import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import SettingsContent from "./components/SettingsContent";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignIn/SignUp";
import { routes } from "./routes";
import ConversationMessages from "./fragments/ConversationMessages";

function App() {
	return (
		<MyThemeProvider>
			<GlobalStyles />
			<AlertContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path={routes.SignIn} element={<SignIn />} />
						<Route path={routes.SignUp} element={<SignUp />} />

						<Route path={routes.Home} element={<Home />} />
						<Route path={routes.Profile} element={<Profile />} />

						<Route path={routes.Chats} element={<Chats />}>
							<Route path=":conversationId" element={<ConversationMessages />} />
						</Route>

						<Route path={routes.Settings} element={<Settings />}>
							<Route path=":settingId" element={<SettingsContent />} />
						</Route>

						<Route path={routes.Support} element={<Support />} />

						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</BrowserRouter>
			</AlertContextProvider>
		</MyThemeProvider>
	);
}

export default App;

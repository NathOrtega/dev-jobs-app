import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import DesignSystem from "./pages/DesignSystem";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<ThemeProvider>
			<Router>
				<Header logo="Devjobs" />
				<ErrorBoundary>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/detail/:offerId" element={<Detail />} />
						<Route path="/design-system" element={<DesignSystem />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</ErrorBoundary>
			</Router>
		</ThemeProvider>
	);
}

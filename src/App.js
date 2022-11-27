import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Photo from "./Components/Photo/Photo";

import Header from "./Components/Header";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { UserStorage } from "./UserContext";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<UserStorage>
					<Header />
					<main className="AppBody">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="login/*" element={<Login />} />
							<Route
								path="conta/*"
								element={
									// protectedroute para usuario nao logado nao ter acesso aos dados
									<ProtectedRoute>
										<User />
									</ProtectedRoute>
								}
							/>
							<Route path="foto/:id" element={<Photo />} />
							<Route
								path="perfil/:user"
								element={<UserProfile />}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	);
}

export default App;

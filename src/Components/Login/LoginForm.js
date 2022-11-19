import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";


// import { TOKEN_POST, USER_GET } from "../../api";

const LoginForm = () => {
	const username = useForm();
	const password = useForm();
	const { userLogin, error, loading } = React.useContext(UserContext);

	// React.useEffect(() => {
	// 	const token = window.localStorage.getItem("token");
	// 	if (token) {
	// 		getUser(token);
	// 	}
	// }, []);

	// async function getUser(token) {
	// 	const { url, options } = USER_GET(token);
	// 	const response = await fetch(url, options);
	// 	const json = await response.json();
	// 	console.log(json);
	// }

	async function handleSubmit(event) {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			userLogin(username.value, password.value);

			// const { url, options } = TOKEN_POST({
			// 	username: username.value,
			// 	password: password.value,
			// });

			// const response = await fetch(url, options);
			// const json = await response.json();
			// window.localStorage.setItem("token", json.token);
			// getUser(json.token);
		}
	}

	return (
		<section className="animeLeft">
			<h1 className="title">Login</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input
					label="Usuário"
					type="text"
					name="username"
					{...username}
				/>
				<Input
					label="Senha"
					type="password"
					name="password"
					{...password}
				/>
				{loading ? (
					<Button disabled>Carregando...</Button>
				) : (
					<Button>Entrar</Button>
				)}
				<Error error={error} />
			</form>
			<Link className={styles.perdeu} to="/login/perdeu">
				Perdeu a senha?
			</Link>
			<div className={styles.cadastro}>
				<h2 className={styles.subtitle}>Cadastre-se</h2>
				<p>Ainda não possui conta? Cadastre-se no site.</p>
				<Link className={stylesBtn.button} to="/login/criar">
					Cadastro
				</Link>
			</div>
		</section>
	);
};

export default LoginForm;

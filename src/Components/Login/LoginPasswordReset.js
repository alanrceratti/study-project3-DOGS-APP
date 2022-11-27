import React from "react";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import Error from "../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

const LoginPasswordReset = () => {
	const [login, setLogin] = React.useState("");
	const [key, setKey] = React.useState("");
	const password = useForm();
	const { error, loading, request } = useFetch();
	const navigate = useNavigate();

	React.useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const key = params.get("key");
		const login = params.get("login");
		if (key) setKey(key);
		if (login) setLogin(login);
	}, []);

	async function handleSubmit(event) {
		event.preventDefault();
		if (password.validate()) {
			const { url, options } = PASSWORD_RESET({
				login,
				key,
				password: password.value,
			});
			const { response } = await request(url, options);
			if (response.ok) navigate("/login");
		}
	}

	return (
		<div>
			<Head title="Resete a Senha" />

			<h1 className="title">Resete a Senha</h1>
			<form>
				<Input
					label="Nova Senha"
					type="password"
					name="password"
					{...passowrd}
				/>
				{loading ? (
					<Button disabled>Resetando</Button>
				) : (
					<Button onSubmit={handleSubmit}>Resetar</Button>
				)}
				<Button onSubmit={handleSubmit}>Resetar</Button>
			</form>
			<Error error={error} />
		</div>
	);
};

export default LoginPasswordReset;

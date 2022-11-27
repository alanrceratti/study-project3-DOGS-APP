import React from "react";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginPasswordLost = () => {
	const login = useForm();
	const { data, loading, error, request } = useFetch();

	async function handleSubmit(event) {
		event.preventDefault();
		if (login.validate()) {
			const { url, options } = PASSWORD_LOST({
				login: login.value,
				url: window.location.href.replace("perdeu", "resetar"),
				// mudar URL para o site final
			});
			const { json } = await request(url, options);
		}
	}

	return (
		<section className="animeLeft">
			<Head title="Perdeu a senha?" />

			<h1 className="title">Perdeu a senha?</h1>
			{data ? (
				<p style={{ color: "#4c1" }}>{data}</p>
			) : (
				<form onSubmit={handleSubmit}>
					<Input
						label="Email / Usuario"
						type="text"
						name="login"
						{...login}
					/>
					{loading ? (
						<Button disabled>Enviando</Button>
					) : (
						<Button>Enviar Email</Button>
					)}
				</form>
			)}

			<Error error={error} />
		</section>
	);
};

export default LoginPasswordLost;

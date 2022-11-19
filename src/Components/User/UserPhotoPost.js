import React from "react";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import styles from "./UserPhotoPost.module.css";

const UserPhotoPost = () => {
	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleImgChange() {}

	return (
		<section className={`${styles.photoPost} animeLeft`}>
			<Input label="Nome" type="text" name="nome"></Input>
			<Input label="Peso" type="text" name="peso"></Input>
			<Input label="Idade" type="text" name="idade"></Input>
			<Input
				type="file"
				name="img"
				id="img"
				onChange={handleImgChange}
			></Input>

			<Button />
			<form onSubmit={handleSubmit}></form>
		</section>
	);
};

export default UserPhotoPost;

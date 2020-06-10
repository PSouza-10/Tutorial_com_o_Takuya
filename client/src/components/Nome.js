import React, { useState } from "react"

function Nome() {
	const [nome, mudarNome] = useState("")

	return (
		<div>
			<input
				type='text'
				value={nome}
				onChange={e => mudarNome(e.target.value)}></input>
			<h2>{nome}</h2>
		</div>
	)
}

export default Nome

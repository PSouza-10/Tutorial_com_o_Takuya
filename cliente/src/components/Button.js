import React, { useState } from "react"

function Button() {
	const [numero, mudarNumero] = useState(0) // React Hooks

	return (
		<button
			onClick={() => mudarNumero(numero + 1)}
			style={{ backgroundColor: numero % 2 === 0 ? "blue" : "purple" }}>
			O numero eh {numero}{" "}
		</button>
	)
}

export default Button

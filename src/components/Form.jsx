import './Form.css'
import { useRef } from 'react'

export const Form = ({onEdit}) => {
	const formRef = useRef()
	
	return (
		<div ref={formRef} className="form">

			<div className="inputArea">
				<label>Nome</label>
				<input type="text" name="nome"></input>
			</div>

			<div className="inputArea">
				<label>E-mail</label>
				<input type="email" name="email"></input>
			</div>

			<div className="inputArea">
				<label>Telefone</label>
				<input type="tel" name="fone"></input>
			</div>

			<div className="inputArea">
				<label>Data de Nascimento</label>
				<input type="date" name="data_nascimento"></input>
			</div>

			<button type="submit">SALVAR</button>
			

		</div>
		)
	}
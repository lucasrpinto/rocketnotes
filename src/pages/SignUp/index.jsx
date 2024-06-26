import { useState } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles'; 


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
           return alert("preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
         .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
         })
         .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else {
                alert("Não foi possível cadastrar o usuário")
            }
         });

    }

    return (
        <Container>

            <Background />
            <Form>
                <h1>RocketNotes</h1> 
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiLogIn}
                    autoComplete="username"
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    autoComplete="email"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={ handleSignUp } />

                <Link to="/">
                    Voltar para o Login
                </Link>
            </Form>

        </Container>
    );
}

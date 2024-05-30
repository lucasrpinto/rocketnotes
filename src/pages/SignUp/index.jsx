import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles'; 


export function SignUp() {
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
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    autoComplete="email"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                    icon={FiLock}
                />

                <Button title="Cadastrar"/>

                <Link to="/">
                    Voltar para o Login
                </Link>
            </Form>

        </Container>
    );
}

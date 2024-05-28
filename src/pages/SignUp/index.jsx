import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

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
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar"/>

                <a href="#">
                    Voltar para o login
                </a>
            </Form>

        </Container>
    );
}

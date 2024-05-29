import { useState } from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';

import { Container, Form } from './styles';

export function New() {
    const [link, setLink] = useState("");

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">Voltar</a>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />
                    
                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem 
                            placeholder="Novo link"
                            value={link} 
                            isNew 
                            onChange={(e) => setLink(e.target.value)} 
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react" />
                            <NoteItem 
                                placeholder="Nova tag"
                                value={link} 
                                isNew 
                                onChange={(e) => setLink(e.target.value)} 
                            />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    );
}

import { Container, Links, Content } from './styles'

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header'
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';




export function Details() {

  return(
    <Container>
      <Header />
      
      <main>
        <Content>

            <ButtonText title="Exluir Nota" />

            <h1>
              Introdução ao React
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis delectus alias laboriosam, tenetur eos consequuntur, maxime rerum aspernatur quo quidem praesentium adipisci, voluptatem et ratione numquam. Nemo, praesentium nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro architecto iste, dignissimos ad obcaecati optio! Molestias aliquam natus amet, doloribus ea, dolor perferendis incidunt veritatis eos veniam repudiandae unde.
            </p>

            <Section title="Links Úteis">
              <Links>
                <li><a href="#">https://www.rocketseat.com.br/</a></li>
                <li><a href="#">https://www.rocketseat.com.br/</a></li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="express" />
              <Tag title="nodejs" />

            </Section>

            <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}
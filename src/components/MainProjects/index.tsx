import { Container, Card, Info, Image, Title, Techs, Actions, Action } from './styles'
import { FiEye, FiCode } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { projects } from './projects'

export function MainProjects () {
  const { t } = useTranslation();


  return(
    <Container id="projects">
      <p className='subtitle'>Projects</p>
      {
       projects.map((project) => (
         <Card> 
           <Image src={project.image} />
           <Info>
              <Title>{project.title}</Title>
             
              <Techs>
                {project.techs.map((tech) => (
                  <span>{tech}</span>
                ))}
              </Techs>

                <Title> {t('Description')} </Title>
                <p className='text'>
                  {project.description}
                </p>

              <Actions>
                <Action href={project.demo}>
                  <FiEye/>
                  Demo
                </Action>
                <Action href={project.source}>
                  <FiCode/>
                  Source
                </Action>
              </Actions>
            </Info>
          </Card>
       ))
      }
    </Container>
  )

} 
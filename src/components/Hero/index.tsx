import { Container, HeroLinks, Link } from './styles'
import { FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa';

import { useTranslation } from 'react-i18next'

export function Hero () {

  const {t} = useTranslation()
  return (
    <Container id="home">
      <p className='text'>{t('Hi, my name is')}</p>
      <p className='title'>Lucas Freitas,</p>
      <p className='subtitle'>{t('I make things for the web.')}</p>
      <p className='text'>{t("I'm a software engineer especializing in Front-end development. Currently, I'm focused on growing and maintaining a huge system at Before TI.")}</p>
      <HeroLinks>
        <Link href='https://github.com/Lucas0liveira'> <FaGithub/> </Link>
        <Link href='https://linkedin.com/in/lucas-oliveira-freitas-20398613b'> <FaLinkedin/> </Link>
        <Link href='https://linkedin.com/in/lucas-oliveira-freitas-20398613b'> <FaCodepen/> </Link>
      </HeroLinks>
    </Container>
  );
}
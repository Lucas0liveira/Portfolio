import React, { useContext, useState, useEffect } from 'react';
import { Container, NavLinks, Link, Button, Select } from  './styles'
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next'

interface Props {
  toggleTheme(): void;
}

export function NavBar({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext)

  const [language, setLanguage] = useState(() => localStorage.getItem('lang') || navigator.language)

  useEffect(() => {
    localStorage.setItem('lang', language)
    changeLanguage(language)
  }, [language])

  const changeLang = (lang: any) => {
    setLanguage(lang);
  }

  const { t } = useTranslation();

  return (
    <Container>
      <NavLinks>
        <Link href="#home">
          <p>{t('HOME')}</p>
        </Link>
        <Link href="#projects">
          <p>{t('PROJECTS')}</p>
        </Link>
        <Link href="#contact">
          <p>{t('CONTACT')}</p>
        </Link>
      </NavLinks>

      <Button> {t('RESUME')} </Button>

      <Select
        value={language || 'enus'}
        onChange={(e) => changeLang(e.target.value)}
        name="Language"
      >
        <option value="en-us">English</option>
        <option value="pt-BR">Português Brasileiro</option>
      </Select>

      <Switch 
        onChange={() => {toggleTheme()}}
        checked={title === 'dark'}
        offColor={colors.primary}
        offHandleColor={colors.text}
        onColor={colors.primary}
        onHandleColor={colors.text}
        handleDiameter={24}
        height={32}
        width={64}
        borderRadius={6}
        checkedIcon={
          <div style ={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
          }}>
            <FiSun size={20} color={colors.text}/>
          </div>
        }
        uncheckedIcon={
          <div style ={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
          }}>
            <FiMoon size={20}  color={colors.text}/>
          </div>
        }
      />
    </Container>
  );
}
import * as React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

export const Footer: React.FC<{
  isDarkMode: boolean
  setDarkMode: (boolean) => void
}> = ({ isDarkMode, setDarkMode }) => {
  const toggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      setDarkMode(!isDarkMode)
    },
    [isDarkMode, setDarkMode]
  )

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2021 Travis Fischer</div>

      <div className={styles.settings}>
        {!config.isServer && (
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkMode}
            title='Tottle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </footer>
  )
}

/* eslint-disable import/order */

import { AnimatePresence, motion } from 'framer-motion'
import { Image, useBreakpointValue, useColorMode } from '@chakra-ui/react'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { memo, useState } from 'react'

import Link from 'next/link'
import { simpleOpacity } from 'config/animations'
import styles from './styles.module.css'

const Logo = () => {
  const { colorMode } = useColorMode()
  const [isLogoLoaded, setLogoLoaded] = useState(false)
  const MotionImage = motion(Image)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <AnimatePresence>
      <Link href="/" passHref>
        {colorMode === ThemeMode.Dark ? (
          <MotionImage
            className={!isMobile ? styles.logo : ''}
            boxSize={isMobile ? '30px' : '50px'}
            objectFit="cover"
            src="./logo.png"
            alt="Ahmed Afify Logo"
            fallbackSrc="./logo.png"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && 'animate'}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        ) : (
          <MotionImage
            className={!isMobile ? styles.logo : ''}
            boxSize={isMobile ? '30px' : '50px'}
            objectFit="cover"
            src="./logo_light.png"
            fallbackSrc="./logo_light.png"
            alt="KL Lawingco Logo"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && 'animate'}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        )}
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)

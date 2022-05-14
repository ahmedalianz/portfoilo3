/* eslint-disable import/order */

import { AnimatePresence, motion } from 'framer-motion'
import {
  Box,
  Image as ChkImage,
  SkeletonCircle,
  useColorModeValue,
} from '@chakra-ui/react'

import { avatarAnimation } from 'config/animations'
import { useEffect } from 'react'

const AvatarImages = {
  DarkMode: '/profile.jfif',
  LightMode: './profile.jfif',
}

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const MotionBox = motion(Box)
  const imgAvatar = useColorModeValue(
    AvatarImages.LightMode,
    AvatarImages.DarkMode
  )
  useEffect(() => {
    // Some nice preloading and caching
    const images = [AvatarImages.DarkMode, AvatarImages.LightMode]
    const preloadedImages = images.map((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
      return img
    })
    window.preloadedPictures = preloadedImages
  }, [])
  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate={'animate'}
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage
          borderRadius="full"
          src={imgAvatar}
          alt="KL Lawingco Avatar"
          htmlWidth="300"
          htmlHeight="300"
          margin="auto"
          fallback={<SkeletonCircle height="100%" width="100%" />}
        />
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar

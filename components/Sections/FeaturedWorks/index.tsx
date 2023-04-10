/* eslint-disable import/order */

import {
  Button,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  fadeInUpSlower,
  galleryStagger,
  simpleOpacity,
} from 'config/animations'

import { Center } from '@chakra-ui/react'
import FeaturedCard from './FeaturedCard'
import { memo } from 'react'
import { mobileBreakpointsMap } from 'config/theme'
import { motion } from 'framer-motion'

const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)
const projects = [
  {
    id: 1,
    name: 'Eagle Interior Design',
    image: '/projects/eagle.png',
    link: 'https://eagle-rio.vercel.app/',
    desc: 'A freelancing project for a landing page for Eagle Interior Design ',
  },
  {
    id: 2,
    name: 'NFT Market ShowCase (mobile App)',
    image: '/projects/nft/1.png',
    link: 'https://nftshowcase-market.vercel.app/',
    desc: 'This Langing Page is Just a ShowCase for the Mobile App NFT Market made using React-native',
  },
  {
    id: 3,
    name: 'Gotcha Store',
    image: '/projects/gotcha/1.png',
    link: 'https://gotcha-store.vercel.app/',

    desc: "In This Application You Can view all the products , add to cart , checkout ,it has admin panel to control every thing like creating products editing them ,  and more , It's also very responsive Design",
  },
  {
    id: 4,
    name: 'Sprout Social',
    image: '/projects/sprout/1.png',
    link: 'https://sprout-social.vercel.app/',
    desc: "In This Application You Can Sign up or login to your account , You can create a post , like it , comment on it ,search for people,view & Edit Your Profile , and more , It's also very responsive Design",
  },
  {
    id: 5,
    name: 'Electronics Store',
    image: '/projects/store/1.png',
    link: 'https://electronicz-store.vercel.app/',
    desc: "In This Application You Can view all the products , add to cart , checkout , and more ,it Supports Arabic Language, It's also very responsive Design",
  },

  {
    id: 6,
    name: 'Netflix Clone',
    image: '/projects/netflix/6.png',
    link: 'https://netflex-nine.vercel.app/',
    desc: "This Application Fetches the Popular Movies and Tv Shows From TMDB ,It's The Same Design Style As The Real Netflix , Manually Customized Components like Accordion & Floating Input Without any external Library , It Supports Two Languages (English & Arabic), It's Also Very responsive Design",
  },
  {
    id: 7,
    name: 'A Website about Doctors',
    image: '/projects/dentist/5.png',
    desc: "This Application is just for preview purposes, You Can view all the doctors ,search with specific place ,sign up ,login,and dashboard to each doctor that can control his bookings, it also comes with dynamic content meaning that the admin can Customize the pages as he likes , and more ,it will be Supporting Arabic Language, It's also very responsive Design",
  },
  {
    id: 8,
    name: 'Pizza Ordering App',
    image: '/projects/pizza/1.png',
    link: 'https://pizza-sooty.vercel.app/',

    desc: "In This Application You Can Order Pizza , You can add Topping , Add To Cart , Checkout ,you can pay cash or via paypal,the admin can contol products & orders create new Pizzas and more , It Supports Two Languages (English & Arabic),  It's also very responsive Design",
  },
]
const FeaturedWorksSection = () => {
  const MotionButton = motion(Button)

  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        My works.
      </Heading>
      <Text variant="description">
        Check out Some Of My works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title={projects[0].name}
            src={projects[0].image}
            description={projects[0].desc}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl={projects[0].link || ''}
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title={projects[1].name}
            src={projects[1].image}
            description={projects[1].desc}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl={projects[1].link || ''}
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title={projects[2].name}
            src={projects[2].image}
            description={projects[2].desc}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl={projects[2].link || ''}
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title={projects[3].name}
            src={projects[3].image}
            description={projects[3].desc}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl={projects[3].link || ''}
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title={projects[4].name}
            src={projects[4].image}
            description={projects[4].desc}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl={projects[4].link || ''}
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={6}
            title={projects[5].name}
            src={projects[5].image}
            description={projects[5].desc}
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl={projects[5].link || ''}
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
      <Center h="100px">
        <MotionButton
          size="lg"
          variant="outline"
          borderWidth="1px"
          borderRadius="0"
          fontWeight="normal"
          fontSize="sm"
          width="120px"
          variants={simpleOpacity}
          as={'a'}
          href="https://ahmedalian.vercel.app/projects"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          See More
        </MotionButton>
      </Center>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)

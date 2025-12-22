import {  HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { MdDashboard } from "react-icons/md";


const SideNav = () => {

    const navLinks=[
        {
            icon:MdDashboard,
            text:"Dashboard",
            link:"/"
        },
         {
            icon:MdDashboard,
            text:"Dashboard",
            link:"/transaction"
        }
    ]

  return (
    <Stack>
        {navLinks.map((nav)=>{
            <HStack key={nav.text}>
                <Icon as={nav.icon} />
                <Text as={nav.text} />
            </HStack>
        })}
    </Stack>
  )
}

export default SideNav

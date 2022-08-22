import { AccordionButton, AccordionItem, AccordionPanel, Box, Icon } from '@chakra-ui/react'
import React from 'react'

import { FaPlus, FaMinus } from "react-icons/fa";

const DetailAccordion = ({heading, description}) => {
  return (
    
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                {heading}
              </Box>
              {isExpanded ? (
                <Icon as={FaMinus}></Icon>
              ) : (
                <Icon as={FaPlus}></Icon>
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
           {description}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
 
  )
}

export default DetailAccordion
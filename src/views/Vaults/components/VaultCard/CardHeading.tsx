import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Image, Tag } from '@crystals/uikit'
import RiskTag from './RiskTag'
import FarmTag from './FarmTag'

export interface ExpandableSectionProps {
  lpLabel?: string
  vaultImage?: string
  lpType?: string
  tolerance?: string
  farmType?: string
}

const Wrapper = styled(Flex)`
  padding-left: 4px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 8px;
  }
`

const StyledFlex = styled(Flex)`
  margin-left: 4px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 40px;
  }
`

const StyledImage = styled(Image)`
  margin-left: 4px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 20px;
  }
`

const StyledTag = styled(Tag)`
  margin-left: 2px;
  margin-bottom: 2px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, vaultImage, lpType, tolerance, farmType }) => {
  return (
    <>
      <Wrapper flexDirection="row" justifyContent="flex-start" alignItems="center" flexGrow={2}>
        <StyledImage src={`/images/vaults/${vaultImage}.svg`} alt={lpLabel} width={96} height={96} />
        <StyledFlex flexDirection="column" alignItems="flex-start">
          <Heading mb="4px">{lpLabel.split(' ')[0]}</Heading>
          <Flex flexDirection="row" justifyContent="flex-start" flexWrap="wrap">
            <RiskTag riskLevel={tolerance} />
            <FarmTag farmType={farmType} />
            <StyledTag scale="sm" variant="secondary" outline>
              {lpType}
            </StyledTag>
          </Flex>
        </StyledFlex>
      </Wrapper>
    </>
  )
}

export default CardHeading

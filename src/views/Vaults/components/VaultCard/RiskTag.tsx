import React from 'react'
import styled from 'styled-components'
import { Tag } from '@crystals/uikit'
import getRiskLevel from 'utils/getVaultRiskLevel'

export interface RiskTagProps {
  riskLevel?: string
}

const StyledTag = styled(Tag)`
  margin-left: 2px;
  margin-bottom: 2px;
`

const RiskTag: React.FC<RiskTagProps> = ({ riskLevel }) => {
  const riskLevelEnum = getRiskLevel(riskLevel)

  return (
    <div>
      {
        {
          ZERO: (
            <StyledTag scale="sm" variant="success">
              Royal Gem
            </StyledTag>
          ),
          LOW: (
            <StyledTag scale="sm" variant="success" outline>
              Premiere Gem
            </StyledTag>
          ),
          MEDIUM: (
            <StyledTag scale="sm" variant="warning" outline>
              Uncut Gem
            </StyledTag>
          ),
          HIGH: (
            <StyledTag scale="sm" variant="failure" outline>
              Hidden Gem
            </StyledTag>
          ),
        }[riskLevelEnum]
      }
    </div>
  )
}

export default RiskTag

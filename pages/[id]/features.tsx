import React from 'react'
import BaseLayout from '../../components/BaseLayout'
import ProjectFeature from '../../components/projects/projectFeature'

type Props = {}

const FeaturesPage = (props: Props) => {
    return (
        <BaseLayout>
            <ProjectFeature />
        </BaseLayout>
    )
}

export default FeaturesPage
import React from 'react'
import BaseLayout from '../../components/BaseLayout'
import ProjectGenerate from '../../components/projects/projectGenerate'

type Props = {}

const GeneratePage = (props: Props) => {
    return (
        <BaseLayout>
            <ProjectGenerate />
        </BaseLayout>
    )
}

export default GeneratePage
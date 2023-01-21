import React from 'react'
import BaseLayout from '../../components/BaseLayout'
import ProjectHeaderMark from '../../components/projects/projectHeaderMark'

type Props = {}

const HeaderMarkPage = (props: Props) => {
    return (
        <BaseLayout>
            <ProjectHeaderMark />
        </BaseLayout>
    )
}

export default HeaderMarkPage
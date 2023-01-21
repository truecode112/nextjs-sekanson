import React from 'react'
import BaseLayout from '../../components/BaseLayout'
import ProjectIpfs from '../../components/projects/projectIpfs'

type Props = {}

const IpfsPage = (props: Props) => {
    return (
        <BaseLayout>
            <ProjectIpfs />
        </BaseLayout>
    )
}

export default IpfsPage
import React from 'react'
import BaseLayout from '../../components/BaseLayout'
import ProjectTeams from '../../components/projects/projectTeams'

type Props = {}

const TeamsPage = (props: Props) => {
    return (
        <BaseLayout>
            <ProjectTeams />
        </BaseLayout>
    )
}

export default TeamsPage
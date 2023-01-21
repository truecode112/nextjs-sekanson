import React from 'react'
import BaseLayout from '../../components/BaseLayout'
import ProjectSettings from '../../components/projects/ProjectSettings'

type Props = {}

const SettingsPage = (props: Props) => {
    return (
        <BaseLayout>
            <ProjectSettings />
        </BaseLayout>
    )
}

export default SettingsPage
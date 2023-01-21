import React from 'react'
import BaseLayout from '../../components/BaseLayout'
import ProjectPayouts from '../../components/projects/projectPayouts'

type Props = {}

const PayoutsPage = (props: Props) => {
    return (
        <BaseLayout>
            <ProjectPayouts />
        </BaseLayout>
    )
}

export default PayoutsPage
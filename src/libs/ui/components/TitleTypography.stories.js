import React from "react"

import TitleTypography from "libs/ui/components/TitleTypography"

export default {
  title: "UI/components/TitleTypography",
  component: TitleTypography
}

const Template = args => <TitleTypography {...args} />

export const Empty = Template.bind({})
Empty.args = {
  title: ""
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  title: "Hello World!!!"
}

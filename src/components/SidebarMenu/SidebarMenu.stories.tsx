import SidebarMenu from "./SidebarMenu";

export default {
  children: "",
  title: "Component/SidebarMenu",
  component: SidebarMenu,
};

const Template = (args: any) => {
  return <SidebarMenu {...args} />;
};

const props = {
  defaultProps: () => ({}),
};

export const SidebarMenuStory: any = Template.bind({});
const defaultProps = props.defaultProps();
SidebarMenuStory.storyName = "SidebarMenu";
SidebarMenuStory.args = {
  ...defaultProps,
};

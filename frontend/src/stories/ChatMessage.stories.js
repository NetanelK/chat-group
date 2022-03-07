import ChatMessage from "../components/ChatMessage";

export default {
    title: "ChatMessage",
    component: ChatMessage
    // argTypes: {
    //     date: { type: "date" }
    // }
};

const Template = (args) => <ChatMessage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    avatar: "/logo192.png",
    name: "test",
    date: new Date(2021, 10, 1),
    content: "blabal"
};
// avatar='/logo192.png'
// name='ithik'
// date={Date.now()}
// content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend vehicula euismod. Donec sit amet venenatis leo, ac tempus sapien.'

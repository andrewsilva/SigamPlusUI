import { CommonModule } from '@angular/common';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { SigamButtonComponent } from './sigam-button.component';



export default {
  title: 'Button',
  component: SigamButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [SigamButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<SigamButtonComponent> = (args: SigamButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  content: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  content: 'Secondary Button',
};

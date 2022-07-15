import React from 'react';
import { styled } from '@storybook/theming';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import { Icon } from './Icon';
import { StoryLinkWrapper } from './StoryLinkWrapper';

export default {
  title: 'Button',
  component: Button,
};

export const Basic = (args) => <Button {...args} />;
Basic.args = { children: 'Label' };

export const All = () => (
  <>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="tertiary">Tertiary</Button>
    <Button appearance="outline">Outline</Button>
    <Button appearance="primaryOutline">Outline primary</Button>
    <Button appearance="secondaryOutline">Outline secondary</Button>
    <div style={{ background: 'grey', display: 'inline-block' }}>
      <Button appearance="inversePrimary">Primary inverse</Button>
    </div>
    <div style={{ background: 'grey', display: 'inline-block' }}>
      <Button appearance="inverseSecondary">Secondary inverse</Button>
    </div>
    <div style={{ background: 'grey', display: 'inline-block' }}>
      <Button appearance="inverseOutline">Outline inverse</Button>
    </div>
  </>
);

export const Sizes = () => (
  <>
    <Button appearance="primary">Default</Button>
    <Button appearance="primary" size="small">
      Small
    </Button>
  </>
);

export const ContainsSVG = () => (
  <>
    <Button appearance="secondary">
      <Icon icon="lock" />
      Default
    </Button>
    <Button appearance="secondary" size="small">
      <Icon icon="lock" />
      Small
    </Button>
    <Button appearance="secondary">
      <Icon icon="check" />
      Default
    </Button>
    <Button appearance="secondary" size="small">
      <Icon icon="check" />
      Small
    </Button>
    <Button appearance="secondary">
      <Icon icon="grid" />
      Default
    </Button>
    <Button appearance="secondary" size="small">
      <Icon icon="grid" />
      Small
    </Button>
  </>
);

export const Loading = () => (
  <>
    <Button appearance="primary" isLoading>
      Primary
    </Button>
    <Button appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button appearance="tertiary" isLoading>
      Tertiary
    </Button>
    <Button appearance="outline" isLoading>
      Outline
    </Button>
    <Button appearance="outline" isLoading loadingText="Custom...">
      Outline
    </Button>
  </>
);

export const Disabled = () => (
  <>
    <Button appearance="primary" isDisabled>
      Primary
    </Button>
    <Button appearance="secondary" isDisabled>
      Secondary
    </Button>
    <Button appearance="tertiary" isDisabled>
      Tertiary
    </Button>
    <Button appearance="outline" isDisabled>
      Outline
    </Button>
  </>
);

export const ContainsIconOnly = () => (
  <>
    <Button appearance="outline" containsIconOnly>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button appearance="outline" size="small" containsIconOnly>
      <Icon icon="link" aria-label="Link" />
    </Button>
  </>
);

// eslint-disable-next-line react/button-has-type
const ButtonWrapper = (props) => <button {...props} />;

export const BasicWrapper = () => (
  <Button
    ButtonWrapper={ButtonWrapper}
    appearance="primary"
    onClick={action('button action click')}
  >
    Button that passes clicks through
  </Button>
);

export const AnchorWrapper = () => (
  <Button ButtonWrapper={StoryLinkWrapper} appearance="primary" href="http://storybook.js.org">
    Button that passes href through
  </Button>
);

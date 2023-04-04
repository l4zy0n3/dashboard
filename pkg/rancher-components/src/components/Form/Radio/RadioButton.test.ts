import { shallowMount } from '@vue/test-utils';
import { RadioButton } from './index';

describe('RadioButton.vue', () => {
  it('renders label slot contents', () => {
    const wrapper = shallowMount(RadioButton, { slots: { label: 'Test Label' } });

    expect(wrapper.find('.labeling').text()).toBe('Test Label');
  });

  it('renders label prop contents', () => {
    const wrapper = shallowMount(RadioButton, { propsData: { label: 'Test Label' } });

    expect(wrapper.find('.radio-label').text()).toBe('Test Label');
  });

  it('renders slot contents when both slot and label prop are provided', () => {
    const wrapper = shallowMount(RadioButton, {
      slots:     { label: 'Test Label - Slot' },
      propsData: { label: 'Test Label - Props' },
    });

    expect(wrapper.find('.labeling').text()).toBe('Test Label - Slot');
  });
});
